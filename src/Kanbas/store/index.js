import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "../Dashboard/CourseReducer";
import ModuleReducer from "../Courses/Modules/ModuleReducer";

const store = configureStore({
  reducer: {
    CourseReducer,
    ModuleReducer,
  },
});
export default store;