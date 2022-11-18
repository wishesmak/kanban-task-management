import React from "react";
import { motion } from "framer-motion";
import { BsWindowSidebar } from "react-icons/bs";

const animation = {
  container: {
    visible: {
      width: "300px",
      transition: { delayChildren: 0.5 },
    },
    hidden: {
      width: "0px",
      transition: { delay: 0.5 },
    },
  },
  items: { visible: { opacity: 1 }, hidden: { opacity: 0 } },
};

interface Props {
  isVisible: boolean;
  setIsVisible?: (v: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ isVisible }) => {
  return (
    <motion.ul
      animate={isVisible ? "visible" : "hidden"}
      variants={animation.container}
      className="h-screen bg-gray-700 border-gray-600 border-r"
    >
      <motion.li variants={animation.items}>
        <h1 className="text-3xl font-semibold text-center my-5">kanban</h1>
        <div className="text-gray-400">
          <h3 className="tracking-wide mx-5">ALL BOARDS (3)</h3>
          <ul className="flex flex-col gap-3 my-3 mr-5">
            <li className="flex items-center gap-2 px-5 py-3 cursor-pointer transition hover:bg-violet-500 bg-violet-600 text-white rounded-r-full">
              <BsWindowSidebar /> Platform Launch
            </li>
            <li className="flex items-center gap-2 px-5 py-3 cursor-pointer transition hover:bg-violet-100 hover:text-violet-600 rounded-r-full">
              <BsWindowSidebar /> Platform Launch
            </li>
            <li className="flex items-center gap-2 px-5 py-3 cursor-pointer transition hover:bg-violet-100 hover:text-violet-600 rounded-r-full">
              <BsWindowSidebar /> Platform Launch
            </li>
          </ul>
        </div>
      </motion.li>
    </motion.ul>
  );
};

export default Sidebar;
