import { Navigate, Route, Routes, useLocation } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard/dashboard-style.css';
import './Courses/course-style.css';
import './Courses/Assignments/assignment-style.css'
import './Courses/Grades/grade-style.css';
import './style.css';
import useMediaQuery from './Hooks';
import { useEffect, useState } from "react";
import {getAllKanbasItems} from './Services/navServices.js';

function KanbasRowContainer(){
    const fragment = window.location.hash;
    const widthSize = useMediaQuery('(max-width: 992px)');
    const applyquery = (fragment.includes("Courses") && widthSize);
    const styles = {
        container: applyquery => ({
          marginTop: applyquery ? '60px' : '0'
        })
      };
    const [nav_items, setNavItems] = useState([]);

    useEffect(()=> {
        (async () => {
            const kanbasNavItems = await getAllKanbasItems();
            setNavItems(kanbasNavItems);
        })();  
    },[]);
    if(!nav_items || nav_items.length === 0) return <></>;
    return(
        <div className="row main-row-container" style={styles.container(applyquery)} >
            <KanbasNavigation nav_items={nav_items}/>
            <div className="col pb-2 page-content">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>
                
            </div>
        </div>
    );
}

export default KanbasRowContainer;