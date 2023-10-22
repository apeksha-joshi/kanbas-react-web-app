import { Link } from "react-router-dom";
import db from "../Database";
import DashboardCard from "./DashboardCard";
import { React, useState } from "react";
import CourseForm from "./CourseForm";
import { FaPlus } from "react-icons/fa";


function Dashboard(){
    const [courses, setCourses] = useState(db.courses);
    const imgPaths = [...new Set(courses.map(item => item.img_path))];
    const imgColors = ['brown','grey']
    const [clickedBtn, setClickedBtn] = useState("addButton");
    const newCourse = {
            name: "New Course",      number: "New Number", section:"12345",
            startDate: "2023-09-10", endDate: "2023-12-15", semester:"Fall 2023", term:"Full", img_path:"card-2-color"
        }
    const [course, setCourse] = useState(newCourse);

    const deleteCourse = (courseId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this course?");
        if(confirmDelete){
            setCourses(courses.filter((c) => c._id !== courseId));
        }
        
    };

    const updateCourse = () => {
        setCourses(
          courses.map((c) => {
            if (c._id === course._id) {
              return course;
            } else {
              return c;
            }
          })
        );
        toggleForm();
      };

    const setSelectedBtn = (clickedButton) => {
        setClickedBtn(clickedButton);
    }
    
    const [formVisible, setFormVisibility] = useState(false);
    const addNewCourse = () => {
        setCourses([...courses,
                { ...course,
                _id: new Date().getTime() }]);
        
        toggleForm();
    };

    const toggleForm = () => {
        setFormVisibility(!formVisible);
    }
    
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
                    <button className="btn btn-danger" id="addButton" style={{width:'60px'}} onClick={(e)=>{setSelectedBtn(e.target.id);setCourse(newCourse);toggleForm("Add",addNewCourse);}}><FaPlus /></button>
                </div>
                
                {formVisible && (clickedBtn === "addButton" ?
                            <CourseForm btnName={"Add"} btnFunction={addNewCourse} 
                                        selected_course={course} setCourse={setCourse}
                                        imgPaths={imgPaths} imgColors={imgColors} 
                                        toggleFunction={toggleForm}/>
                        :
                        
                            <CourseForm btnName={"Update"} btnFunction={updateCourse} 
                                        selected_course={course} setCourse={setCourse}
                                        imgPaths={imgPaths} imgColors={imgColors} 
                                        toggleFunction={toggleForm}/>
                        
                        
                    )
                }

                
            </div>
            <div className="card_div row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 ms-0 ms-sm-3 mt-1">
                {
                    courses.map(
                        (course_item)=>(
                            <Link key={course_item._id} to={`/Kanbas/Courses/${course_item._id}/Home`}>
                                <DashboardCard course_item={course_item} 
                                            toggleFunction={toggleForm}
                                            selectedBtnFunction= {setSelectedBtn}
                                            setSelectedCourse={setCourse}
                                            deleteCourseFunction = {deleteCourse}/>
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