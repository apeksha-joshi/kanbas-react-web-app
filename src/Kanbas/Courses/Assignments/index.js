import { FaCheckCircle, FaEdit, FaEllipsisV, FaGripVertical, FaPlus } from "react-icons/fa";
import db from '../../Database';
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Assignments(){
    const icons ={
        Plus:<FaPlus />,
        VEllipsis:<FaEllipsisV />,
        VGrip:<FaGripVertical />,
        Edit:<FaEdit />,
        Tick:<FaCheckCircle />,
    }
    const {courseId} = useParams();
    const assignment_list = db.assignments.filter((assignment)=>assignment.courseId===courseId);
    
    return(
        
        <div className="col">
            <div className="row pe-5">
                <div className="filter-assignments m-2">
                    <input type="text" className="form-control w-25" id="search_assignments" placeholder="Search for Assignments" />
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-color"><i className="fas">{icons['Plus']}</i>&nbsp;Group</button>
                        <button type="button" className="btn btn-danger mx-2"><i className="fas plus-color">{icons['Plus']}</i>&nbsp;Assignment</button>
                        <button type="button" className="btn btn-color"><i className="fas">{icons['VEllipsis']}</i></button>
                    </div>
                </div>
                <hr />
            </div>

            {/* Assignment content */}
            <div className="row">
                <div className="assignment-content pe-5">
                    <div className="card assignment-card mt-3">
                        <div className="card-header px-0">
                            <div className="btn-group mx-2 align-items-center" role="group">
                                <button id="assignment-option" type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-lg icon-colors">{icons['VGrip']}</i>&nbsp;
                                </button>
                                <strong><span>Assignments</span></strong>
                            </div>
                            <div className="float-end me-4">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex border border border-3 rounded-pill mx-2 px-2">40% of Total</div>&nbsp;

                                    <i className="icon-colors">{icons['Plus']}</i>&nbsp;
                                    <i className="icon-colors">{icons['VEllipsis']}</i>
                                </div>

                            </div>
                        </div>
                    </div>

                    <ul className="list-group list-group-flush border-color">
                        {assignment_list.map((assignment_item)=>{
                            return(
                                <div key={assignment_item._id} className="list-group-item list-group-item-action list-group-item-light card-list-item" aria-current="true">
                                    <div className="row list-item-row">
                                        <div className="col col-md-1 d-flex list-item-drag-icon">
                                            <i className="fa-lg icon-colors me-3">{icons['VGrip']}</i>
                                            <i className="far fa-lg tick-icon me-3">{icons['Edit']}</i>
                                        </div>
                                        <div className="col col-md-10">
                                            <h6 className="mb-1 card-list-item-header"><Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment_item._id}`}>{assignment_item.title}</Link></h6>
                                            <small>
                                                {assignment_item.description} |
                                                <br />
                                                <strong>Due</strong> {assignment_item.due_date} | {assignment_item.points}pts
                                            </small>
                                        </div>

                                        <div className="col col-md-1 d-flex list-item-option-icon align-items-center">
                                            <i className={`${assignment_item.published === true ? "tick-icon" : "tick-icon-fade"} fa-lg me-4`}>{icons['Tick']}</i>
                                            <i className="fa-lg icon-colors me-4">{icons['VEllipsis']}</i>
                                        </div>

                                    </div>
                                </div>

                            )
                        })

                        }
                    </ul>

                </div>
            </div>

            <br />
            <br />
            <br />


        </div>


        
    );
}

export default Assignments;