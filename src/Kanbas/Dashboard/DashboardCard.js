import { FaEdit, FaEllipsisV, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {toggleCourseForm, setCourseSelectedBtn, setSelectedCourse} from './CourseReducer';
import useCourseActions from "./actions/useCourseActions.js";

function DashboardCard({course_item}) {

    const cardIcons = {
        Menu: <FaEllipsisV size="1.4em"/>,
        Edit: <FaEdit size="1.4em"/>,
        Delete:<FaTrashAlt />
    }
    const dispatch = useDispatch();
    const {deleteCourse} = useCourseActions();
    return(
        <div className="col card-style">
            <div className="card">
                <div className={`card-img ${course_item.img_path} rounded-0`}>
                    <button type="button" className="btn m-2 float-end"><i className="fas card-option-btn">{cardIcons['Menu']}</i></button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{course_item.name}</h5>
                    <p className="card-text">{`${course_item.number}.${course_item.section}.${course_item.startDate.split('-')[0]}${course_item.startDate.split('-')[2]}`}<br /></p>
                    <small>{`${course_item.semester} Semester ${course_item.term} Term`}</small>
                    <div className="mt-2">
                        <button id="editButton"
                            className="edit-icon"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(setCourseSelectedBtn(e.target.id));
                                dispatch(toggleCourseForm());
                                dispatch(setSelectedCourse(course_item));
                            }}>
                            <i className="far">{cardIcons['Edit']}</i></button>

                            <button id="deleteButton"
                            className="edit-icon"
                            onClick={(e) => {
                                e.preventDefault();
                                deleteCourse(course_item._id);
                            }}>
                            <i className="delete-icon">{cardIcons['Delete']}</i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;