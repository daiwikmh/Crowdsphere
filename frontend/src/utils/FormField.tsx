import React from 'react';

interface FormFieldProps {
  labelName?: string;
  placeholder?: string;
  inputType?: string; // Made optional
  isTextArea?: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  labelName,
  placeholder,
  inputType,
  isTextArea = false,
  value,
  handleChange,
}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-2xl leading-5 text-[#808191] mb-2.5">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="border py-3.5 sm:px-5 px-3.5 outline-none border-1 border-[#3a3a43]
          bg-transparent placeholder:text-[#4b5464] rounded-lg p-2
          font-epilogue sm:min-w-[300px] text-white text-[14px]"
        />
      ) : (
        <input
          required
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="border py-3.5 sm:px-5 outline-none border-1 border-[#3a3a43]
          bg-transparent placeholder:text-[#4b5464] rounded-lg p-2
          font-epilogue sm:min-w-[300px] text-white text-[14px]"
          step="0.1"
        />
      )}
    </label>
  );
};

export default FormField;
