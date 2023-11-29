import { Navigate, Route, Routes } from "react-router";
// import store from "./store";
// import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../Nav";
import UserNav from "./UserNav";
import Home from "./Home";
import './user.css';
import Search from "./Search";
import Signin from "./Signin";
import Signup from "./Signup";
import Account from "./Account";
import Admin from "./Admin";

function User(){
    return (
        // <Provider store={store}>
        <div className="container-fluid main-container">
            <div className="row">
                <Nav />
            </div>
            <div className="row">
                <UserNav />
            <Routes>
                {/* <Route path="/" element={<Navigate to="Home" />} /> */}
                <Route path="home" element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="account" element={<Account />} />
                <Route path="account/:id" element={<Account />} />
                <Route path="admin/users" element={<Admin />} />
            </Routes>
            </div>
        </div>
        // </Provider>
        
    );
}

export default User;