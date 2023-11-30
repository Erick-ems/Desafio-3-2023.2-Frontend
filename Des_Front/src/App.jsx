import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import Task from "./components/Task";

function App() {
  return (
    <>
      {/* <Task task= {{id:123, title: "Make a progress board aplication"}}/> */}
      <KanbanBoard />
    </>
  );
}

export default App;
