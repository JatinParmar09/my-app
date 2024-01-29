'use client'
import React from 'react'
import loader from './loader.json'
import Lottie from "lottie-react";
const Loading = () => {
  return (
    <>
    <div className='w-5 h-5'>
        <Lottie animationData={loader} loop={true} className='w-fit h-fit m-auto mt-auto' />
        </div>
    </>
  )
}

export default Loading