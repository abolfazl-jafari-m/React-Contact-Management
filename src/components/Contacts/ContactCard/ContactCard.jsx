import React from 'react'
import UserInfo from './UserInfo/UserInfo'
import Button from '../../shared/Button/Button'

function ContactCard({contact}) {
  return (
    <div className='rounded-md bg-gray-300 px-6 py-3 flex flex-col gap-4'>
        <div className='flex flex-col gap-0.5'>
            <UserInfo info={contact.name} label={"نام"} />
            <UserInfo info={contact.relationship} label={"نسبت"} />
            <UserInfo info={contact.phone} label={"شماره تلفن"} />
            <UserInfo info={contact.email} label={"ایمیل"} />

        </div>
        <div className='self-end'>
            <Button label={"ویرایش"} type={"edit"} className={"py-1 px-5 w-fit rounded-r-md "} />
            <Button label={"حذف"} type={"delete"} className={"py-1 px-5 w-fit rounded-l-md "} />
        </div>


    </div>
  )
}

export default ContactCard