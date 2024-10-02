import { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row taj-row">
        <div className="col-5">
          <input
            placeholder="Enter To-Do Here"
            type="text"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-5">
          <input value={dueDate} type="date" onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            onClick={handleAddButtonClicked}
            type="button"
            className="btn btn-success taj-btn"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
