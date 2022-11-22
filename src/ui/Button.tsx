import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  restStyles?: string;
  bgColor?: "red" | "violet";
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  disabled,
  restStyles,
  bgColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-full transition ${restStyles} ${
        disabled
          ? "bg-gray-500 text-gray-100"
          : "cursor-pointer " +
            (bgColor === "red"
              ? "bg-red-600 hover:bg-red-500"
              : "bg-violet-600 hover:bg-violet-500")
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
