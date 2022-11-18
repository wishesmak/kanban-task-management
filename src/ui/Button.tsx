import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-violet-600 px-3 py-2 rounded-full cursor-pointer transition hover:bg-violet-500"
    >
      {children}
    </button>
  );
};

export default Button;
