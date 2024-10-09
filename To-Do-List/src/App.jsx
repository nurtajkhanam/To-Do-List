import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import ContainerTodo from "./ContainerTodo";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItem from "./components/TodoItem";

const App = () => {
  // const initialTodoItems = [
  //   {
  //     name: "React props",
  //     date: "13/04/24",
  //   },
  //   {
  //     name: "DataDrops",
  //     date: "13/04/24",
  //   },
  //   {
  //     name: "work",
  //     date: "13/04/24",
  //   },
  // ];
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added: ${itemName} date: ${itemDueDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);

    console.log(`item deleted : ${todoItemName}`);
  };

  return (
    <div>
      <center className="todo-content">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <ContainerTodo todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </div>
  );
};

export default App;
