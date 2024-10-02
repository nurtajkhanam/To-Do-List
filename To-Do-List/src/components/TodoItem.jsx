const TodoItem = ({ todoName, todoDate }) => {
  return (
    <div>
      <div className="container">
        <div className="row taj-row">
          <div className="col-6"> {todoName} </div>
          <div className="col-4"> {todoDate} </div>
          <div className="col-2">
            <button className="btn btn-danger taj-btn"> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
