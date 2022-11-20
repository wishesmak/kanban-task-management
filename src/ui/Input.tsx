import React from "react";

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  restStyles?: string;
}

const Input: React.FC<Props> = ({
  value,
  placeholder,
  restStyles,
  onChange,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={
        "px-4 py-2 rounded-lg focus:outline-none bg-gray-800 " + restStyles
      }
      placeholder={placeholder}
    />
  );
};

export default Input;
