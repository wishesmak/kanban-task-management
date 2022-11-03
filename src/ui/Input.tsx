import React from "react";

interface Props {
  placeholder: string;
  onChangeHandler?: (e?: any) => void;
  value?: string;
}

const Input: React.FC<Props> = ({ placeholder, onChangeHandler, value }) => {
  return (
    <input
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      className="px-2 py-1 bg-gray-800 border border-gray-600 rounded-md focus:outline-none"
    />
  );
};

export default Input;
