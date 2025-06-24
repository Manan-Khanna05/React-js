import { useState } from "react";
import AnimatedContainer from "./AnimatedContainer";
import ConfirmDialog from "./ConfirmDialog";
import { MdDeleteForever } from "react-icons/md";

function TodoItem({ item, date, onDelete }) {
  const [show, setShow] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    setShowConfirm(true);
  };
  const handleConfirm = () => {
    setShowConfirm(false);
    setShow(false);
  };
  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <AnimatedContainer show={show} onFadeOutEnd={onDelete}>
        <div className="container">
          <div className="row">
            <div className="col-6">{item}</div>
            <div className="col-4">{date}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger mk-button"
                onClick={handleDelete}>
                <MdDeleteForever size={24} />
              </button>
            </div>
          </div>
        </div>
      </AnimatedContainer>
      <ConfirmDialog
        open={showConfirm}
        message="Are you sure you want to delete this item?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
}

export default TodoItem;
