import React from 'react'
import ContactCard from './ContactCard/ContactCard'

function Contacts() {
  return (
    <>
    <div className='flex flex-col gap-2 p-4'>
        <h2 className='font-bold text-lg text-center'>لیست کاربران</h2>
        <div className='grid grid-cols-2 gap-5 bg-gray-200 p-3 rounded-md  overflow-y-scroll h-3/4 no-scrollbar '>
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />

        </div>
    </div>
    </>
  )
}

export default Contacts