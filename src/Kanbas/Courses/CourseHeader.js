import { FaBars, FaBook, FaBullhorn, FaBullseye, FaCalendarAlt, FaChevronDown, FaCircleNotch, FaClipboard, FaClock, FaCog, FaComments, FaEdit, FaEnvelopeOpenText, FaFileAlt, FaFolder, FaGlasses, FaHome, FaMendeley, FaPlug, FaQuestionCircle, FaRocket, FaSignOutAlt, FaTachometerAlt, FaTv, FaUser, FaUserFriends } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import db from "../Database";
import { Dropdown } from "react-bootstrap";
import React, { useState } from 'react';
import { useSelector } from "react-redux";

function CourseHeader() { 
    const { courseId } = useParams();
    const course_nav_items = db.course_nav;
    const fragment = window.location.hash;
    const segments = fragment.split('/');
    const courseIdx = segments.indexOf(courseId)
    const kanbas_nav_items = db.kanbas_nav_items;
    const courses = useSelector((state) => state.CourseReducer.courses);
    const course = courses.find((course) => course._id === courseId);
    const style = {
        position:'absolute',
        inset: '0px 0px auto auto',
        transform: 'translate3d(-280.8px, 48px, 0px)'}
    const icons = {
        Menu : <FaBars size="1.4em" />,
        Down:<FaChevronDown />,
        Glasses:<FaGlasses />,
        Account: <FaUser />,
        Dashboard: <FaTachometerAlt size="1.4em"/>,
        Courses: <FaBook size="1.4em" />,
        Calendar: <FaCalendarAlt size="1.4em" />,
        Inbox:<FaEnvelopeOpenText size="1.4em" />,
        History:<FaClock size="1.4em" />,
        Studio:<FaTv size="1.4em" />,
        Commons:<FaSignOutAlt size="1.4em" />,
        Help:<FaQuestionCircle size="1.4em" />,
    }

    const courseIcons = {
        Home:<FaHome />,
        Modules:<FaMendeley />,
        Piazza:<FaPlug />,
        'Progress Reports (EAB Navigate)':<FaPlug />,
        'Zoom Meetings':<FaPlug />,
        'Panopto Video':<FaPlug />,
        Assignments:<FaEdit />,
        Quizzes:<FaRocket />,
        Grades:<FaFileAlt />,
        People:<FaUserFriends />,
        Discussions:<FaComments />,
        Announcements:<FaBullhorn />,
        Pages:<FaFileAlt />,
        Files:<FaFolder /> ,
        Rubrics:<FaClipboard />,
        Outcomes:<FaBullseye />,
        Collaborations:<FaCircleNotch />,
        Syllabus:<FaFileAlt />,
        Settings:<FaCog />,
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
                                <Dropdown>
                                    <Dropdown.Toggle className={`btn btn-dark`}>
                                        <i>{icons['Menu']}</i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="kanbas-nav-container p-3 border border-secondary-subtle border border-3">
                                        {kanbas_nav_items.map((kanbas_item)=>{
                                            return(
                                                <Dropdown.Item key={kanbas_item._id} href={`#${kanbas_item.path.includes("Courses")? `/Kanbas/Courses/${courseId}` : kanbas_item.path}`} className="kanbas-nav-items ps-4">
                                                    <i className={`me-3 ${kanbas_item.name==="Account" ? "account-icon-grey":"menu-icons"}`}>{icons[`${kanbas_item.name}`]}</i>{kanbas_item.name}
                                                </Dropdown.Item>
                                            );
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item">
                                <p className="text-center">{`${course.number}.${course.section}.${course.startDate.split('-')[0]}${course.startDate.split('-')[2]}`}<br />{segments[courseIdx + 1]}</p>
                            </li>
                            <li className="nav-item">
                                    <Dropdown drop="dropdown-centered">
                                        <Dropdown.Toggle className={`btn btn-dark`}>
                                            <i>{icons['Down']}</i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="courses-nav-container p-4" style={style}>
                                            {
                                            
                                            course_nav_items.map((course_item) => {
                                                return (
                                                    <Dropdown.Item key={course_item._id} href={`#/Kanbas/Courses/${courseId}/${course_item.link!=="undefined"?course_item.link: segments.slice(courseIdx+1).length===1 ? segments[courseIdx+1]:`${segments[courseIdx+1]}/${segments[courseIdx+2]}`}`} className="course-nav-items ps-4">
                                                        <i className="me-3 menu-icons">{courseIcons[`${course_item.name}`]}</i>{course_item.name}
                                                    </Dropdown.Item>
                                                );
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
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