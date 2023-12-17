import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import OtpInput from "./InputOtp";

type InputTextProps = {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  required: boolean;
  disabled?: boolean;
  error: string | undefined;
};
const InputText = ({
  type,
  name,
  placeholder,
  register,
  required,
  disabled,
  error,
}: InputTextProps) => {
  const [password, setPassword] = useState("password");

  const toggle = () => {
    if (password === "password") {
      setPassword("text");
      return;
    }
    setPassword("password");
  };

  return (
    <div>
      <div className="flex relative">
        <textarea
          className={`w-full autofill:bg-yellow-200 rounded-sm py-3 my-3 border-b text-xl border-primary focus:outline-none focus:ring-transparent ${
            disabled && "disabled:bg-gray-100 disabled:cursor-not-allowed"
          }`}
          placeholder={placeholder}
          {...register(name, { required })}
          disabled={disabled}
          rows={1} // Set the initial number of rows to 1
          style={{ resize: "none" }}
        />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default InputText;

// import React, { useEffect, useState } from "react";

// type optionProps = {
//   onTextDescription: (option: string) => void;
//   label: string;
//   name?: string;
//   error: string | undefined
// }

// const InputTextarea = ({onTextDescription, label, name, error}: optionProps) => {

//   const [descriptionText, setDescriptionText] = useState("");

//   const handleOptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const option = e.target.value;
//     setDescriptionText(option);
//     onTextDescription(option);
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="w-full">
//         <textarea
//           id="message"
//           name={name}
//           rows={4}
//           className="block p-2 w-full my-3 text-xl rounded-md border border-primary focus:ring-blue-500 focus:border-blue-500"
//           onChange={handleOptionChange}
//           value={descriptionText}
//           placeholder="Write your thoughts here..."
//         ></textarea>
//         {error && <p className="text-lg text-red-500 mt-2">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default InputTextarea;
