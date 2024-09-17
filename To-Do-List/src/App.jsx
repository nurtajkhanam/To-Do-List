import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import ContainerTodo from "./ContainerTodo";

const App = () => {
  const todoItems = [
    {
      name: "React props",
      date: "13/04/24",
    },
    {
      name: "DataDrops",
      date: "13/04/24",
    },
    {
      name: "work",
      date: "13/04/24",
    },
  ];
  return (
    <div>
      <center className="todo-content">
        <AppName />
        <AddTodo />
        <ContainerTodo todoItems={todoItems} />
      </center>
    </div>
  );
};

export default App;
