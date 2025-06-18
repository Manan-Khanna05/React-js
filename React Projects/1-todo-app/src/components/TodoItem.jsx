function TodoItem() {
    let TodoItem = 'Buy Milk';
    let ItemDate = '04/11/1947';

    return <div class="container">
    <div class="row">
    <div class="col-6">
      {TodoItem} 
    </div>
      <div class="col-4">
        {ItemDate}
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-danger mk-button">Delete</button>
      </div>
    </div>
  </div>

}

export default TodoItem;