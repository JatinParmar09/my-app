'use client'
import {React, useEffect, useState, useRef} from 'react'
import QRScanner from "qr-scanner";
import CameraUtils from "@mediapipe/camera_utils";

// import { QrReader } from 'react-qr-reader';
const scanner = () => {
//     const handleError = (err) => {
//         console.error(err);
//      };
//      const [result, setResult] = useState('');

//  const handleScan = (data) => {
//     if (data) {
//       setResult(data);
//       // Send the result to the backend
//       fetch('/api/student-id', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ studentId: data }),
//       });
//     }
//  };
//     const [hasPermission, setHasPermission] = useState(false);
   
//     useEffect(() => {
//       navigator.mediaDevices.getUserMedia({ video: true })
//         .then(() => {
//           setHasPermission(true);
//         })
//         .catch(() => {
//           setHasPermission(false);
//         });
//     }, []);

// useEffect(() => {
//   const videoElem = document.getElementById('video');
//   const scanner = new QRScanner(videoElem, result => console.log('decoded qr code:', result));
//   scanner.start();


//   return () => {
//       scanner.stop();
//       scanner.destroy();
//   };
// }, []);
const videoRef = useRef();

    useEffect(() => {
        let scanner;
        const videoElem = videoRef.current;

        async function startScanner() {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoElem.srcObject = stream;
            scanner = new QRScanner(videoElem, result => console.log('decoded qr code:', result));
            scanner.start();
        }

        startScanner().catch(console.error);
        return () => {
          if (scanner) {
              scanner.stop();
              scanner.destroy();
          }
      };
  }, []);
  return (
    <>
        {/* <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">QR Scanner</h1>
      <QrReader
        delay={300}
        constraints={{
            facingMode: 'environment' // Use the back camera
         }}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>Student ID: {result}</p>
    </div> */}
       {/* <div>
     {hasPermission ? (
       <p>Camera permission granted</p>
     ) : (
       <p>Camera permission denied</p>
     )}
    </div> */}
    <p>Scanner</p>

   <video ref={videoRef} autoPlay playsInline className="w-full h-auto"></video>
    
    </>
  )
}

export default scanner