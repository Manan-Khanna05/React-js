import TodoItem from "./TodoItem";

function AllTodoItems({ todos, onDeleteItem }) {
  return (
    <div>
      {todos.map((todo, idx) => (
        <TodoItem
          key={idx}
          item={todo.item}
          date={todo.date}
          onDelete={() => onDeleteItem(idx)}
        />
      ))}
    </div>
  );
}

export default AllTodoItems;
