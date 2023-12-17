import React, { useState } from 'react'
import { UseFormRegister } from "react-hook-form";

type InputTextSocialLinksProps = {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  required: boolean;
  icon?: string
  disabled?: boolean,
  error: string | undefined;
}
const InputTextSocialLinks = ({type, name, placeholder, register, required, icon, disabled, error}: InputTextSocialLinksProps) => {

  const IconComponent = icon ? require(`react-icons/${icon}`).default : "RiErrorWarningFill";

  return (
    <div>
      <div className='flex relative'>
        <input
            type={type}
            className={`w-full autofill:bg-yellow-200 rounded-sm py-3 my-3 border-b text-xl border-primary focus:outline-none focus:ring-transparent ${disabled && "disabled:bg-gray-100 disabled:cursor-not-allowed"}`}
            placeholder={placeholder}
            {...register(name, { required })}
            disabled={disabled} 
        />
        <div>
          <IconComponent />
        </div>
      </div>
        {error && <p className='text-red-600 text-sm'>{error}</p>}
    </div>
  )
}

export default InputTextSocialLinks