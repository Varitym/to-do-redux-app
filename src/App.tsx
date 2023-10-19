import "./styles.scss";
import { AddTask } from "./components/molecules/AddTask.tsx/AddTask";
import { TodoList } from "./components/molecules/TodoList/TodoList";

const App = () => {
  return (
    <div className="App">
      <div className="Main-container">
        <header className="App-header">
          <p>Todo List</p>
        </header>
        <AddTask />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
