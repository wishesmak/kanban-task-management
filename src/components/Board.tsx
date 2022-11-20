import React from "react";
import { useAppSelector } from "../redux/store";
import { StatusType } from "../types";

interface Props {
  setIsEditTaskPopup: (value: boolean) => void;
}

const Board: React.FC<Props> = ({ setIsEditTaskPopup }) => {
  const { boards, activeBoardId } = useAppSelector((state) => state.kanban);
  const activeBoard = boards.find((board) => board.id === activeBoardId);

  const todoStatuses: StatusType[] = ["todo", "doing", "done"];

  if (activeBoardId === null) return <></>;

  return (
    <div className="w-full p-5 flex gap-5 justify-between">
      {todoStatuses.map((todoStatus) => (
        <div key={todoStatus} className="w-2/3 ">
          <h5 className="uppercase font-semibold text-gray-400 text-sm flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                todoStatus === "todo"
                  ? "bg-cyan-500"
                  : todoStatus === "doing"
                  ? "bg-purple-500"
                  : "bg-emerald-500"
              }`}
            />{" "}
            {todoStatus} (
            {
              activeBoard?.todos.filter((todo) => todo.status === todoStatus)
                .length
            }
            )
          </h5>
          <div className="my-5 flex flex-col gap-3">
            {activeBoard?.todos
              .filter((todo) => todo.status === todoStatus)
              .map((todo) => (
                <div
                  key={todo.id}
                  onClick={() => setIsEditTaskPopup(true)}
                  className="bg-gray-700 p-3 rounded-xl cursor-pointer transition hover:bg-gray-600"
                >
                  <h6 className="font-semibold">{todo.title}</h6>
                  <p className="text-sm text-gray-400">{todo.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
