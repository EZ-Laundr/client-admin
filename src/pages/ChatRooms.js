import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../store/orders/action";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Redirect } from "react-router-dom";

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

export default function ChatRooms() {
    const [formValue, setFormValue] = useState("");
    const [userId, setUserId] = useState("0");
    const dummy = useRef();
    const test = firestore.collection("messages");
    const messagesRef = test.doc(userId).collection("newCollection");
    const query = messagesRef.orderBy("createdAt").limit(25);
    const { orders } = useSelector((store) => {
        return store.orders;
    });
    const dispacth = useDispatch();
    useEffect(() => {
        dispacth(getOrders());
    }, []);

    const [messages] = useCollectionData(query, { idField: "id" });

    const sendMessage = async (e) => {
        e.preventDefault();

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            sender: "Admin",
        });
        setFormValue("");
        dummy.current.scrollIntoView({ behavior: "smooth" });
    };

    console.log(orders, "ini orders");
    if (userId !== "0") {
        return (
            <div class=" mt-5 ml-3 mr-3">
                <button
                    onClick={() => {
                        setUserId("0");
                    }}
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
                        style={{
                            bottom: 50,
                            right: 0,
                            position: "fixed",
                        }}
                        onSubmit={sendMessage}
                    >
                        <input
                            style={{ width: "93.5vw" }}
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
        );
    } else {
        return (
            <div>
                <button
                    onClick={() => {
                        setUserId("2");
                    }}
                >
                    Start chatting
                </button>
            </div>
        );
    }
}

function ChatMessage(props) {
    const { text, sender } = props.message;

    return (
        <div>
            <h1>{sender}</h1>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
}
