function TodoItem2() {
    let TodoItem2 = 'Go to Collage';
    let ItemDate2 = '04/11/1980';

    return <div class="container">
    <div class="row">
    <div class="col-6">
      {TodoItem2} 
    </div>
      <div class="col-4">
        {ItemDate2}
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-danger mk-button">Delete</button>
      </div>
    </div>
  </div>

}

export default TodoItem2;