import React, { useState } from "react";
import { createTask } from "../redux/slices/kanbanSlice";
import { useAppDispatch } from "../redux/store";
import { StatusType } from "../types";
import { Button } from "../ui";
import Popup from "./Popup";
interface Props {
  setIsCreateTaskPopup: (value: boolean) => void;
}

const CreateTaskPopup: React.FC<Props> = ({ setIsCreateTaskPopup }) => {
  const dispatch = useAppDispatch();
  const statuses = ["todo", "doing", "done"];
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    status: StatusType;
  }>({
    title: "",
    description: "",
    status: "todo",
  });

  const createTaskHandler = () => {
    dispatch(createTask(formData));
    setIsCreateTaskPopup(false);
  };

  return (
    <Popup
      setIsVisible={setIsCreateTaskPopup}
      restStyles="flex flex-col justify-between"
    >
      <div>
        <h1 className="text-xl font-semibold">Add New Task</h1>
        <div className="flex flex-col gap-3 my-3">
          <label>
            <h5 className="text-sm text-gray-300 mb-1">Title</h5>
            <input
              placeholder="e.g. Take coffee break"
              className="w-full bg-transparent border border-gray-600 px-3 py-2 outline-none rounded-lg"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </label>
          <label>
            <h5 className="text-sm text-gray-300 mb-1">Description</h5>
            <textarea
              placeholder="e.g. It's always good to take a break."
              className="w-full bg-transparent border border-gray-600 px-3 py-2 outline-none rounded-lg resize-none h-24"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </label>
          <label>
            <h5 className="text-sm text-gray-300 mb-1">Status</h5>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as StatusType,
                })
              }
              className="capitalize bg-gray-800 w-full outline-none text-gray-200 border border-gray-600 px-2 py-2 rounded-lg"
            >
              {statuses.map((status) => (
                <option value={status} key={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <Button onClick={createTaskHandler} restStyles="w-full">
        Create Task
      </Button>
    </Popup>
  );
};

export default CreateTaskPopup;
