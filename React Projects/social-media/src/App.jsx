import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  // Remove login, use a default user
  const defaultUser = {
    name: "Demo User",
    avatar: "https://i.pravatar.cc/100?img=1",
  };
  const [user] = useState(defaultUser);

  return (
    <div>
      <Header user={user} />
      <div className="d-flex">
        <Sidebar user={user} />
        <Feed user={user} />
      </div>
    </div>
  );
}

export default App;
