import { FaCog, FaFileExport, FaFileImport, FaFilter } from "react-icons/fa";
import db from '../../Database';
import { useParams } from "react-router";

function Grades(){

    const icons={
        Import:<FaFileImport />,
        Export:<FaFileExport />,
        Setting:<FaCog />,
        Filter:<FaFilter />
    }

    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.courseId === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    const enrolled_users = enrollments.map((enrollment)=>{
             return enrollment.user;
        })
    //console.log(JSON.stringify(assignments))
    return(
        <div className="col-12 col-lg-10 pe-3">
            <div className="row">
                <div className="btns-display p-2">
                    <button type="button" className="btn btn-light grades-btn m-1"><i className="fasme-2">{icons['Import']}</i>Import</button>
                    <div className="dropdown">
                        <button className="btn btn-secondary btn-light dropdown-toggle grades-btn m-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas black-icon-color me-2">{icons['Export']}</i>Export
                        </button>

                    </div>
                    <button type="button" className="btn btn-light grades-btn m-1"><i className="fas">{icons['Setting']}</i></button>
                </div>
            </div>

            <div className="row">
                <div className="grades-filter">
                    <div className="grades-filter-item me-3">
                        <label htmlFor="grades-search-students" className="form-label">Student Names</label>
                        <select className="form-select" id="grades-search-students">
                            <option selected>Search Students</option>
                            {/* Dynamic */}
                            {
                                enrolled_users.map((enrolled_user)=>{
                                    const userObj = db.users.find((user)=>user._id===enrolled_user);
                                    return(
                                        <option value={userObj._id}>{userObj.firstName} {userObj.lastName}</option>
                                    );
                                })
                            }
                            
                        </select>
                    </div>
                    <div className="grades-filter-item me-3">
                        <label htmlFor="grades-search-assignments" className="form-label">Assignment Names</label>
                        <select className="form-select" id="grades-search-assignments">
                            <option selected>Search Assignments</option>
                            {/* Dynamic */}
                            {assignments.map((assignment)=>{
                                return(<option value={assignment._id}>{assignment.title}</option>)
                            })}
                            
                        </select>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="grades-apply-filter mt-3">
                    <button type="button" className="btn btn-light"><i className="fas">{icons['Filter']}</i> &nbsp;Apply Filters</button>
                </div>
            </div>

            <div className="table-responsive me-3 mt-3">
                <table className="table table-striped table-bordered text-center align-middle">
                    <thead>
                        <tr>
                            <th scope="col" className="align-top text-nowrap">Student Name</th>
                            {assignments.map((assignment) => {
                                return (
                                    <th scope="col" className="table-header-assignment align-top text-nowrap">{assignment.title} <br />Out of {assignment.points}</th>
                                )
                            })}

                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollments.map((enrollment)=>{
                                const user = db.users.find((user)=>user._id===enrollment.user);
                                return(
                                    <tr>
                                        <td scope="row" className="student-name-col">{user.firstName} {user.lastName}</td>
                                        {assignments.map((assignment)=>{
                                            const grade = db.grades.find((grade)=>grade.student === enrollment.user && grade.assignment === assignment._id);
                                            return(
                                                <td>{grade?.grade || "-"}</td>
                                            );
                                        })}
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grades;