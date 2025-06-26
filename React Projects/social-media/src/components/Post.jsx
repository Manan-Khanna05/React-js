import React, { useRef } from "react";
import Comments from "./Comments";

const Post = ({ post, onLike, onComment, user, className }) => {
  const likeBtnRef = useRef();

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

  return (
    <div
      className={`card mb-4 shadow-sm post-card fade-in ${className || ""}`}
      style={{ transition: "box-shadow 0.2s" }}>
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
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
        <p className="card-text fs-5">{post.content}</p>
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
