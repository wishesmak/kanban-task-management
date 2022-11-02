import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-violet-700 transition hover:bg-violet-600 px-4 py-2 rounded-full cursor-pointer"
    >
      {children}
    </div>
  );
};

export default Button;
