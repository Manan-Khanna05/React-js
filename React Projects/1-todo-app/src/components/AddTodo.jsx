import { useState } from "react";
import TodoItem from "./TodoItem";
import { IoBagAdd } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const [itemName, setItemName] = useState("");
  const [itemDueDate, setItemDueDate] = useState("");
  const [error, setError] = useState("");

  const handleAddClick = () => {
    if (!itemName.trim()) {
      setError("Please add some item before submitting.");
      return;
    }
    setError("");
    onNewItem(itemName, itemDueDate);
    setItemName("");
    setItemDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Add Todo"
            className="form-control"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            value={itemDueDate}
            onChange={(e) => setItemDueDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success mk-button"
            onClick={handleAddClick}>
            <IoBagAdd size={24} />
          </button>
        </div>
      </div>
      {error && (
        <div
          style={{
            color: "#d7263d",
            marginTop: 8,
            fontWeight: 600,
            fontSize: "1.05em",
            letterSpacing: "0.5px",
            transition: "opacity 0.3s",
          }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default AddTodo;
