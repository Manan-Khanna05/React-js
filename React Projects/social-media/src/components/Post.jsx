import React, { useRef, useState } from "react";
import Comments from "./Comments";

const Post = ({ post, onLike, onComment, onDelete, user, className }) => {
  const likeBtnRef = useRef();
  const [deleting, setDeleting] = useState(false);

  const handleLike = () => {
    if (likeBtnRef.current) {
      likeBtnRef.current.classList.add("like-pulse");
      setTimeout(() => {
        if (likeBtnRef.current)
          likeBtnRef.current.classList.remove("like-pulse");
      }, 400);
    }
    onLike(post.id);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setDeleting(true);
      setTimeout(() => onDelete(post.id), 400); // match fade-out duration
    }
  };

  return (
    <div
      className={`card mb-4 shadow-sm post-card fade-in${
        deleting ? " fade-out" : ""
      } ${className || ""}`}
      style={{ transition: "box-shadow 0.2s, opacity 0.4s" }}>
      <div className="card-body">
        <div className="d-flex align-items-center mb-2 justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src={post.avatar}
              alt="avatar"
              className="rounded-circle me-2"
              width={40}
              height={40}
            />
            <div>
              <h6 className="mb-0">{post.author}</h6>
              <small className="text-muted">{post.timestamp}</small>
            </div>
          </div>
          {user.name === post.author && (
            <button
              className="btn btn-sm btn-outline-danger ms-2"
              title="Delete Post"
              onClick={handleDelete}
              style={{
                borderRadius: "50%",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <i className="bi bi-trash"></i>
            </button>
          )}
        </div>
        {post.title && (
          <h5
            className="fw-bold"
            style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            {post.title}
          </h5>
        )}
        <p
          className="card-text fs-5"
          style={{
            fontFamily: post.font,
            fontWeight: post.bold ? "bold" : "normal",
          }}>
          {post.content}
        </p>
        <button
          ref={likeBtnRef}
          className={`btn btn-outline-primary btn-sm me-2`}
          onClick={handleLike}
          disabled={post.likedBy && post.likedBy.includes(user.name)}>
          <i className="bi bi-hand-thumbs-up"></i> Like ({post.likes})
        </button>
      </div>
      <Comments
        postId={post.id}
        comments={post.comments}
        onComment={onComment}
        user={user}
      />
    </div>
  );
};

export default Post;
