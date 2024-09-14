const AddTodo = () => {
  return (
    <div class="container text-center">
      <div class="row taj-row">
        <div class="col-5">
          <input placeholder="Enter To-Do Here" type="text" />
        </div>
        <div class="col-5">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success taj-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
