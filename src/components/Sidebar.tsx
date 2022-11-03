import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { createBoard, setActiveBoard } from "../redux/slices/kanbanSlice";
import { motion } from "framer-motion";
import { BiHide } from "react-icons/bi";
import { BsWindowSidebar } from "react-icons/bs";
import { useToggle } from "../hooks";
import { Input, Button } from "../ui";

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
  const { boards, activeBoardId } = useAppSelector((state) => state.kanban);
  const [isCreateBoardVisible, toggleIsCreateBoardVisible] = useToggle(false);
  const [newBoardTitle, setNewBoardTitle] = useState("");
  const dispatch = useAppDispatch();

  const createBoardHandler = () => {
    dispatch(createBoard(newBoardTitle));
    setNewBoardTitle("");
    toggleIsCreateBoardVisible();
  };

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
                  board.id === activeBoardId ? styles.activeBtn : styles.btn
                }
              >
                <BsWindowSidebar /> {board.title}
              </button>
            ))}
          </div>
          <button
            onClick={toggleIsCreateBoardVisible}
            className="mx-auto flex items-center gap-3 px-4 py-2 rounded-full text-violet-600 transition hover:bg-violet-600 hover:text-white "
          >
            <BsWindowSidebar />{" "}
            {isCreateBoardVisible ? "Close Board Creator" : "Create New Board"}
          </button>
          {isCreateBoardVisible && (
            <div className="text-center mt-3">
              <Input
                value={newBoardTitle}
                onChangeHandler={(e) => setNewBoardTitle(e.target.value)}
                placeholder="board title"
              />
              <Button
                restStyles="w-fit mx-auto mt-3"
                onClick={createBoardHandler}
              >
                Create
              </Button>
            </div>
          )}
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
