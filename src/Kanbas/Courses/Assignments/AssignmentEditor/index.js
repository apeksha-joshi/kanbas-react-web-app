import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import db from '../../../Database';
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

function AssignmentEditor() {
    const icons ={
        VEllipsis:<FaEllipsisV />,
        Tick:<FaCheckCircle />,
    }
    const {courseId} = useParams();
    const { assignmentId } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);
    const navigate = useNavigate();

    const onlineEntryOptions = ["Text Entry", "Website URL", "Media Recordings","Student Annotations", "File Upload"];
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    
    return (
        <div className="col me-2">
            <div className="row mt-3">
                <div className="edit-assignment-header m-2">
                    <i className="fa-lg tick-icon me-2">{icons['Tick']}</i>
                    Published
                    <button id="edit-options" type="button" className="btn btn-color mx-2">
                        <i className="icon-colors">{icons['VEllipsis']}</i>
                    </button>
                </div>
                <hr />
            </div>

            <div className="row">
                <div className="mb-3">
                    <label htmlFor="assignment-name" className="form-label">Assignment Name</label>
                    <input type="text" className="form-control" id="assignment-name" value={assignment.title} placeholder="Assignment Name" title="Provide the assignment name" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="assignment-description" rows="3" value={assignment.description} />
                </div>
            </div>

            <div className="row px-4 mt-3">
                <div className="col-2">
                    <label htmlFor="assignment-points" className="form-label float-end">Points</label>
                </div>

                <div className="col-9">
                    <input type="number" min="0" max="100" className="form-control" id="assignment-points" value={assignment.points} placeholder="0" title="Provide the assignment points" />
                </div>
            </div>

            <div className="row px-4 mt-3">
                <div className="col-2">
                    <label htmlFor="assignment-groups" className="form-label float-end">Assignmnet Groups</label>
                </div>

                <div className="col-9">
                    <select className="form-select" id="assignment-groups">
                        <option selected>{assignment.group}</option>
                    </select>
                </div>
            </div>

            <div className="row px-4 mt-3">
                <div className="col-2">
                    <label htmlFor="assignment-display-grades" className="form-label float-end">Display Grades as</label>
                </div>

                <div className="col-9">
                    <select className="form-select" id="assignment-display-grades">
                        <option selected>{assignment.display}</option>
                    </select>
                </div>
            </div>

            <div className="row px-4 mt-3">
                <div className="col-2">
                </div>

                <div className="col-9">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="count-assignment" checked={assignment.count_for_grade===false?true:false} />
                            <label className="form-check-label" htmlFor="count-assignment">
                                Do not count this assignment towards the final grade
                            </label>
                    </div>
                </div>
            </div>

            <div className="row px-4 mt-3">
                <div className="col-2">
                    <label htmlFor="assignment-submission-type" className="form-label float-end">Submission Type</label>
                </div>

                <div className="col-9 border border-light border-3 rounded">
                    <select className="form-select mt-3" id="assignment-submission-type">
                        <option selected>{assignment.submission_type}</option>
                    </select>
                    <div className="mt-2">
                        <h6 className="fw-bold">Online Entry Options</h6>

                        {onlineEntryOptions.map((option_name, option_id)=>{
                            return(
                                <div key={option_id} className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                        name="submission-type" value="" id={`online-entry_${option_id}`}     
                                        checked={assignment.online_entry_option.includes(option_name)?true:false}/>
                                    <label className="form-check-label" htmlFor={`online-entry_${option_id}`} >
                                        {option_name}
                                    </label>
                                </div>
                            );
                        })}

                        
                        
                    </div>
                </div>
            </div>

            <div className="row px-4 mt-3">
                <div className="col-2">
                    <label className="form-label float-end">Assign</label>
                </div>

                <div className="col-9 border border-light border-3 rounded" id="assignment-assign">
                    <div className="mb-3">
                        <label htmlFor="assignment-assign-to" className="form-label fw-bold">Assign to</label>
                        <input type="text" className="form-control" id="assignment-assign-to" value={assignment.assign_to} placeholder={assignment.assign_to} title="Assignment assign to" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="assignment-due" className="form-label fw-bold">Due</label>
                        <input type="date" className="form-control" id="assignment-due" value={assignment.due_date==="Not yet Available"?"":assignment.due_date} title="Assignment Due" />
                    </div>

                    <div className="row d-flex">
                        <div className="col">
                            <label htmlFor="assignment-available" className="form-label fw-bold">Available From</label>
                            <input type="date" className="form-control" id="assignment-available" value={assignment.available_from} title="Assignment available date" />
                        </div>
                        <div className="col">
                            <label htmlFor="assignment-available-until" className="form-label fw-bold">Until</label>
                            <input type="date" className="form-control" id="assignment-available-until" value={assignment.available_until} title="Assignment available until date" />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <button type="button" className="btn btn-color"><i className="icon-colors">{icons['Plus']}</i>&nbsp;Add</button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="row">
                <div className="form-check  col-5 mx-3">
                    <input className="form-check-input" type="checkbox" value="" id="notify" />
                        <label className="form-check-label" htmlFor="notify">
                            Notify users that this content has changed
                        </label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-color me-2">Cancel</Link>
                    <button onClick={handleSave} className="btn btn-danger">
                        Save
                    </button>
                </div>
            </div>

        </div>
    );
}

export default AssignmentEditor;