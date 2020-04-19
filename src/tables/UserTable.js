import React from "react";

const UserTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name Data</td>
          <td>Username Data</td>
          <td>
            <button>Edit</button>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
