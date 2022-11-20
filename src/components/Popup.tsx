import React, { useRef } from "react";

interface Props {
  children: React.ReactNode;
  restStyles?: string;
  setIsVisible: (v: boolean) => void;
}

const Popup: React.FC<Props> = ({ children, restStyles, setIsVisible }) => {
  const divRef = useRef<HTMLDivElement>(null);

  const onClickHandler = (e: any) => {
    if (e.target === divRef.current) setIsVisible(false);
  };

  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-50">
      <div
        ref={divRef}
        onClick={onClickHandler}
        className="flex h-screen justify-center items-center"
      >
        <div
          className={`p-5 bg-gray-800 h-[450px] w-[400px] rounded-lg ${restStyles}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
