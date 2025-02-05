import React, { useEffect, useState } from "react";
import Label from "../shared/Label/Label";
import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import SelectBox from "../shared/SelectBox/SelectBox";
import { storeContact, updateContact } from "../../services/contact";
import Loading from "../Loading/Loading";

function From({ setContacts, information, setVisibility }) {
  const [formData, setFormData] = useState({

  });
  const [error, setError] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneNumberPattern = /((0?9)|(\+?989))\d{9}/;

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };
  const fromCilckHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (!information) {
      storeContact(formData)
        .then((res) => {
          if (res) {
            setContacts((c) => {
              return [...c, res];
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      updateContact(information.id, formData)
        .then((res) => {
          if (res) {
            setContacts((c) => {
              let data = c.filter((item) => item.id !== information.id);
              return [...data, res];
            });
            setVisibility(false);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const fromVaildation = () => {
    const errors = {};
    if (formData.name === "") {
      errors.name = "نام خود را وارد کنید";
    }
    if (formData.email === "") {
      errors.email = "ایمیل خود را وارد کنید";
    } else if (!emailPattern.test(formData.email) && formData.email) {
      errors.email = "فرمت ایمیل صحیح وارد کنید را وارد کنید";
    }
    if (formData.phone === "") {
      errors.phone = "شماره تماس  خود را وارد کنید";
    } else if (!phoneNumberPattern.test(formData.phone) && formData.phone) {
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
    if (information) {
      setFormData(information);
    }
  }, []);

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
              options={["فامیل ", "دوست", "اشنا", "همکار", "خانواده"]}
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
            label={information ? "ویرایش" : "اضافه کردن"}
            className={"py-2 px-5 w-fit rounded-md "}
            disabled={!!Object.keys(error).length || Object.keys(formData).length < 5}
            onClick={fromCilckHandler}
          />
        </form>
      </div>
      {
        isloading && <Loading />
      }
    </>
  );
}

export default From;
