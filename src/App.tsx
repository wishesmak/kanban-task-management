import { Board, Header, Sidebar } from "./components";
import { useToggle } from "./hooks";

function App() {
  const [isVisible, toogleVisible] = useToggle(false);

  return (
    <div className="flex">
      <Sidebar isVisible={isVisible} toogleVisible={toogleVisible} />
      <div className="w-full">
        <Header isVisible={isVisible} toogleVisible={toogleVisible} />
        <Board />
      </div>
    </div>
  );
}

export default App;
