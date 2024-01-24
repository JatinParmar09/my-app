'use client'
import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode.react';
import NavbarMain from '../../components/NavbarMain';
import useWebSocket, { ReadyState } from "react-use-websocket";

const qrpage = () => {
    // const [qrCode, setQrCode] = useState(null);
    // useEffect(() => {
    //     const socket = new WebSocket('ws://flipr-attendence-task-production.up.railway.app')

        // socket.onopen = () => {
        //     console.log('WebSocket connected');
        //     socket.send('Hello WebSocket Server!');
        // };
        // socket.onmessage = (event) => {
        //     setUrl(event.data);
        //     console.log(`Received message from server: ${event.data}`);
        // };

        // socket.onclose = () => {
        //     console.log('WebSocket disconnected');
        // };
    //     return () => {
    //         socket.close();
    //     };
    // }, []);
    //     const interval = setInterval(() => {
    //         setQrCode(Math.random());
    //         console.log(qrCode);
    //     }, 5000);
    //     return () => clearInterval(interval);

    // const handleUrlChange = (event) => {
    //     setUrl(event.target.value);
    // };


    // const WS_URL = "ws://flipr-attendence-task-production.up.railway.app";
    // const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(WS_URL);
   
    // useEffect(() => {
    //    if (readyState === ReadyState.OPEN) {
    //      sendJsonMessage("Hello World!");
    //    }
    // }, [readyState]);
   
    // useEffect(() => {
    //    if (lastJsonMessage) {
    //     setUrl(lastJsonMessage);
    //      console.log(`Received message: ${JSON.stringify(lastJsonMessage)}`);
    //    }
    // }, [lastJsonMessage]);
    // console.log(url)

    const [url, setUrl] = useState('new');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
       const ws = new WebSocket('ws://flipr-attendence-task-production.up.railway.app');
   
       ws.onopen = () => {
         console.log('Connection established');
       };
   
       ws.onmessage = (event) => {
           console.log('Message from server: ', event.data);
           setUrl(event.data);
           
       };
   
       setSocket(ws);
   
       return () => {
         ws.close();
       };
    }, []);
   const [showQR, setShowQR] = useState(true);
    const sendMessage = () => {
       if (socket) {
         socket.send('Your message');
        //  setShowQR(true);
       }
             
    };
    

    return (
        <>
            <header>
                <NavbarMain />
            </header>
            <main>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="shadow-md rounded-lg bg-white p-4">
                        <h1 className="text-2xl font-bold mb-2">QR Code Generator</h1>
                        {/* <label htmlFor="url" className="text-lg font-medium mb-2 block">Enter URL:</label> */}
                        {/* <input type="text" id="url" name="url" value={url} onChange={handleUrlChange} className="w-full p-2 border border-gray-400 rounded-md mb-2" /> */}
                        <button onClick={sendMessage} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 '>Show QR</button>
                        <div className="flex justify-center items-center mb-4">
                        {showQR ? <QRCode value={url} size={200}/> :<div></div> }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default qrpage