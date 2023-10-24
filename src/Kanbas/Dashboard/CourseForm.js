import {toggleCourseForm, setSelectedCourse, addNewCourse, updateCourse} from './CourseReducer';
import { useSelector, useDispatch } from "react-redux";

function CourseForm({imgPaths, imgColors}) {
    const selected_course = useSelector((state) => state.CourseReducer.course);
    const clickedBtn = useSelector((state) => state.CourseReducer.courseClickedBtn);
    const dispatch = useDispatch();
    return(
        <div className="courseForm">
            <h4 className="form-label d-flex justify-content-center">Course Details</h4>

            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="course_number">Number:</label>
                </div>
                <div className="col">
                    <input value={selected_course.number} id="course_number" className="form-control"
                        onChange={(e) => dispatch(setSelectedCourse({ property :"number", value: e.target.value }))} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="course_name">Name:</label>
                </div>
                <div className="col">
                    <input value={selected_course.name} id="course_name" className="form-control"
                        onChange={(e) => dispatch(setSelectedCourse({ property :"name", value: e.target.value }))} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="course_section">Section:</label>
                </div>
                <div className="col">
                    <input value={selected_course.section} id="course_section" className="form-control"
                        onChange={(e) => dispatch(setSelectedCourse({ property :"section", value: e.target.value }))} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="course_semester">Semester:</label>
                </div>
                <div className="col">
                    <input value={selected_course.semester} id="course_semester" className="form-control"
                        onChange={(e) => dispatch(setSelectedCourse({ property :"semester", value: e.target.value }))} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="course_term">Term:</label>
                </div>
                <div className="col">
                    <input value={selected_course.term} id="course_term" className="form-control"
                        onChange={(e) => dispatch(setSelectedCourse({ property :"term", value: e.target.value }))} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="course_startDate">Start Date:</label>
                </div>
                <div className="col">
                    <input value={selected_course.startDate} type="date" className="form-control"
                        onChange={(e) => dispatch(setSelectedCourse({ property :"startDate", value: e.target.value }))} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="course_endDate">End Date:</label>
                </div>
                <div className="col">
                    <input value={selected_course.endDate} type="date" id="course_endDate" className="form-control"
                        onChange={(e) => dispatch(setSelectedCourse({ property :"endDate", value: e.target.value }))} />
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <label className="form-label" htmlFor="course_img">Course Image:</label>
                </div>
                <div className="col-3">
                    <select value={selected_course.img_path} id="course_image" className="form-control"
                        onChange={(e) => dispatch(setSelectedCourse({ property :"img_path", value: e.target.value }))} >

                        <option value="">Select an image path</option>
                        {imgPaths.map((img, idx) => {
                            return (
                                <option key={idx} value={img}>{imgColors[idx]}</option>
                            );
                        })}
                    </select>
                </div>

                <div className="col-3">
                    <button className="btn btn-light ms-3">Upload</button>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                {console.log("Course Form",clickedBtn)}
                    {clickedBtn === "addButton" ?
                        <button className="btn btn-light" style={{width:'70px'}} onClick={() => dispatch(addNewCourse())}>Add</button>
                    :
                    <button className="btn btn-light" style={{width:'70px'}} onClick={() => dispatch(updateCourse())}>Update</button>
                    }
                    
                    <button className="btn btn-light ms-3" style={{width:'70px'}} onClick={() => dispatch(toggleCourseForm())}>Cancel</button>
                
            </div>
        </div>
    );
}
export default CourseForm;