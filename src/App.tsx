import { useState } from "react";
import {
  Board,
  Header,
  Sidebar,
  CreateTaskPopup,
  EditTaskPopup,
} from "./components";
import useToggle from "./hooks/useToggle";
function App() {
  const [sidebarVisible, sidebarToggle] = useToggle(true);
  const [isCreateTaskPopup, setIsCreateTaskPopup] = useState(false);
  const [isEditTaskPopup, setIsEditTaskPopup] = useState(false);

  return (
    <div className="flex">
      <Sidebar isVisible={sidebarVisible} />
      <div className="w-full">
        <Header
          sidebarToggle={sidebarToggle}
          sidebarVisible={sidebarVisible}
          setIsCreateTaskPopup={setIsCreateTaskPopup}
        />
        <Board setIsEditTaskPopup={setIsEditTaskPopup} />
      </div>
      <div>
        {isCreateTaskPopup && (
          <CreateTaskPopup setIsCreateTaskPopup={setIsCreateTaskPopup} />
        )}
        {isEditTaskPopup && (
          <EditTaskPopup setIsEditTaskPopup={setIsEditTaskPopup} />
        )}
      </div>
    </div>
  );
}

export default App;
