import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import ContainerTodo from "./ContainerTodo";
import { useState } from "react";

const App = () => {
  const initialTodoItems = [
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
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added: ${itemName} date: ${itemDueDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  return (
    <div>
      <center className="todo-content">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <ContainerTodo todoItems={todoItems} />
      </center>
    </div>
  );
};

export default App;
