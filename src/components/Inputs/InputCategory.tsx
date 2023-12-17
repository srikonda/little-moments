import React from 'react';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import OtpInput from './InputOtp';

type InputCategoryProps = {
  name: string;
  category: string[];
  placeholder: string;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  required: boolean;
  error: string | undefined;
};

const InputCategory = ({ name, category, placeholder, register, watch, required, error }: InputCategoryProps) => {
  const selectedValue = watch(name);
  console.log(selectedValue)
  return (
    <div>
      <div className="flex relative">
        <select
          className={`w-full rounded-sm py-3 my-3 ${
            selectedValue!=="" ? 'text-black' : 'text-gray-400'
          } border-b text-xl border-primary focus:outline-none focus:ring-transparent`}
          {...register(name, { required })}
        >
          <option value="" >
            {placeholder}
          </option>
          {category.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default InputCategory;
