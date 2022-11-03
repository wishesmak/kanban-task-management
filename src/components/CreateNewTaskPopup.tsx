import React, { useState } from "react";
import { createTask } from "../redux/slices/kanbanSlice";
import { useAppDispatch } from "../redux/store";
import { Button, Input } from "../ui";
import Popup from "./Popup";

interface Props {
  setIsNewTaskPopup: (v: boolean) => void;
}

const CreateNewTaskPopup: React.FC<Props> = ({ setIsNewTaskPopup }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "todo",
  });

  const createTaskHandler = () => {
    dispatch(createTask(formData));
    setIsNewTaskPopup(false);
  };

  return (
    <Popup
      setIsVisible={setIsNewTaskPopup}
      restStyles="flex flex-col justify-between text-gray-200"
    >
      <div>
        <h1 className="text-xl font-semibold">Add New Task</h1>
        <label className="flex flex-col gap-1 my-5">
          <span className="text-sm">Title</span>
          <Input
            value={formData.title}
            onChangeHandler={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="e.g. Take coffee break"
          />
        </label>
        <label className="flex flex-col gap-1 my-5">
          <span className="text-sm">Description</span>
          <Input
            value={formData.description}
            onChangeHandler={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="e.g. It's always good to take break."
          />
        </label>
        <label className="flex flex-col gap-1 my-5">
          <span className="text-sm">Status</span>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="bg-gray-800 border border-gray-600 px-2 py-1 rounded-md focus:outline-none"
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </label>
      </div>
      <Button onClick={createTaskHandler}>Create Task</Button>
    </Popup>
  );
};

export default CreateNewTaskPopup;
