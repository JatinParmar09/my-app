'use client'
import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode.react';
import NavbarMain from '../../../components/NavbarMain';
import useWebSocket, { ReadyState } from "react-use-websocket";
import axios from 'axios';

const qrpage = () => {
    const[check,setCheck] = useState(false);
    useEffect( () => {
      const cookieValue = document.cookie.split('=')[1];
      const headers = {
        Authorization: `Bearer ${cookieValue}`
      }
       axios.get("https://flipr-yi8b.onrender.com/api/test2",
       {headers}
       )
        .then((response) => {
          console.log("SUCCESS");
          setCheck(true);})
        .catch((error) => {
          window.location.href = '/';    
    }
      ); 
    }, []);
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

    const [url, setUrl] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
       const ws = new WebSocket('ws://flipr-yi8b.onrender.com');
   
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
//    const [showQR, setShowQR] = useState(false);
    const sendMessage = () => {
       if (socket) {
         socket.send('Your message');
        //  setShowQR(true);
       }
             
    };
    

    return (
        check ? (
        <>
            <header>
                <NavbarMain />
            </header>
            <main>
                <div className="flex flex-col items-center justify-center h-[75vh] bg-gray-100">
                    <div className="shadow-md rounded-lg bg-white p-4">
                        <h1 className="text-2xl font-bold mb-2">Scan to mark attendance</h1>
                        <div className="flex justify-center items-center mb-4">
                        {(url==='WAIT FOR ONE MINUTE' || url===''?(<p>WAIT FOR ONE MINUTE</p>): <QRCode value={url} size={200}/>) }
                        </div>
                    </div>
                </div>
            </main>
        </>) : <></>
    )
}

export default qrpage