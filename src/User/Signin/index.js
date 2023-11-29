import { useNavigate } from "react-router";
import {signin} from '../Services/userServices.js'
import { useState } from "react";
function Signin(){
    const [credentials, setCredentials] = useState({ username: "", password: "" });
     const navigate = useNavigate();
     const signinUser = async() => {
        await signin(credentials);
        navigate("/User/account")
     }
    return (
        <div className="col-10">
            <h1>Signin</h1>
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control m-2" id="username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control m-2" id="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <button className="btn btn-dark" onClick={signinUser}> Signin </button>
        </div>
    );
}

export default Signin;