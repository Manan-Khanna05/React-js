import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AllTodoItems from "./components/AllTodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodos = [
    { item: "Buy Milk", date: "04/11/1947" },
    { item: "Go to College", date: "04/11/1980" },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const handelNewItem = (itemName, itemDueDate) => {
    setTodos([...todos, { item: itemName, date: itemDueDate }]);
  };
  const handleDeleteItem = (deleteIdx) => {
    setTodos(todos.filter((_, idx) => idx !== deleteIdx));
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handelNewItem} />
      <div className="todo-item">
        <AllTodoItems todos={todos} onDeleteItem={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
