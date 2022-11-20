import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  restStyles: string;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  disabled,
  restStyles,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-full transition ${restStyles} ${
        disabled
          ? "bg-gray-500 text-gray-100"
          : "bg-violet-600 hover:bg-violet-500 cursor-pointer"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
