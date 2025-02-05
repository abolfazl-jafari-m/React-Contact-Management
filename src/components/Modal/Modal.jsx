import React from 'react'
import From from '../Form/From'

function Modal({contact ,setContacts  ,setVisibility}) {
  return (
    <div className='flex items-center justify-center h-screen w-full fixed top-0 left-0 bg-gray-600/50'>
        <div className='bg-white relative p-5 rounded-md shadow shadow-black w-2/3'>
                <From information={contact} setContacts={setContacts} setVisibility={setVisibility}/>
                <span className='font-bold text-2xl text-red-700 absolute top-4 left-4 cursor-pointer ' onClick={()=>setVisibility(false)}>X</span>
        </div>

    </div>
  )
}

export default Modal