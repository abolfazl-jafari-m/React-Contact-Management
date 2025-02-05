import React, { useState } from "react";
import UserInfo from "./UserInfo/UserInfo";
import Button from "../../shared/Button/Button";
import { deleteContact } from "../../../services/contact";

function ContactCard({ contact , setContacts }) {
  const [deleteModal, setDeleteModal] = useState(false);

  const deleteBtnHandler = () =>{
    deleteContact(contact.id)
      .then((res)=>{
        if(res){
              setContacts((c)=> {
                return c.filter((item)=> item.id !== contact.id)
              })
        }
      })
  }
  return (
    <>
      <div className="rounded-md bg-gray-300 px-6 py-3 flex flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <UserInfo info={contact.name} label={"نام"} />
          <UserInfo info={contact.relationship} label={"نسبت"} />
          <UserInfo info={contact.phone} label={"شماره تلفن"} />
          <UserInfo info={contact.email} label={"ایمیل"} />
        </div>
        <div className="self-end">
          <Button
            label={"ویرایش"}
            type={"edit"}
            className={"py-1 px-5 w-fit rounded-r-md "}
          />
          <Button
            label={"حذف"}
            type={"delete"}
            className={"py-1 px-5 w-fit rounded-l-md "}
            onClick={() => setDeleteModal(true)}
          />
        </div>
      </div>

      {deleteModal && (
        <div className="flex justify-center items-center bg-gray-600/50 fixed w-full h-screen z-10 top-0 left-0 transition-all duration-150">
          <div className="bg-white p-4 rounded-md shadow-md shadow-black flex flex-col items-center gap-6">
            <p>ایا از حذف کردن این مخاطب اطمینان دارید</p>
            <div className="flex items-center gap-5">
              <Button
                label={"بله"}
                type={"delete"}
                className={"px-6 py-1 rounded-md"}
                onClick={deleteBtnHandler}
              />
              <Button
                label={"خیر"}
                type={"primery"}
                className={"px-6 py-1 rounded-md"}
                onClick={() => setDeleteModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactCard;
