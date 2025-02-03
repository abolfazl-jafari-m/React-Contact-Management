import React, { useEffect, useState } from "react";
import Label from "../shared/Label/Label";
import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import SelectBox from "../shared/SelectBox/SelectBox";

function From() {
  const [formData, setFormData] = useState({name: '' , lastName : '' , relationship : "" , email : "" , phone : ""});
  const [error, setError] = useState({});

  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneNumberPattern = /((0?9)|(\+?989))\d{9}/;

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };
  const fromCilckHandler = (e)=>{
    e.preventDefault();
    console.log(formData);
    
    

  }

  const fromVaildation = () => {
    const errors = {};
    if (formData.name === "") {
      errors.name = "نام خود را وارد کنید";
    }
    if (formData.email === "") {
      errors.email = "ایمیل خود را وارد کنید";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "فرمت ایمیل صحیح وارد کنید را وارد کنید";
    }
    if (formData.phone === "") {
      errors.phone = "شماره تماس  خود را وارد کنید";
    } else if (!phoneNumberPattern.test(formData.phone)) {
      errors.phone = "فرمت شماره تلفن صحیح وارد کنید را وارد کنید";
    }
    if (formData.relationship === "") {
      errors.relationship = "نسبت خود را وارد کنید";
    }
    if (formData.lastName === "") {
      errors.lastName = "نام خانوادگی خود را وارد کنید";
    }
    setError(errors);
  };

  useEffect(() => {
    fromVaildation();
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
            <Input
              onChange={inputHandler}
              name={"name"}
              error={error.name}
              placeholder="نام ..."
              value={formData.name}
            />
          </div>
          <div className="flex gap-1 flex-col">
            <Label label={" نام خانوادگی"} />
            <Input
              onChange={inputHandler}
              name={"lastName"}
              error={error.lastName}
              placeholder="نام خانوادگی ..."
              value={formData.lastName}
            />
          </div>
          <div className="flex gap-1 flex-col">
            <Label label={"شماره موبایل"} />
            <Input
              onChange={inputHandler}
              name={"phone"}
              error={error.phone}
              placeholder="شماره موبایل ..."
              value={formData.phone}
            />
          </div>
          <div className="flex gap-1 flex-col">
            <Label label={"نسبت"} />
            <SelectBox
            onChange={inputHandler}
            name={"relationship"}
            error={error.relationship}
            placeholder="نسبت..."
            value={formData.relationship}
            options={["فامیل " ,"دوست","اشنا","همکار", "خانواده"]}
            />
          </div>
          <div className="flex gap-1 flex-col">
            <Label label={"ایمیل"} />
            <Input
              onChange={inputHandler}
              name={"email"}
              error={error.email}
              placeholder="ایمیل ..."
              value={formData.email}
            />
          </div>
          <Button
            type={"primery"}
            label={"اضافه کردن"}
            className={"py-2 px-5 w-fit rounded-md "}
            disabled={!!Object.keys(error).length}
            onClick={fromCilckHandler}
          />
        </form>
      </div>
    </>
  );
}

export default From;
