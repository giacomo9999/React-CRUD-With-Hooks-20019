import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const initialFormState = props.currentUser;
  const [user, setUser] = useState(initialFormState);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <form
      className="h-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <h2>Edit User</h2>
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
      <br />
      <button>Submit</button>
    </form>
  );
};

export default EditUserForm;
