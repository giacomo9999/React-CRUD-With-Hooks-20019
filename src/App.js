import React, { useState } from "react";
import "./App.css";

import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const usersData = [
    { id: 1, personName: "Tania", userName: "floppydiskette" },
    { id: 2, personName: "Craig", userName: "siliconeidolon" },
    { id: 3, personName: "Ben", userName: "benisphere" },
  ];

  const initialFormState = { id: null, personName: "", userName: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    console.log(`editUser...`);
    console.log(user);
    setEditing(true);
    setCurrentUser({
      id: user.id,
      personName: user.personName,
      userName: user.userName,
    });
  };

  const updateUser = (id, updatedUser) => {
    console.log(`updateUser...`);
    console.log(updatedUser);
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container-outer">
      <h2>CRUD App With Hooks</h2>

      <div className="container-inner">
        <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
      </div>
      <div className="container-inner">
        {editing ? (
          <EditUserForm currentUser={currentUser} updateUser={updateUser} />
        ) : (
          <AddUserForm addUser={addUser} />
        )}
      </div>
    </div>
  );
};

export default App;
