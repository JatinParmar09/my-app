'use client'
import { React, useEffect, useState, useRef, useCallback } from 'react'
import QRScanner from 'qr-scanner';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Scanner = () => {

  const[check,setCheck] = useState(false);
  useEffect( () => {
    const cookieValue = document.cookie.split('=')[1];
    const headers = {
      Authorization: `Bearer ${cookieValue}`
    }
     axios.get('https://flipr-yi8b.onrender.com/api/test2',
     {headers}
     )
      .then((response) => {
        console.log('SUCCESS');
        setCheck(true);})
      .catch((error) => {
        console.log('ERROR');
        window.location.href = '/';    
  }
    ); 
  }, []);
  const router = useRouter();
  const [hasScanned, setHasScanned] = useState(false);
  const videoRef = useRef();
  // const handleSuccess = () => {
  //   toast.success('QR Code scan successful!', {
  //      position: 'top-right',
  //      autoClose: 3000,
  //      hideProgressBar: false,
  //      closeOnClick: true,
  //      pauseOnHover: true,
  //      draggable: true,
  //      progress: undefined,
  //   });
  //   setTimeout(() => {
  //     router.push('/student-dashboard');
  //     toast.dismiss();
  //     setHasScanned(true);
  //  }, 4000);
  //  };
  const handleSuccess = useCallback(() => {
    toast.success('QR Code scan successful!', {
       position: 'top-right',
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
    });
    setTimeout(() => {
      router.push('/student-dashboard');
      toast.dismiss();
      setHasScanned(true);
   }, 2000);
}, []);
   
  useEffect(() => {
    let scanner;
    const videoElem = videoRef.current;
    const userid = parseInt(localStorage.getItem('UserID'));
    console.log(userid, typeof(userid));
    async function startScanner() {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: {
          facingMode: 'environment'
        }
     });
      const videoElem = videoRef.current; // Add this line to define videoElem
      if (videoElem) {
        videoElem.srcObject = stream;
        scanner = new QRScanner(videoElem, result => {
          if (!hasScanned) {
            console.log('decoded qr code:', result)
            console.log(typeof(result));
            handleSuccess();
            // Send the result to the backend
            axios.post('https://flipr-yi8b.onrender.com/api/mark_attendance', {
              student_id: userid,
              qr_id: result
            }).then((response) => {console.log('Success')})
            .catch((error) => {console.log('Error')});
            // router.push('/student-dashboard');
          }
        });
        scanner.start();
      }
    }

    startScanner().catch('ScannerError', console.error);
    return () => {
      if (scanner) {
        scanner.stop();
        scanner.destroy();
      }
    };
  }, [handleSuccess, hasScanned]);
  return (
    check ? (
    <>
     <ToastContainer />
      <div className='flex flex-col justify-center items-center p-5'>
        <p className='text-2xl text-blue-700 font-semibold'>Scan the QR Code</p>
        <div className=' flex justify-center place-items-center h-[75vh]'>
          <video ref={videoRef} autoPlay playsInline className='w-fit h-fit'></video>
        </div>
      </div>
    </>) : <></>
  )
}

export default Scanner