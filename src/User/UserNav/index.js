import { Link, useLocation } from "react-router-dom";

function UserNav() {
    //const user_nav_items = ['Home','Search','Signin','Signup','Account']

    const user_nav_items = [
        {
            "name": "Home",
            "path": "/User/home"
        },
        {
            "name": "Search",
            "path": "/User/search"
        },
        {
            "name": "Signin",
            "path": "/User/signin"
        },
        {
            "name": "Signup",
            "path": "/User/signup"
        },
        {
            "name": "Account",
            "path": "/User/account"
        },
    ]
    const { pathname } = useLocation();

    console.log(user_nav_items[0].name.toLowerCase())
    return(
        <div className="col-2 p-3 user-nav">
            <div className="navbar">
                <ul className="list-group">
                    {
                        user_nav_items.map((user_item) => (
                            <li className={`list-group-item user-nav-item ${pathname.includes(user_item.name.toLowerCase()) ? "active-item" : ""}`}>
                                    <Link to={user_item.path}>{user_item.name}</Link>
                            </li>
                        )) 
                    }
                </ul>
            </div>
        </div>
    );
}

export default UserNav;