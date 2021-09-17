import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import QrReader from 'react-qr-reader'
import '../index.css'
import { useHistory } from 'react-router'


export default function Qr() {
    const history = useHistory()

    function handleError(err) {
        console.log(err)
    }
    function handleScan(res) {
        if (res) {
            history.push(res)
        }
    }
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-10 mx-auto">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 flex justify-center">QR Code</h1>
                                <div className="flex justify-center">
                                    <QrReader
                                        delay={300}
                                        style={{ width: 400 }}
                                        onError={handleError}
                                        onScan={handleScan}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}