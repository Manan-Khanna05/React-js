import React, { useState } from "react";

const CreatePost = ({ onCreate, user }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onCreate(content);
      setContent("");
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body d-flex align-items-start">
        <img
          src={user.avatar}
          alt="avatar"
          className="rounded-circle me-3"
          width={40}
          height={40}
        />
        <form onSubmit={handleSubmit} className="flex-grow-1">
          <h6 className="mb-2">
            Create Post as <span className="text-primary">{user.name}</span>
          </h6>
          <textarea
            className="form-control mb-2"
            rows={2}
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="text-end">
            <button className="btn btn-primary" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
