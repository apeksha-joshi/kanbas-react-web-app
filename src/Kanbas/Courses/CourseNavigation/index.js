import { Link, useLocation } from "react-router-dom";

function CourseNavigation(data) {
    const { pathname } = useLocation();
    const course_items = data.course_items;
    const course = data.course;
    const year_mth = `${course.startDate.split('-')[0]}${course.startDate.split('-')[2]}`;
    const fixed_value = `${year_mth}_${course.semester.split(' ')[0]}_${course.semester.split(' ')[1]}`;
    return(
        <div className="col-2 d-none d-lg-block second-nav-container">
            <div id="profile-nav" className="second-nav">
                <ul className="second-nav-list">
                    <li className="second-nav-items-fixed">{fixed_value}</li>
                    {
                        course_items.map(
                            (course_item, course_nav_id) => (
                                <li key={course_nav_id} className="second-nav-items">
                                    <Link 
                                    key={course_item._id}
                                    to={`${course_item.link!=="undefined" ? `/Kanbas/Courses/${course._id}/${course_item.link}` : "#"} `} 
                                    className={`second-nav-item-text ${pathname.includes(course_item.name) && "active-second-nav-link"}`}>
                                        {course_item.name}
                                    </Link>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default CourseNavigation;