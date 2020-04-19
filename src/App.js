import React from "react";
import "./App.css";

import UserTable from "./tables/UserTable";

export default function App() {
  return (
    <div className="container-outer">
      <h2>CRUD App With Hooks</h2>
      <div className="container-inner">
        <h2>Add User</h2>
      </div>
      <div className="container-inner">
        <h2>View Users</h2>
        <UserTable />
      </div>
    </div>
  );
}
