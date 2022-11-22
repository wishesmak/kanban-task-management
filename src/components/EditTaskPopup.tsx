import React, { useState } from "react";
import { changeTaskStatus, removeTask } from "../redux/slices/kanbanSlice";
import { useAppDispatch } from "../redux/store";
import { StatusType } from "../types";
import { Button } from "../ui";
import Popup from "./Popup";
import { BsTrash } from "react-icons/bs";

interface Props {
  setIsEditTaskPopup: (value: boolean) => void;
}

const EditTaskPopup: React.FC<Props> = ({ setIsEditTaskPopup }) => {
  const dispatch = useAppDispatch();
  const [changedStatus, setChangedStatus] = useState<StatusType>("todo");

  const statuses: StatusType[] = ["todo", "doing", "done"];

  const editTaskHandler = () => {
    dispatch(changeTaskStatus(changedStatus));
    setIsEditTaskPopup(false);
  };

  const removeTaskHandler = () => {
    dispatch(removeTask());
    setIsEditTaskPopup(false);
  };

  return (
    <Popup
      setIsVisible={setIsEditTaskPopup}
      restStyles="flex flex-col justify-between"
    >
      <div>
        <h1 className="text-xl font-semibold mb-3">Edit Task</h1>
        <label>
          <h5 className="text-sm text-gray-300 mb-1">Status</h5>
          <select
            value={changedStatus}
            onChange={(e) => setChangedStatus(e.target.value as StatusType)}
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
      <div className="flex gap-3">
        <Button onClick={editTaskHandler} restStyles="w-full">
          Edit Task
        </Button>
        <Button
          onClick={removeTaskHandler}
          bgColor="red"
          restStyles="w-10 h-10"
        >
          <BsTrash />
        </Button>
      </div>
    </Popup>
  );
};

export default EditTaskPopup;
