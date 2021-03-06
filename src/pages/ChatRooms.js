import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/orders/action";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Redirect } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListUserChat from "../components/ListUserChat";
import ReactLoading from "react-loading";

firebase.initializeApp({
    apiKey: "AIzaSyACeEmupJZlCqYf8KADPS9nagdONxkqCrY",
    authDomain: "ez-laundr.firebaseapp.com",
    projectId: "ez-laundr",
    storageBucket: "ez-laundr.appspot.com",
    messagingSenderId: "86317751079",
    appId: "1:86317751079:web:bccfde6d3309c8daf76702",
    measurementId: "G-VE4QP8DJN5",
});

const firestore = firebase.firestore();

export default function ChatRooms({ changeLogin }) {
    const { users, isLoadingOrder } = useSelector((store) => {
        return store.orders;
    });
    const [startChat, setStartChat] = useState(false);
    const [emailCustomer, setEmailCustomer] = useState("");
    const [text, setText] = useState("");
    const [formValue, setFormValue] = useState("");
    const [email, setEmail] = useState("0");
    const dummy = useRef();
    const test = firestore.collection("messages");
    const messagesRef = test.doc(email).collection("chat-history");
    const query = messagesRef.orderBy("createdAt").limit(50);

    const dispacth = useDispatch();

    useEffect(() => {
        dispacth(getUsers());
    }, []);

    const [messages] = useCollectionData(query, { idField: "id" });

    const sendMessage = async () => {
        await messagesRef.add({
            text: text,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            sender: "Admin",
            user: {
                _id: 2,
                user: "Admin",
                name: "Admin",
                avatar: "https://ik.imagekit.io/waknkqe0dx5v/Screen_Shot_2021-09-22_at_3.28.14_PM_8wSR6gNT_4H.png?updatedAt=1632299792115",
            },
        });
        setText("");
        dummy.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="flex">
                <Sidebar changeLogin={changeLogin} />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className="flex-grow min-h-16">
                        <div className="container px-5 py-9 mx-auto">

                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Chat
                            </h1>
                            <div class="flex items-center h-96">
                                <div class="flex-none w-1/3 h-96">
                                    <div className="border-b-2 text-2xl p-4">
                                        Customers
                                    </div>
                                    <div className="mt-2 h-96 overflow-auto">
                                        {isLoadingOrder ? (
                                            <div className="flex justify-center py-20">
                                                <ReactLoading
                                                    type={"spin"}
                                                    color={"blue"}
                                                    height={"20%"}
                                                    width={"20%"}
                                                />
                                            </div>
                                        ) : (
                                            <ul className="mt-2">
                                                {users.map((el) => {
                                                    if (el.role !== "admin") {
                                                        return (
                                                            <button
                                                                className="w-full"
                                                                onClick={() => {
                                                                    setStartChat(
                                                                        true
                                                                    );
                                                                    setEmail(
                                                                        el.email
                                                                    );
                                                                    setEmailCustomer(
                                                                        el.email
                                                                    );
                                                                }}
                                                            >
                                                                <ListUserChat
                                                                    key={el.id}
                                                                    el={el}
                                                                />
                                                            </button>
                                                        );
                                                    }
                                                })}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                <div class="flex-grow h-96 ml-16">
                                    {startChat ? (
                                        <div>
                                            <div className="flex items-center border-b-2 h-16">
                                                <h1 className="text-xl font-bold">
                                                    {emailCustomer}
                                                </h1>
                                            </div>
                                            <div className="flex flex-col justify-end">
                                                <div className=" h-64 overflow-auto ">
                                                    <ul className="mt-2">
                                                        {messages &&
                                                            messages.map(
                                                                (el) => {
                                                                    if (
                                                                        el.sender ===
                                                                        "Admin"
                                                                    ) {
                                                                        return (
                                                                            <li className="flex justify-end items-center bg-white mt-2 p-2  rounded">
                                                                                <div className="flex ml-2">
                                                                                    <div className="flex items-center px-5 py-2 rounded-xl text-white bg-indigo-400">
                                                                                        <span className="">
                                                                                            {
                                                                                                el.text
                                                                                            }
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <li className="flex items-center bg-white mt-2 p-2  rounded">
                                                                                <div className="flex ml-2">
                                                                                    {" "}
                                                                                    <div className="p-1">
                                                                                        <i style={{ color: '#107CF1' }} class="fas fa-user text-3xl"></i>
                                                                                    </div>
                                                                                    <div className="flex items-center ml-2  px-5 py-2 rounded-xl text-white bg-indigo-400">
                                                                                        <span className="w-full">
                                                                                            {
                                                                                                el.text
                                                                                            }
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        );
                                                                    }
                                                                }
                                                            )}
                                                        <span
                                                            ref={dummy}
                                                        ></span>
                                                    </ul>
                                                </div>
                                                <div class="flex justify-between space-x-3 border-t-2 border-b-2 h-16 p-3 ">
                                                    <input
                                                        value={text}
                                                        onChange={(e) =>
                                                            setText(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="p-2 w-full focus:outline-none"
                                                        onKeyUp={(e) => {
                                                            if (e.which === 13) {
                                                                sendMessage()
                                                            }
                                                        }}
                                                        placeholder="type your message..."
                                                    />
                                                    <button
                                                        onClick={sendMessage}
                                                    >
                                                        <i class="far fa-paper-plane"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className=" h-full flex justify-center items-center">
                                            <p>Choose Convertation</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* {
                                userId !== "0" ? (
                                    <div class=" mt-5 ml-3 mr-3">
                                        <button
                                            onClick={() => {
                                                setUserId("0");
                                            }}
                                            className="btn"
                                        >
                                            Back
                                        </button>
                                        <main class="textarea textarea-bordered">
                                            {messages &&
                                                messages.map((msg) => (
                                                    <ChatMessage key={msg.id} message={msg} />
                                                ))}
                                            <span ref={dummy}></span>
                                            {console.log(test, "ini test")}
                                            <form
                                                class="input align-item:flex-end"
                                                onSubmit={sendMessage}
                                            >
                                                <input
                                                    class="input input-md"
                                                    value={formValue}
                                                    onChange={(e) => setFormValue(e.target.value)}
                                                    placeholder="Write a message"
                                                />
                                                <button
                                                    class="btn ml-5"
                                                    type="submit"
                                                    disabled={!formValue}
                                                >
                                                    Send
                                                </button>
                                            </form>
                                        </main>
                                    </div>
                                ) : (
                                    <div className="mt-5 ml-5">
                                        {users.map((user) => {
                                            if (user.role !== "admin") {
                                                return (
                                                    <div>
                                                        <p>
                                                            User: {user.role}-{user.id}
                                                        </p>
                                                        <p>Email: {user.email}</p>
                                                        <div>
                                                            <button
                                                                className="btn btn-primary "
                                                                onClick={() => {
                                                                    setUserId(user.id.toString());
                                                                    console.log(user.id.toString());
                                                                }}
                                                            >
                                                                Start chatting
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                )
                            } */}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
    // if (userId !== "0") {
    //     return (
    //         <div class=" mt-5 ml-3 mr-3">
    //             <button
    //                 onClick={() => {
    //                     setUserId("0");
    //                 }}
    //                 className="btn"
    //             >
    //                 Back
    //             </button>
    //             <main class="textarea textarea-bordered">
    //                 {messages &&
    //                     messages.map((msg) => (
    //                         <ChatMessage key={msg.id} message={msg} />
    //                     ))}

    //                 <span ref={dummy}></span>
    //                 {console.log(test, "ini test")}

    //                 <form
    //                     class="input align-item:flex-end"
    //                     style={{
    //                         bottom: 50,
    //                         right: 0,
    //                         position: "fixed",
    //                     }}
    //                     onSubmit={sendMessage}
    //                 >
    //                     <input
    //                         style={{ width: "93.5vw" }}
    //                         class="input input-md"
    //                         value={formValue}
    //                         onChange={(e) => setFormValue(e.target.value)}
    //                         placeholder="Write a message"
    //                     />
    //                     <button
    //                         class="btn ml-5"
    //                         type="submit"
    //                         disabled={!formValue}
    //                     >
    //                         Send
    //                     </button>
    //                 </form>
    //             </main>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="mt-5 ml-5">
    //             {users.map((user) => {
    //                 if (user.role !== "admin") {
    //                     return (
    //                         <div>
    //                             <p>
    //                                 User: {user.role}-{user.id}
    //                             </p>
    //                             <p>Email: {user.email}</p>
    //                             <div>
    //                                 <button
    //                                     className="btn btn-primary "
    //                                     onClick={() => {
    //                                         setUserId(user.id.toString());
    //                                         console.log(user.id.toString());
    //                                     }}
    //                                 >
    //                                     Start chatting
    //                                 </button>
    //                             </div>
    //                         </div>
    //                     );
    //                 }
    //             })}
    //         </div>
    //     );
    // }
}

function ChatMessage(props) {
    const { text, sender } = props.message;

    return (
        <div>
            <h1 className="font-black">{sender}</h1>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
}
