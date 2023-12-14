'use client'

import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputText from '../Inputs/InputText';
import RegistrationButton from '../Buttons/RegistrationButton';
import OtpInput from '../Inputs/InputOtp';
import Link from 'next/link';

const schema = yup.object({
    phoneNumber: yup
      .string()
      .required("Phone number is required.")
      .matches(
        /^[0-9]{10}$/,
        "Phone number must be a 10-digit number without any special characters."
      ),
  }).required();

const LoginForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)});
    const [otp, setOtp] = useState("");
    const [isOtpInput, setIsOtpInput] = useState<boolean>(false)

    const onSubmitLogin = (data: any) => {
      console.log("data",data)
      setIsOtpInput(true)
    }

    const onSubmitOtp = (data: any) => {
      console.log(data)
      console.log(otp)
    }

    const changeNumber = () => {
      setIsOtpInput(false)
    }
  return (
    <>
      <form
        className='py-8'
        onSubmit={(e) => {
          e.preventDefault()
          isOtpInput ? handleSubmit(onSubmitOtp)() : handleSubmit(onSubmitLogin)() ;
        }}
        >
        <InputText name="phoneNumber" type="text" placeholder='Enter Phone No.' register={register} required error={errors.phoneNumber?.message} disabled={isOtpInput} />
        {
          isOtpInput && (
            <OtpInput
            value={otp}
            onChange={(val) => {
              setOtp(val);
            }}
            />
            )
          }
        <RegistrationButton text={isOtpInput ? "Verify Otp" : "Login"} />
        {
          isOtpInput && (
            <div className='flex justify-between text-theme-color-3 mt-2 underline'>
              <button type='button' onClick={changeNumber}>
                Change number
              </button>
              <button>
                Resend Otp
              </button>
            </div>
          )
        }
      </form>
      <div className='flex flex-wrap justify-center gap-2 text-xl'>
        <div>
          Don't have account ?
        </div>
        <Link href='/signup' className='text-theme-color-3 font-bold'>
          Signup instead
        </Link>
      </div>
    </>
  )
}

export default LoginForm
