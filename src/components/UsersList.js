import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { getAllUsers } from "../services/user.service";


const UsersList = () => {
  const {users, error} = useUsers();
  console.log(error)
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        { users.map(user => <tr>
          <th scope="row">{ user.id }</th>
          <td>{ user.name }</td>
          <td>{ user.phone_number }</td>
          <td>{ user.email }</td>
        </tr>) }
      </tbody>
    </table>
  );
};

export default UsersList;
