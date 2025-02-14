import React, { useState } from "react";
import UserInfo from "./UserInfo/UserInfo";
import Button from "../../shared/Button/Button";
import { deleteContact, getContact } from "../../../services/contact";
import Modal from "../../Modal/Modal";
import Loading from "../../Loading/Loading";
import { toast, Slide } from "react-toastify";

function ContactCard({ contact, setContacts }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const deleteBtnHandler = () => {
    setIsLoading(true);
    deleteContact(contact.id)
      .then((res) => {
        if (res) {
          toast.success("مخاطب با موفقیت حذف شد", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
          setContacts((c) => {
            return c.filter((item) => item.id !== contact.id);
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const editBtnHandler = () => {
    setEditModal(true);
  };
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
            onClick={editBtnHandler}
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
      {editModal && (
        <Modal
          setContacts={setContacts}
          contact={contact}
          setVisibility={setEditModal}
        />
      )}

      {isloading && <Loading />}
    </>
  );
}

export default ContactCard;
