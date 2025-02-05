import React from 'react'
import gif from "../../assets/Images/loading.gif"

function Loading() {
  return (
    <div className='flex fixed justify-center items-center bg-gray-600/50 top-0 left-0 w-full h-screen z-20'>
        <img src={gif} alt='loading'  className='w-[150px] bg-white p-4 rounded-md shadow shadow-black'/>
    </div>
  )
}

export default Loading