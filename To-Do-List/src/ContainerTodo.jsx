import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import TodoItem from "./components/TodoItem";

const ContainerTodo = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.date}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
      {/* <TodoItem todoDate={"From today"} todoName={"work hard"} />
      <TodoItem todoDate={"17/09/24"} todoName={"Learn atleast 2hours"} /> */}
      {/* <TodoItem1 />
      <TodoItem2 /> */}
    </div>
  );
};

export default ContainerTodo;
