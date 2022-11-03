import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setActiveBoard } from "../redux/slices/kanbanSlice";
import { motion } from "framer-motion";
import { BiHide } from "react-icons/bi";
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

const styles = {
  btn: "flex gap-3 items-center mb-3 text-gray-400 w-5/6 text-left pl-5 py-3 rounded-r-full transition hover:text-violet-500 border border-transparent hover:border-violet-700",
  activeBtn:
    "flex gap-3 items-center mb-3 bg-violet-700 w-5/6 text-left pl-5 py-3 rounded-r-full transition hover:bg-violet-600 border border-violet-700",
};

interface Props {
  isVisible: boolean;
  toogleVisible: () => void;
}

const Sidebar: React.FC<Props> = ({ isVisible, toogleVisible }) => {
  const { boards, activeBoard } = useAppSelector((state) => state.kanban);
  const dispatch = useAppDispatch();

  return (
    <motion.ul
      animate={isVisible ? "visible" : "hidden"}
      variants={animation.container}
      className={` h-screen bg-gray-700 border-gray-600 border-r`}
    >
      <motion.li variants={animation.items}>
        <h1 className="text-3xl font-semibold text-center my-5">Kanban</h1>
        <div>
          <h3 className="text-sm text-gray-400 font-semibold mx-5 mb-3">
            ALL BOARDS ({boards.length})
          </h3>
          <div>
            {boards.map((board) => (
              <button
                key={board.id}
                onClick={() => dispatch(setActiveBoard(board.id))}
                className={
                  board.id === activeBoard ? styles.activeBtn : styles.btn
                }
              >
                <BsWindowSidebar /> {board.title}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0">
          <button
            onClick={toogleVisible}
            className="p-5 flex gap-3 items-center text-gray-400 transition hover:text-gray-200"
          >
            <BiHide /> hide sidebar
          </button>
        </div>
      </motion.li>
    </motion.ul>
  );
};

export default Sidebar;
