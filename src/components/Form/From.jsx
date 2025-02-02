import React, { useEffect, useState } from "react";
import Label from "../shared/Label/Label";
import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";

function From() {
  const [formData, setFormData] = useState({});
  const [error ,setError] = useState({})

  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const phoneNumberPattern = /((0?9)|(\+?989))\d{9}/g

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    console.log(formData);    
  };

  useEffect(() => {
    const errors= {};
    if(formData.name === "" ){
      errors.name = "نام خود را وارد کنید";
    }
    if(formData.email === "" ){
      errors.email = "ایمیل خود را وارد کنید";
    }else if(emailPattern.test(formData.email)){
      errors.email = "فرمت ایمیل صحیح وارد کنید را وارد کنید";
      
    }
    if(formData.phone === "" ){
      errors.phone = "شماره تماس  خود را وارد کنید";
    }else if(phoneNumberPattern.test(formData.phone)){
      errors.phone = "فرمت شماره تلفن صحیح وارد کنید را وارد کنید";
      
    }
    if(formData.relationship === "" ){
      errors.relationship = "نسبت خود را وارد کنید";
    }
    if(formData.lastName === "" ){
      errors.lastName = "نام خانوادگی خود را وارد کنید";
    }

    setError(errors);
    console.log(errors)
    console.log(formData);

  }, [formData]);
  return (
    <>
      <div className="p-4 flex gap-2 flex-col">
        <h2 className="font-bold text-lg text-center">
          اضافه / ویرایش مخاطبین
        </h2>
        <form className="bg-white rounded-md shadow flex flex-col gap-1 shadow-gray-500 px-6 py-4">
          <div className="flex gap-1 flex-col">
            <Label label={"نام"} />
            <Input onChange={inputHandler}/>
          </div>
          <div className="flex gap-1 flex-col">
            <Label label={" نام خانوادگی"} />
            <Input />
          </div>
          <div className="flex gap-1 flex-col">
            <Label label={"شماره موبایل"} />
            <Input />
          </div>
          <div className="flex gap-1 flex-col">
            <Label label={"نسبت"} />
            <Input />
          </div>
          <div className="flex gap-1 flex-col">
            <Label label={"ایمیل"} />
            <Input />
          </div>
          <Button
            type={"primery"}
            label={"اضافه کردن"}
            className={"py-2 px-5 w-fit rounded-md "}
          />
        </form>
      </div>
    </>
  );
}

export default From;
