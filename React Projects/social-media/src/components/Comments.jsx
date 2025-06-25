import React, { useState } from "react";

const Comments = ({ postId, comments, onComment, user }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onComment(postId, text);
      setText("");
    }
  };

  return (
    <div className="card-footer bg-white">
      <ul className="list-unstyled mb-2">
        {comments.map((c, i) => (
          <li key={i} className="d-flex align-items-center mb-2">
            <img
              src={`https://i.pravatar.cc/32?img=${i + 2}`}
              alt="avatar"
              className="rounded-circle me-2"
              width={32}
              height={32}
            />
            <small className="bg-light rounded px-2 py-1">{c}</small>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="d-flex align-items-center">
        <img
          src={user.avatar}
          alt="avatar"
          className="rounded-circle me-2"
          width={32}
          height={32}
        />
        <input
          className="form-control form-control-sm me-2"
          type="text"
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-sm btn-secondary" type="submit">
          Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
