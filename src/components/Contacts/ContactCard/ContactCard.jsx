import React from 'react'
import UserInfo from './UserInfo/UserInfo'
import Button from '../../shared/Button/Button'

function ContactCard() {
  return (
    <div className='rounded-md bg-gray-300 p-6 flex flex-col gap-4'>
        <div className='flex flex-col gap-0.5'>
            <UserInfo info={"ابوالفضل"} label={"نام"} />
            <UserInfo info={"فامیل"} label={"نسبت"} />
            <UserInfo info={"09125203054"} label={"شماره تلفن"} />
            <UserInfo info={"abolfazljafari563@gmail.com"} label={"ایمیل"} />

        </div>
        <div className='self-end'>
            <Button label={"ویرایش"} type={"edit"} className={"py-1 px-5 w-fit rounded-r-md "} />
            <Button label={"حذف"} type={"delete"} className={"py-1 px-5 w-fit rounded-l-md "} />
        </div>


    </div>
  )
}

export default ContactCard