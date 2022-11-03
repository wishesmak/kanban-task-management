import { useState } from "react";
import { Board, Header, Sidebar, CreateNewTaskPopup } from "./components";
import { useToggle } from "./hooks";

function App() {
  const [isVisible, toogleVisible] = useToggle(true);
  const [isNewTaskPopup, setIsNewTaskPopup] = useState(false);

  return (
    <div className="flex">
      {isNewTaskPopup && (
        <CreateNewTaskPopup setIsNewTaskPopup={setIsNewTaskPopup} />
      )}
      <Sidebar isVisible={isVisible} toogleVisible={toogleVisible} />
      <div className="w-full">
        <Header
          isVisible={isVisible}
          toogleVisible={toogleVisible}
          setIsNewTaskPopup={setIsNewTaskPopup}
        />
        <Board />
      </div>
    </div>
  );
}

export default App;
