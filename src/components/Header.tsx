import { Button } from "../ui";
import { BiDownArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  isVisible: boolean;
  toogleVisible: () => void;
}

const Header: React.FC<Props> = ({ toogleVisible, isVisible }) => {
  return (
    <div className="bg-gray-700 w-full h-[80px] border-b border-gray-600 flex justify-between items-center px-6">
      <div className=" flex items-center gap-3">
        <h1 className="font-semibold text-2xl text-violet-100">
          Platform Launch
        </h1>
        <motion.div animate={{ opacity: isVisible ? 0 : 1 }}>
          <BiDownArrow className="cursor-pointer w-4 h-4" onClick={toogleVisible} />
        </motion.div>
      </div>
      <div>
        <Button onClick={() => {}}>+ Add New Task</Button>
      </div>
    </div>
  );
};

export default Header;
