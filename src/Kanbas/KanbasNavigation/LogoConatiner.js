import { Link } from "react-router-dom";

function LogoContainer(){
    return (
        <div id="neu-logo-container" className="neu-logo-container">
            <Link to="/Kanbas/Dashboard" className="neu-logo"></Link>
        </div>
    );
}

export default LogoContainer;