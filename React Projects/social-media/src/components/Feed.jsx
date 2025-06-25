import React, { useState } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Feed = ({ user }) => {
  const [posts, setPosts] = useState([
    // Example initial post
    {
      id: 1,
      author: "Demo User",
      avatar: "https://i.pravatar.cc/40?img=1",
      content: "Welcome to the social media app!",
      likes: 0,
      comments: [],
      timestamp: new Date().toLocaleString(),
    },
  ]);
  const [toast, setToast] = useState("");

  const addPost = (content) => {
    setPosts([
      {
        id: Date.now(),
        author: user.name,
        avatar: user.avatar,
        content,
        likes: 0,
        comments: [],
        timestamp: new Date().toLocaleString(),
      },
      ...posts,
    ]);
    setToast("Post created!");
    setTimeout(() => setToast(""), 2000);
  };

  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1, liked: true } : post
      )
    );
    setToast("You liked a post!");
    setTimeout(() => setToast(""), 1500);
  };

  const addComment = (id, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div className="container-fluid feed-gradient-bg">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 py-4">
          <CreatePost onCreate={addPost} user={user} />
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onLike={likePost}
              onComment={addComment}
              user={user}
              className="fade-in"
            />
          ))}
        </div>
      </div>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default Feed;
