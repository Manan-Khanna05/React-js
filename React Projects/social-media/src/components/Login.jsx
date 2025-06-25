import React, { useState } from "react";

const defaultAvatar = "https://i.pravatar.cc/100?img=1";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setAvatar(ev.target.result);
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin({ name, avatar });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <form
        className="card p-4 shadow"
        style={{ minWidth: 320 }}
        onSubmit={handleSubmit}>
        <h4 className="mb-3 text-center">Login</h4>
        <div className="d-flex flex-column align-items-center mb-3">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-circle mb-2"
            width={80}
            height={80}
          />
          <input
            type="file"
            accept="image/*"
            className="form-control form-control-sm"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
