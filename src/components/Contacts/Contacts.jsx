import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard/ContactCard";
import { toast, Slide } from "react-toastify";
import { getContacts } from "../../services/contact";

function Contacts({contacts , setContacts}) {
  useEffect(() => {
    getContacts()
        .then((res) => {
          if (res) {
            setContacts(res);
          }
    })
  
  }, []);

  const contactItems = contacts?.map((contact)=><ContactCard key={contact.id} contact={contact} />)
  return (
    <>
      <div className=" p-4" >
        <h2 className="font-bold text-lg text-center">لیست کاربران</h2>
        <div className="grid grid-cols-2 gap-5 bg-gray-200 p-3 rounded-md mt-5 max-h-[500px]  overflow-y-scroll no-scrollbar ">
          {contactItems}
        </div>
      </div>
    </>
  );
}

export default Contacts;
