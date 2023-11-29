import { useEffect, useState } from 'react';
import {findAllUsers, createUser, findUserById, updateUserDB, deleteUserDB} from '../Services/userServices.js';
import { BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsTrash3Fill }
  from "react-icons/bs";
import { Link } from 'react-router-dom';

function Admin(){
    const [users, setUsers] = useState([]);
    
    const fetchUsers = async () => {
        const users = await findAllUsers();
        setUsers(users);
    };


    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createNewUser = async () => {
        try {
            const newUser = await createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        try{
            const u =await findUserById(user._id);
            setUser(u);
        }catch(err){
            console.log(err);
        }
    }

    const updateUser = async () => {
        try{
            const status = await updateUserDB(user);
            setUsers(users.map((u)=> (u._id === user._id ? user : u)));
        }catch(err){
            console.log(err);
        }
    }
    const deleteUser = async (user) => {
        try {
          await deleteUserDB(user);
          setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
          console.log(err);
        }
      };
    

    useEffect(()=> {
        fetchUsers();
    },[]);


    return (
        <div className="col-10">
            <h1>Users List</h1>
            <div className='table-responsive'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    <tr>
                        <td>
                            <input className='form-control' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                        </td>
                        <td>
                            <input className='form-control' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </td>
                        <td>
                            <input className='form-control' value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input className='form-control' value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select className='form-select' value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td className='text-nowrap'>
                            <BsFillCheckCircleFill size="0.8em" onClick={updateUser} className="me-2 text-success fs-1 text" />
                            <BsPlusCircleFill size="2em" onClick={createNewUser} />
                        </td>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>
                                <Link to={`/User/account/${user._id}`}>
                                {user.username}
                                </Link>
                            </td>
                            <td></td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td></td>
                            <td>
                            <button className="btn btn-warning me-2">
                                <BsPencil size="1em" onClick={() => selectUser(user)} />
                            </button>
                            <button className="btn btn-danger me-2">
                                <BsTrash3Fill size="1em" onClick={() => deleteUser(user)} />
                            </button>
                            </td>
                        </tr>))}
                </tbody>


            </table>
            </div>
        </div>
    );
}

export default Admin;