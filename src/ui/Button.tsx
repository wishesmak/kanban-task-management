import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  restStyles?: string;
}

const Button: React.FC<Props> = ({ children, onClick, restStyles }) => {
  return (
    <div
      onClick={onClick}
      className={`text-center bg-violet-700 transition hover:bg-violet-600 px-4 py-2 rounded-full cursor-pointer ${restStyles}`}
    >
      {children}
    </div>
  );
};

export default Button;
