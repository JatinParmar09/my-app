'use client'
import React from 'react'
import loader from './loader.json'
import Lottie from "lottie-react";
const Loading = () => {
  return (
    <>
    <div className='w-[50vw] h-[50vh]'>
        <Lottie animationData={loader} loop={true} />
        </div>
    </>
  )
}

export default Loading