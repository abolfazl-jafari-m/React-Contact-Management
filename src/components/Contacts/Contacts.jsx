import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard/ContactCard";
import { toast, Slide } from "react-toastify";
import { getContacts } from "../../services/contact";
import empty from "../../assets/Images/empty-state.png"

function Contacts({contacts , setContacts}) {
  useEffect(() => {
    getContacts()
        .then((res) => {
          if (res) {
            setContacts(res);
          }
    })
  
  }, []);

  const contactItems = contacts?.map((contact)=><ContactCard key={contact.id} contact={contact} setContacts={setContacts} />)
  return (
    <>
      <div className=" p-4" >
        <h2 className="font-bold text-lg text-center">لیست کاربران</h2>
        <div className="grid grid-cols-2 gap-5 bg-gray-200 p-3 rounded-md mt-5 max-h-[500px]  overflow-y-scroll no-scrollbar ">
          {
            contactItems.length
              ? contactItems
              : <div className="flex items-center justify-center flex-col p-3 w-full col-span-full">
                <img src={empty} alt="empty" className="w-3/5" />
                    <p>برای شروع یک مخاطب اضافه کنید</p>
              </div>
          }
          
        </div>
      </div>
    </>
  );
}

export default Contacts;
