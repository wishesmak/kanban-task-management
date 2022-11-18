import React from "react";
import { Button } from "../ui";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAppSelector } from "../redux/store";

interface Props {
  sidebarToggle: () => void;
  sidebarVisible: boolean;
}

const Header: React.FC<Props> = ({ sidebarToggle, sidebarVisible }) => {
  const { boards, activeBoardId } = useAppSelector((state) => state.kanban);
  const activeBoard = boards.find((board) => board.id === activeBoardId);

  return (
    <div className="border-b border-gray-500 p-5 flex justify-between items-center">
      <h1 className="text-2xl font-semibold cursor-pointer">
        {activeBoard ? activeBoard.title : 'Kanban'}
      </h1>
      <div className="flex items-center gap-5">
        <Button onClick={() => console.log("add new task")}>
          + Add New Task
        </Button>
        <div onClick={sidebarToggle} className="cursor-pointer">
          {sidebarVisible ? (
            <AiOutlineEye className="w-6 h-6 text-gray-400 transition hover:text-white" />
          ) : (
            <AiOutlineEyeInvisible className="w-6 h-6 text-gray-400 transition hover:text-white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
