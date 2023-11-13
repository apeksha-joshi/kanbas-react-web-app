import { Navigate, Route, Routes, useParams } from "react-router";
import CourseNavigation from "./CourseNavigation";
import CourseHeader from "./CourseHeader";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useEffect, useState } from "react";
import { setCourses } from "../Dashboard/CourseReducer";
import {setModules} from './Modules/ModuleReducer';
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses, getCourseDb } from "../Services/courseServices.js";
import {getAllKanbasItems, getAllCourseItems} from '../Services/navServices.js';
import {getCourseModules} from '../Services/moduleServices.js';


function Courses() {
    const { courseId } = useParams();
    const courses = useSelector((state) => state.CourseReducer.courses);
    const dispatch = useDispatch();
    const [kanbas_nav_items, setNavItems] = useState([]);
    const [course_nav_items, setCourseNavItems] = useState([]);
    const [course, setCourse] = useState({});


    useEffect(()=> {
        (async () => {
            try{
                const coursesData = await getAllCourses();
                dispatch(setCourses(coursesData));
                const kanbasNavItems = await getAllKanbasItems();
                setNavItems(kanbasNavItems);
                const courseNavItems = await getAllCourseItems();
                setCourseNavItems(courseNavItems);
                const courseData = await getCourseDb(courseId);
                setCourse(courseData);
                const modulesData = await getCourseModules(courseId);
                dispatch(setModules(modulesData))
            }catch(error){
                console.log("Error fetching data", error);
            }
        })(); 
    },[]);

    if (Object.keys(course).length === 0 || kanbas_nav_items.length ===0 || course_nav_items.length === 0) return <></>
    return (

        <>
            <CourseHeader kanbas_nav_items = {kanbas_nav_items} course={course} course_items = {course_nav_items}/>    
            <div className="row margin-lg">
                <CourseNavigation course_items = {course_nav_items} course={course}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>
        </>
    );
}

export default Courses;