import React, { useState } from "react";

const fontOptions = [
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Times New Roman", value: "'Times New Roman', serif" },
  { label: "Courier New", value: "'Courier New', monospace" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Comic Sans MS", value: "'Comic Sans MS', cursive, sans-serif" },
];

const CreatePost = ({ onCreate, user }) => {
  const [content, setContent] = useState("");
  const [font, setFont] = useState(fontOptions[0].value);
  const [bold, setBold] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() || title.trim()) {
      onCreate({ title, content, font, bold });
      setTitle("");
      setContent("");
      setFont(fontOptions[0].value);
      setBold(false);
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
          <div className="d-flex align-items-center mb-2">
            <select
              className="form-select form-select-sm me-2"
              style={{ width: 160 }}
              value={font}
              onChange={(e) => setFont(e.target.value)}>
              {fontOptions.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              className={`btn btn-sm btn-outline-secondary${
                bold ? " active" : ""
              }`}
              onClick={() => setBold((b) => !b)}
              style={{ fontWeight: bold ? "bold" : "normal" }}>
              B
            </button>
          </div>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ fontWeight: "bold" }}
          />
          <textarea
            className="form-control mb-2"
            rows={2}
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ fontFamily: font, fontWeight: bold ? "bold" : "normal" }}
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
