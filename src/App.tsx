import React from "react";
import { Board, Header, Sidebar } from "./components";
import useToggle from "./hooks/useToggle";

function App() {
  const [sidebarVisible, sidebarToggle] = useToggle(true);

  return (
    <div className="flex">
      <Sidebar isVisible={sidebarVisible} />
      <div className="w-full">
        <Header sidebarToggle={sidebarToggle} sidebarVisible={sidebarVisible} />
        <Board />
      </div>
    </div>
  );
}

export default App;
