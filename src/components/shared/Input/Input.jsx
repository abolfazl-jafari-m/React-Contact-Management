import React from "react";

function Input({onChange , value = "" , placeholder , error , name}) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="shadow-sm shadow-gray-400 rounded-sm p-2 drop-shadow-sm outline-none border-none "
      />
      <span className="text-xs text-red-500 font-semibold tracking-tight h-5">{error}</span>
    </div>
  );
}

export default Input;
