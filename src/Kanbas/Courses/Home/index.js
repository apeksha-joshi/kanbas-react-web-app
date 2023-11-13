import { FaBan, FaBell, FaBullhorn, FaCalendar, FaChartBar, FaCheckCircle, FaCrosshairs, FaEllipsisV, FaPlus, FaSignOutAlt } from "react-icons/fa";
import ModuleList from "../Modules/ModuleList";
import ModuleHeaderForm from "../Modules/ModuleHeaderForm";
import {toggleHeaderForm, setSelectedModule} from '../Modules/ModuleReducer';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getCourseTasks} from '../../Services/moduleServices.js';
import { useEffect, useState } from "react";

function Home() {

    const icons = {
        Tick:<FaCheckCircle />,
        Plus:<FaPlus />,
        VEllipsis:<FaEllipsisV />,
        Ban: <FaBan />,
        Import: <FaSignOutAlt />,
        Chart: <FaChartBar />,
        Choose: <FaCrosshairs />, 
        Announce: <FaBullhorn />,
        Bell: <FaBell />,
        Calendar: <FaCalendar />,
    }
    
    const {courseId} = useParams();
    const newModuleVal = {
        course_id:courseId,
        module_header:"Enter Module Header",
        module_description : "Enter Module Description",
        module_items :[]
    }
    const modules_json = useSelector((state) => state.ModuleReducer.modules);
    const addModuleItemForm = useSelector((state)=> state.ModuleReducer.addModuleItemForm);
    const moduleHeaderForm = useSelector((state) => state.ModuleReducer.moduleHeaderForm);
    const course_modules = modules_json.filter((module) => module.course_id===courseId);
    const [courseTasks, setCourseTasks] = useState([]);
   
    const courses = useSelector((state) => state.CourseReducer.courses);
    const course = courses.find((course) => course._id === courseId);
    const dispatch = useDispatch();

    useEffect(()=> {
        (async () => {
            try{
                const course_tasks = await getCourseTasks(courseId);
                setCourseTasks(course_tasks);
            }catch(error){
                console.log("Error fetching data", error);
            }
        })(); 
    },[]);
    return(
        <>
            
            <div className="col-12 col-lg-10 col-xl-7">
                <div className="row pe-3 my-2">
                    <div className="btn-grp-row">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-light">Collapse All</button>
                            <button type="button" className="btn btn-light mx-2">Veiw Progress</button>
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    <i className="me-2 tick-icon">{icons['Tick']}</i>Publish All
                                </button>
                            </div>
                            <button type="button" onClick=
                                                {() => {
                                                        dispatch(toggleHeaderForm()); 
                                                        dispatch(setSelectedModule(newModuleVal));
                                                }} className="btn btn-danger mx-2"><i className="fas plus-color">{icons['Plus']}</i>&nbsp;Module</button>
                            <button type="button" className="btn btn-light"><i className="icon-colors">{icons['VEllipsis']}</i></button>
                        </div>
                    </div>
                </div>

                <div className="row pe-3">
                    <hr />
                </div>

                <div className="row">
                    <div className="course-content">

                        {/* ModuleHeader Form */}

                        {moduleHeaderForm && (<ModuleHeaderForm />)}


                        {/* ModuleList */}
                        {
                            course_modules.map(
                                (module) => {
                                    return(
                                        <ModuleList module={module} key={module._id}/>
                                    )
                                    
                                }
                            )
                            
                        }
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>

            <div className="col-3 mt-2 ps-4 d-none d-xl-block">
                <div className="row">
                    <h5>Course Status</h5>
                </div>
                
                <div className="row ps-3">
                    <div className="col">
                        <button type="button" className="btn btn-light"><i className="icon-colors me-1">{icons['Ban']}</i>Unpublished</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-success" disabled><i className="fa-lg tick-icon me-2">{icons['Tick']}</i>Published</button>
                    </div>
                </div>

                <div className="row px-3 mt-2">
                    <button type="button" className="btn btn-light my-2"><i className="icon-colors me-1">{icons['Import']}</i>Import Existing Content</button>
                    <button type="button" className="btn btn-light"><i className="icon-colors me-1">{icons['Import']}</i>Import from Commons</button>
                    <button type="button" className="btn btn-light my-2"><i className="icon-colors me-1">{icons['Choose']}</i>Choose Home Page</button>
                    <button type="button" className="btn btn-light"><i className="far icon-colors me-2">{icons['Chart']}</i>View Course Screen</button>
                    <button type="button" className="btn btn-light my-2"><i className="fa-sm icon-colors me-1">{icons['Announce']}</i>New Announcement</button>
                    <button type="button" className="btn btn-light"><i className="far icon-colors me-2">{icons['Chart']}</i>New Analytics</button>
                    <button type="button" className="btn btn-light my-2"><i className="far fa-sm icon-colors me-1">{icons['Bell']}</i>View Course Notifications</button>
                </div>
                

                {
                courseTasks!==undefined && courseTasks.length !== 0?
                    courseTasks[0].todos.length > 0 &&(
                        <div className="row ps-3">
                            <div className="col set-position">
                                <h5 className="fw-bold">To Do</h5>
                            </div>
                            <hr className="pe-3" />
                            <ol className="list-group">
                                {courseTasks[0].todos.map((task) => {
                                    return (
                                        <li key={task._id} className="list-group-item d-flex todo justify-content-between align-items-start">
                                            <span className="badge bg-danger rounded-circle">{task.count}</span>
                                            <div className="ms-2 me-auto">
                                                <div className="fw-light"><Link to={task.path}>{task.name}</Link></div>
                                                <small>{task.points} points | {task.date}</small>
                                            </div>
                                        </li>
                                    )
                                })
                                }
                                
                            </ol>
                        </div>
                    ):
                    null
                }
                
                

                <div className="row ps-3 mt-1">
                    <div className="col set-position">
                        <h5 className="fw-bold">Coming Up</h5>
                    </div>
                    {
                        courseTasks!==undefined && courseTasks.length !==0?
                            (
                            <div className="col set-position float-end">
                                <p><Link to={courseTasks[0].upcoming.calendar}><i className="far fa-sm icon-colors me-1">{icons['Calendar']}</i>View Calendar</Link></p>
                            </div>):
                            null
                    }
                    
                    <hr className="pe-3" />
                </div>

                {
                courseTasks!==undefined && courseTasks.length !==0?
                    courseTasks[0].upcoming.upcoming_items.length > 0 && (
                        courseTasks[0].upcoming.upcoming_items.map((upcoming_item) => {
                            return (<div key={upcoming_item._id} className="row px-3">
                                <div className="d-flex float-end upcoming-item">
                                    <i className="far icon-colors me-1">{icons['Calendar']}</i>
                                    <div className="ps-3">
                                        <Link to={upcoming_item.path} className="ps-3">{upcoming_item.name}</Link><br />
                                        <small className="ps-3">{`${course.number}.${course.section}.${course.startDate.split('-')[0]}${course.startDate.split('-')[2]}`}</small><br />
                                        <small className="ps-3">{upcoming_item.date}</small>
                                    </div>
                                </div>
                            </div>)
                        }

                        )
                        
                    ):
                    null
                }
                
            </div>
        </>
    );
}
export default Home;