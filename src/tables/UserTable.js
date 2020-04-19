import React from "react";

const UserTable = (props) => {
  const userList = props.users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.personName}</td>
      <td>{user.userName}</td>
      <td>
        <button onClick={() => props.editUser(user)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteUser(user.id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>{userList}</tbody>
    </table>
  );
};

export default UserTable;
