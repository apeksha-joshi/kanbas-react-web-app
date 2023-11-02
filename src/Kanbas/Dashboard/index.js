import { Link } from "react-router-dom";
import DashboardCard from "./DashboardCard";
import { React } from "react";
import CourseForm from "./CourseForm";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {toggleCourseForm, setCourseSelectedBtn, setSelectedCourse} from './CourseReducer';

function Dashboard(){
    
    const newCourse = {
        name: "New Course",      number: "New Number", section:"12345",
        startDate: "2023-09-10", endDate: "2023-12-15", semester:"Fall 2023", term:"Full", img_path:"card-2-color"
    }
    const courses = useSelector((state) => state.CourseReducer.courses);
    const course = useSelector((state) => state.CourseReducer.course);
    const formVisible = useSelector((state) => state.CourseReducer.courseFormVisible);
    const courseClickedBtn = useSelector((state) => state.CourseReducer.courseClickedBtn);
    const dispatch = useDispatch();

    const imgPaths = [...new Set(courses.map(item => item.img_path))];
    const imgColors = ['brown','grey']

    
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="dashboard-heading">
                        <h1>Dashboard</h1>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="row">
                    <div className="col">
                        <div className="dashboard-heading">
                            <h3>Published Courses({courses.length})</h3>
                            <hr />
                        </div>
                    </div>
            </div>
            <div className="row">
                <div className="d-flex justify-content-end pe-4">
                    <button className="btn btn-danger" id="addButton" style={{width:'200px'}} onClick={(e)=>
                                {
                                    
                                    dispatch(setCourseSelectedBtn("addButton"));
                                    dispatch(setSelectedCourse(newCourse));
                                    dispatch(toggleCourseForm());
                                }}><FaPlus /> Add </button>
                </div>
                {console.log("clickedBtn: ",courseClickedBtn)}
                {formVisible && (courseClickedBtn === "addButton" ?
                            <CourseForm imgPaths={imgPaths} imgColors={imgColors}/>
                        :
                        
                            <CourseForm imgPaths={imgPaths} imgColors={imgColors}/>
                        
                        
                    )
                }

                
            </div>
            <div className="card_div row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 ms-0 ms-sm-3 mt-1">
                {
                    courses.map(
                        (course_item)=>(
                            
                            <Link key={course_item._id} to={`/Kanbas/Courses/${course_item._id}/Home`}>
                                <DashboardCard course_item={course_item}/>
                            </Link>
                        )
                    )
                }
            </div>

            <div className="row"></div>
        </>
    );
}

export default Dashboard;