import React from "react";

const TodoItem1 = () => {
  let todoName = "Buy Milk";
  let todoDate = "13/09/24";
  return (
    <div>
      <div class="container">
        <div class="row taj-row">
          <div class="col-6"> {todoName} </div>
          <div class="col-4"> {todoDate} </div>
          <div class="col-2">
            <button className="btn btn-danger taj-btn"> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
