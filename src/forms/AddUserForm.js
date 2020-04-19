import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, personName: "", userName: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <form
      className="h-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.addUser(user);
        setUser(initialFormState);
      }}
      
    >
        <h2>Add New User</h2>
      <label className="h-label">Person Name</label>
      <input
        className="h-input"
        type="text"
        name="personName"
        value={user.personName}
        onChange={handleInputChange}
      />
      <label className="h-label">Username</label>
      <input
        className="h-input"
        type="text"
        name="userName"
        value={user.userName}
        onChange={handleInputChange}
      />
      <br/>
      <button>Submit</button>
    </form>
  );
};

export default AddUserForm;
