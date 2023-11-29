import { useState } from "react";
import { useNavigate } from "react-router";
import {signup} from '../Services/userServices.js';


function Signup(){
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signupNewUser = async () => {
        try {
            await signup(credentials);
            navigate("/User/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div className="col-10">
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <label htmlFor="username" className="form-label ms-2">Username:</label>
            <input
                className="form-control"
                value={credentials.username}
                id="username"
                type="text"
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                })} />
            <label htmlFor="password" className="form-label ms-2">Password:</label>
            <input
                className="form-control"
                value={credentials.password}
                id="password"
                type="password"
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })} />
            <button className="btn btn-dark my-2" onClick={signupNewUser}>
                Signup
            </button>

        </div>
    );
}

export default Signup;