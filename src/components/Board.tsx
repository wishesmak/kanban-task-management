import { useAppSelector } from "../redux/store";
import { BsCircleFill } from "react-icons/bs";
import { StatusType } from "../types/types";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const Board = () => {
  const activeBoardId = useAppSelector((state) => state.kanban.activeBoardId);
  const board = useAppSelector(
    (state) =>
      state.kanban.boards.filter((board) => board.id === activeBoardId)[0]
  );
  const todos: StatusType[] = ["todo", "doing", "done"];

  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({ opacity: 0 });
    controls.start({ opacity: 1 });
  }, [board]);

  return (
    <div className="p-5 flex gap-5">
      {todos.map((todoTitle) => (
        <div key={todoTitle} className="w-1/3">
          <h5 className="uppercase font-semibold text-gray-400 flex items-center gap-2 mb-5">
            <BsCircleFill
              className={`w-3 h-3 ${
                todoTitle === "todo"
                  ? "text-blue-400"
                  : todoTitle === "doing"
                  ? "text-purple-400"
                  : "text-green-400"
              }`}
            />
            {todoTitle}
          </h5>
          <motion.div animate={controls}>
            {board.todos.map(
              (todo, i) =>
                todo.status === todoTitle && (
                  <div key={i} className="bg-gray-700 rounded-xl p-4 mb-4">
                    {todo.title}
                  </div>
                )
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Board;
