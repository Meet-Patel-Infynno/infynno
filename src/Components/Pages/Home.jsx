import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data.reverse());
  };

  async function deleteUser(id){
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  }
  return (
    <div className="container py-4">
      <h1>User List</h1>
      <table className="table border shadow">
        <thead className="table-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
            {
                users.map((user,index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/user/view/${user.id}`} className="btn btn-primary" style={{marginRight:"5px"}}>View</Link>
                            <Link to={`/user/edit/${user.id}`} className="btn btn-info " style={{marginRight:"5px"}}>Edit</Link>
                            <Link to="" className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
                        </td>
                    </tr>
                ))
            }
        
        </tbody>
      </table>
    </div>
  );
};

export default Home;
