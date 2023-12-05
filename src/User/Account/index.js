import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {getAccount, updateUserDB, findUserById, signout} from '../Services/userServices.js';
import Admin from "../Admin/index.js";
import { Link } from "react-router-dom";

function Account(){
    const {id} = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await getAccount();
        console.log(account)
        setAccount(account);
    };

    const findById = async (id) => {
        const user = await findUserById(id);
        setAccount(user);
    };
    const save = async() => {
        await updateUserDB(account);
    }
    const logout = async() => {
        await signout();
        navigate("/User/signin");
    }

    useEffect(() => {
        if(id){
            findById(id);
        }
        fetchAccount();
    },[]);

    return (
        <div className="col-10">
            <h1>Account</h1>
            {account && (
                <div>
                    <label htmlFor="password" className="form-label ms-2">Password:</label>
                    <input className="form-control m-2" id="password" value={account.password}
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <label htmlFor="firstName" className="form-label ms-2">First Name:</label>
                    <input className="form-control m-2" id="firstName" value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <label htmlFor="lastName" className="form-label ms-2">Last Name:</label>
                    <input className="form-control m-2" id="lastName" value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <label htmlFor="dob" className="form-label ms-2">DOB:</label>
                    <input className="form-control m-2" id="dob" value={account.dob}
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <label htmlFor="email" className="form-label ms-2">Email:</label>
                    <input className="form-control m-2" id="email" value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <label htmlFor="role" className="form-label ms-2">Role:</label>
                    <select className="form-select m-2" id="role" value={account.role} onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>

                    <button className="btn btn-dark me-2" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-danger my-2" onClick={logout}>
                        SignOut
                    </button><br />
                    <Link to="/User/admin/users" className="btn btn-warning">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Account;