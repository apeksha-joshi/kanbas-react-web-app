import { createSlice } from "@reduxjs/toolkit";
import db from '../Database'

const newCourse = {
    name: "New Course",      number: "New Number", section:"12345",
    startDate: "2023-09-10", endDate: "2023-12-15", semester:"Fall 2023", term:"Full", img_path:"card-2-color"
}
const initialState = {
    courses : db.courses,
    course : newCourse,
    courseFormVisible : false,
    courseClickedBtn : "addButton",
};

const courseSlice = createSlice({
    name:"courses",
    initialState,
    reducers: {

        toggleCourseForm: (state) => {
            state.courseFormVisible = !state.courseFormVisible;
        },

        setCourseSelectedBtn: (state,action) => {
            state.courseClickedBtn = action.payload;
        },

        setSelectedCourse : (state,action) => {
            if (action.payload.property){
                const { property, value } = action.payload;
                state.course = {
                    ...state.course,
                    [property]: value,
                }
            }
            else{
                state.course = action.payload;
            }
        },

        addNewCourse : (state) => {
            const course_id = state.course.number;
            if (state.courses.find((c)=> c._id === course_id)!==undefined){
                alert("Course with this number already exists");
            }else{
                state.courses = [...state.courses, {
                    ...state.course, _id: state.course.number,
                },
                ];
                state.courseFormVisible = false;
            }
            
        },

        updateCourse : (state) => {
            const updatedCourses = state.courses.map((c) =>
            c._id === state.course._id ? state.course : c
            );
        state.courses = updatedCourses;
        state.courseFormVisible = false;
        },

        deleteCourse : (state, action) => {
            const courseId = action.payload;
            const confirmDelete = window.confirm("Are you sure you want to delete this course?");
            if (confirmDelete) {
                const updatedCourses = state.courses.filter((c) => c._id !== courseId);
                state.courses = updatedCourses;
            }
        },



    },

});

export const {toggleCourseForm, setSelectedCourse, setCourseSelectedBtn, addNewCourse, updateCourse, deleteCourse} = courseSlice.actions;
export default courseSlice.reducer;