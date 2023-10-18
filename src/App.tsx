import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

type Task = {
  task: string;
  id: number;
  status: "todo" | "done";
};

const App = () => {
  const [task, setTask] = useState("");
  const todoList = useSelector((state) => state);

  console.log(todoList);
  const [tasks, setTasks] = useState<Task[]>([]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks([...tasks, { task: task, id: tasks.length + 1, status: "todo" }]);
    setTask("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDelete = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <div className="Main-container">
        <header className="App-header">
          <p>Todo List</p>
        </header>
        <form onSubmit={onSubmit}>
          <input type="text" value={task} onChange={handleChange} />
          <button type="submit">Add</button>
        </form>
        <div>
          <ul>
            {tasks.map((task) => (
              <div className="task">
                <li key={task.id}>{task.task}</li>
                <div className="status">{task.status}</div>
                <div className="delete" onClick={() => handleDelete(task.id)}>
                  X
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
