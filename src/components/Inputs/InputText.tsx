import React, { useState } from "react"
import { UseFormRegister } from "react-hook-form"

type InputTextProps = {
  type: string
  name: string
  placeholder: string
  register: UseFormRegister<any>
  required: boolean
  disabled?: boolean
  error?: string | undefined
}
const InputText = ({ type, name, placeholder, register, required, disabled, error }: InputTextProps) => {
  const [password, setPassword] = useState("password")

  const toggle = () => {
    if (password === "password") {
      setPassword("text")
      return
    }
    setPassword("password")
  }

  return (
    <div className="w-full">
      <div className="flex w-full relative">
        {/* <input
            type={type !== "password" ? type : password}
            className={`w-full autofill:bg-yellow-200 bg-transparent rounded-sm py-3 my-3 border-b text-xl border-primary focus:outline-none focus:ring-transparent ${disabled && "disabled:bg-gray-100 disabled:cursor-not-allowed"}`}
            placeholder={placeholder}
            {...register(name, { required })}
            disabled={disabled} 
        /> */}
        <input
          type={type !== "password" ? type : password}
          className={`w-full autofill:bg-yellow-200 bg-transparent rounded-lg p-2 my-3 border-2  text-xl border-primary focus:outline-none focus:ring-transparent ${
            disabled && "disabled:bg-gray-100 disabled:cursor-not-allowed"
          }`}
          placeholder={placeholder}
          {...register(name, { required })}
          disabled={disabled}
        />
        {type === "password" && (
          <button
            type="button"
            className="btn absolute flex right-2 top-2 transform translate-y-5"
            onClick={toggle}
          >
            {password === "password" ? (
              <svg
                width="20"
                height="17"
                fill="currentColor"
                className="bi bi-eye-slash-fill text-sky-950"
                viewBox="0 0 16 16"
              >
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
              </svg>
            ) : (
              <svg
                width="20"
                height="17"
                fill="currentColor"
                className="bi bi-eye-fill  text-sky-950"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputText
