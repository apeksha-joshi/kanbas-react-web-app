import { FaEdit, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";

function DashboardCard({course}) {

    const cardIcons = {
        Menu: <FaEllipsisV size="1.4em"/>,
        Edit: <FaEdit size="1.4em"/>
    }

    return(
        <div className="col card-style">
            <div className="card">
                <div className={`card-img ${course.img_path} rounded-0`}>
                    <button type="button" className="btn m-2 float-end"><i className="fas card-option-btn">{cardIcons['Menu']}</i></button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text">{`${course.number}.${course.section}.${course.startDate.split('-')[0]}${course.startDate.split('-')[2]}`}<br /></p>
                    <small>{`${course.semester} Semester ${course.term} Term`}</small>
                    <div className="mt-2">
                        <i className="far">{cardIcons['Edit']}</i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;