import React, { useState } from 'react'
import { UseFormRegister } from "react-hook-form";
import OtpInput from './InputOtp';

type InputFileProps = {
  type: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required: boolean;
  error: string | undefined;
}
const InputFile = ({type, label, name, register, required, error}: InputFileProps) => {
  return (
    <div>
      <div className='my-3'>
        <label className='font-semibold text-gray-400'>{label}</label>
        <input
            type={type}
            className="w-full autofill:bg-yellow-200 rounded-sm pb-2 border-b text-xl border-primary focus:outline-none focus:ring-transparent 
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-base file:font-semibold
            file:bg-theme-color-3 file:text-secondary
            hover:file:bg-primary"
            {...register(name, { required })}
        />
      </div>
        {error && <p className='text-red-600 text-sm'>{error}</p>}
    </div>
  )
}

export default InputFile