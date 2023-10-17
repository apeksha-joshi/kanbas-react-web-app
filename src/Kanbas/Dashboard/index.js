import { Link } from "react-router-dom";
import db from "../Database";
import DashboardCard from "./DashboardCard";


function Dashboard(){
    const courses = db.courses;
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="dashboard-heading">
                        <h1>Dashboard</h1>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="row">
                    <div className="col">
                        <div className="dashboard-heading">
                            <h3>Published Courses({courses.length})</h3>
                            <hr />
                        </div>
                    </div>
            </div>

            <div className="card_div row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 ms-0 ms-sm-3 mt-1">
                {
                    courses.map(
                        (course)=>(
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}/`}>
                                <DashboardCard course={course}/>
                            </Link>
                        )
                    )
                }
            </div>

            <div className="row"></div>
        </>
    );
}

export default Dashboard;