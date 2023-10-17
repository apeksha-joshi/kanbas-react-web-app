import { Link, useLocation } from "react-router-dom";
import { FaUser, FaTachometerAlt, FaBook, FaCalendarAlt, FaEnvelopeOpenText, FaClock, FaTv, FaSignOutAlt, FaQuestionCircle} from 'react-icons/fa';

function KanbasNavItem({nav_item, idx}) {
    
    const icons = {
        Account: <FaUser />,
        Dashboard: <FaTachometerAlt size="1.4em"/>,
        Courses: <FaBook size="1.4em" />,
        Calendar: <FaCalendarAlt size="1.4em" />,
        Inbox:<FaEnvelopeOpenText size="1.4em" />,
        History:<FaClock size="1.4em" />,
        Studio:<FaTv size="1.4em" />,
        Commons:<FaSignOutAlt size="1.4em" />,
        Help:<FaQuestionCircle size="1.4em" />,
      };
    const { pathname } = useLocation();
    return(
        <li className={`nav-menu-list-item ${pathname.includes(nav_item.name) ? "active-item" : ""}`}>
            <Link className="nav-menu-list-link" to={nav_item.path}>
                <div className="nav-menu-icon-container">
                    <div aria-hidden="true" className={nav_item.name==="Account" ? "nav-menu-icon-avatar" : "nav-menu-icon-div"}>
                        <i className={`fas ${nav_item.name==="Account" ? "account-icon" : "fa-lg menu-icons"}`}>
                            {icons[nav_item.name]}
                        </i>
                    </div>
                </div>
                <div className="nav-menu-item-text"> {nav_item.name} </div>
            </Link>
        </li>
    );
}

export default KanbasNavItem;