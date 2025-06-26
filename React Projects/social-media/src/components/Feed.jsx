import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Feed = ({ user }) => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    const defaultFont = "Arial, sans-serif";
    let loadedPosts = savedPosts
      ? JSON.parse(savedPosts)
      : [
          {
            id: 1,
            author: "Demo User",
            avatar: "https://i.pravatar.cc/40?img=1",
            content: "Welcome to the social media app!",
            likes: 0,
            likedBy: [],
            comments: [],
            timestamp: new Date().toLocaleString(),
          },
        ];
    // Ensure all posts have title, font, and bold fields
    loadedPosts = loadedPosts.map((post) => ({
      title: "",
      font: defaultFont,
      bold: false,
      ...post,
    }));
    return loadedPosts;
  });
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Only keep the latest 100 posts
    const limitedPosts = posts.slice(0, 100);
    const data = JSON.stringify(limitedPosts);
    // Log the size in KB
    console.log(
      "Saving posts to localStorage. Size:",
      (data.length / 1024).toFixed(2),
      "KB"
    );
    localStorage.setItem("posts", data);
  }, [posts]);

  const addPost = (postData) => {
    // Limit content and title length
    const maxContent = 500;
    const maxTitle = 100;
    const safeContent = (postData.content || "").slice(0, maxContent);
    const safeTitle = (postData.title || "").slice(0, maxTitle);
    setLoading(true);
    setTimeout(() => {
      setPosts([
        {
          id: Date.now(),
          author: user.name,
          avatar: user.avatar,
          title: safeTitle,
          content: safeContent,
          font: postData.font,
          bold: postData.bold,
          likes: 0,
          likedBy: [],
          comments: [],
          timestamp: new Date().toLocaleString(),
        },
        ...posts,
      ]);
      setLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      setToast("Post created!");
      setTimeout(() => setToast(""), 2000);
    }, 1800); // Simulate loading
  };

  const likePost = (id) => {
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          if (post.likedBy && post.likedBy.includes(user.name)) {
            setToast("You already liked this post!");
            setTimeout(() => setToast(""), 1500);
            return post;
          }
          return {
            ...post,
            likes: post.likes + 1,
            likedBy: [...(post.likedBy || []), user.name],
          };
        }
        return post;
      })
    );
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

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div
      className="container-fluid feed-gradient-bg"
      style={{ position: "relative" }}>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(255,255,255,0.7)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div
            className="spinner-border text-primary"
            style={{ width: 70, height: 70, borderWidth: 8 }}
            role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span style={{ fontSize: 24, marginLeft: 20, fontWeight: 600 }}>
            Uploading your trending post...
          </span>
        </div>
      )}
      {showSuccess && (
        <div
          style={{
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#4f8cff",
            color: "#fff",
            padding: "2rem 2.5rem",
            borderRadius: 16,
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            zIndex: 10000,
            fontSize: 24,
            fontWeight: 600,
            textAlign: "center",
          }}>
          <i
            className="bi bi-check-circle-fill"
            style={{ fontSize: 40, color: "#fff", marginBottom: 10 }}></i>
          <div>Successfully uploaded post!</div>
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 py-4">
          <CreatePost onCreate={addPost} user={user} />
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onLike={likePost}
              onComment={addComment}
              onDelete={deletePost}
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
