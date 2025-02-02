import React from "react";

function UserInfo({label , info}) {
  return (
    <div className="flex gap-1 items-center text-sm">
      <span className="font-bold"> {label}:</span>
      <span>{info}</span>
    </div>
  );
}

export default UserInfo;
