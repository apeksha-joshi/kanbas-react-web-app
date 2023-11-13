import { useDispatch, useSelector } from "react-redux";
import { addNewCourse } from "../CourseReducer";
import { addCourseDb, deleteCourseDb, updateCourseDb, getCourseDb } from "../../Services/courseServices";
import {toggleCourseForm, deleteCourseInState, updateCourseInState} from '../CourseReducer';

function useCourseActions() {
    const dispatch = useDispatch();
    const courseExists = useSelector((state) => state.CourseReducer.courseExists);


    const addCourse = async (course) =>{
        try{
            const response = await addCourseDb(course);
            if(response.status === 200){
                dispatch(addNewCourse(response.data));
                toggleCourseForm();
            }
        }catch(error){
            if(error.message === "Internal server error") {
                setTimeout(() => {
                    alert("An Internal server error occurred. Please try again later");
                }, 0);
            }else{
                setTimeout(() => {
                    alert("Error adding course: " + error.message);
                }, 0);
            }            
        }
    };

    const deleteCourse = async (courseId) => {
        try{
            const confirmDelete = window.confirm("Are you sure you want to delete this course?");
            if (confirmDelete) {
                const responseStatus = await deleteCourseDb(courseId);
                if(responseStatus === 204){
                    dispatch(deleteCourseInState(courseId));
                }
            }
        }catch(error){
            setTimeout(() => {
                alert("An Internal server error occurred. Please try again later");
            }, 0);
        }
    };


    const updateCourse = async (course) => {
        try{
            const responseStatus = await updateCourseDb(course);
            if(responseStatus === 204){
                dispatch(updateCourseInState(course));
                toggleCourseForm();
            }
        }catch(error){
            setTimeout(() => {
                alert("An Internal server error occurred. Please try again later");
            }, 0);
        }
    };

    const getCourse = async (courseId) => {
        try{
            const response = await getCourseDb(courseId);
            if(response.status === 200){
                return response.data;
            }
        }catch(error){
            if(error.message === "Internal server error") {
                setTimeout(() => {
                    alert("An Internal server error occurred. Please try again later");
                }, 0);
            }else{
                setTimeout(() => {
                    alert(error.message);
                }, 0);
            }            
        }
    };

    return {
        addCourse,
        deleteCourse,
        updateCourse,
        getCourse,
    };
}
    

export default useCourseActions;
