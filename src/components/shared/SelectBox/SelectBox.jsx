import React from 'react'

function SelectBox({onChange,name , value, placeholder ,options=[] , error}) {

  return (
    <div className="flex flex-col gap-2">
   <select
    onChange={onChange}
    value={value}
    name={name}
    className='shadow-sm shadow-gray-400 rounded-sm p-2 drop-shadow-sm outline-none border-none '>
        <option value={""}>{placeholder}</option>
        {options.map((item , index)=><option key={index} value={item}>{item}</option>)}
    </select>
    <span className="text-xs text-red-500 font-semibold tracking-tight h-5">{error}</span>
    </div>
 
  )
}

export default SelectBox