import React from "react";
import Label from "../shared/Label/Label";
import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";

function From() {
  return (
    <>
      <div className="p-4 flex gap-2 flex-col">
        <h2 className="font-bold text-lg text-center">
          اضافه / ویرایش مخاطبین
        </h2>
        <form className="bg-white rounded-md shadow flex flex-col gap-1 shadow-gray-500 px-6 py-4">
          <div className="flex gap-1 flex-col">
            <Label label={"نام"} />
            <Input />
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
          <Button type={"primery"} label={"اضافه کردن"} className={"py-2 px-5 w-fit rounded-md "} />
        </form>
      </div>
    </>
  );
}

export default From;
