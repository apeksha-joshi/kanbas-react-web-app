import { FaBars, FaChevronDown, FaGlasses } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import db from "../Database";
import { useEffect } from "react";

function CourseHeader() { 

    const { courseId } = useParams();
    const fragment = window.location.hash;
    const segments = fragment.split('/');
    const courseIdx = segments.indexOf(courseId)

    const course = db.courses.find((course) => course._id === courseId);
    const icons = {
        Menu : <FaBars size="1.4em" />,
        Down:<FaChevronDown />,
        Glasses:<FaGlasses />
    }
    return(
        <>
            {fragment.includes("Dashboard")? 
            null :
            <div className="row">
                <nav className="navbar custom-nav-height fixed-top bg-dark border-bottom border-body d-block d-lg-none" data-bs-theme="dark">
                    <div className="top-nav-bar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-between">
                            <li className="nav-item">
                                <div className="dropdown">
                                    <Link className="btn btn-dark" to="" role="button">{icons['Menu']}</Link>

                                    <ul className="p-4 dropdown-menu">
                                            <li className="kanbas-nav-items"><a href="/Kanbas/Dashboard/dashboard.html" className="second-nav-item-text"><i className="fas fa-tachometer-alt menu-icons fa-lg me-3"></i>Dashboard</a></li>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <p className="text-center">{`${course.number}.${course.section}.${course.startDate.split('-')[0]}${course.startDate.split('-')[2]}`}<br />{segments[courseIdx + 1]}</p>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <Link className="btn btn-dark" to="" role="button">{icons['Down']}</Link>                 
                                    <ul className="p-4 dropdown-menu">


                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            }
            <div className="row content-header-border align-items-center d-none d-lg-block">
                <div className="col-12 col-md-12 d-none d-lg-block">
                    <div id="profile-header" className="content-header justify-content-between">
                        <div className="d-flex">
                            <Link to="/" key="profile-menu-toggle" className="content-nav-toggle"><i className="fas menu-button">{icons['Menu']}</i></Link>
                            <div className="breadcrumb-position">
                                <nav className="custom-divider" aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li key="home" className="breadcrumb-item breadcrumb-noactive-link">
                                            <Link key="home" to={`../Courses/${course._id}/Home`}>{`${course.number}.${course.section}.${course.startDate.split('-')[0]}${course.startDate.split('-')[2]}`}</Link></li>
                                        {segments.slice(courseIdx + 1).map((segment, idx, array) => {
                                            if (idx === array.length - 1) {
                                                return (<li key={idx} className="breadcrumb-item active" aria-current="page">{segment}</li>);
                                            }
                                            else {
                                                return (
                                                    <li className="breadcrumb-item breadcrumb-noactive-link text-truncate">
                                                        <Link key={idx} to={`../Courses/${course._id}/${segment}`}>
                                                            {segment}
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                        })}
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div>
                            {segments.slice(courseIdx+1).length === 1 && segments[courseIdx+1] !== 'Grades' ? 
                                <button className="btn btn-color"><i className="me-2">{icons['Glasses']}</i>Student View</button> : null
                            }
                            
                        </div>
                    </div>

                   
                </div>
            </div>
        </>
    );
}

export default CourseHeader;