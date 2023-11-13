import { createSlice } from "@reduxjs/toolkit";

const newCourse = {
    name: "New Course",      number: "New Number", section:"12345",
    startDate: "2023-09-10", endDate: "2023-12-15", semester:"Fall 2023", term:"Full", img_path:"card-2-color"
}
const initialState = {
    courses : [],
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

        setCourses: (state, action) => {
            state.courses = action.payload;
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

        checkCourseExists : (state) => {
            const course_id = state.course.number;
            if (state.courses.find((c)=> c._id === course_id)!==undefined){
                return { ...state, courseExists: true };
            }else{
                return { ...state, courseExists: false };
            }
        },

        addNewCourse : (state) => {          
            state.courses = [...state.courses, {
                ...state.course, _id: state.course.number,
            },
            ];
            state.courseFormVisible = false;
        },

        updateCourseInState : (state, action) => {
            const updatedCourse = action.payload;
            const updatedCourses = state.courses.map((c) =>
            c._id === updatedCourse._id ? updatedCourse : c
            );
            state.courses = updatedCourses;
        state.courseFormVisible = false;
        },

        deleteCourseInState : (state, action) => {
            const courseId = action.payload;
            const updatedCourses = state.courses.filter((c) => c._id !== courseId);
            state.courses = updatedCourses;
        },
    },

});

export const {toggleCourseForm, setCourses, setSelectedCourse, setCourseSelectedBtn, addNewCourse, updateCourseInState, deleteCourseInState} = courseSlice.actions;
export default courseSlice.reducer;