import { Link, Navigate, Route, Routes } from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";

function Labs(){
    return (
        <div className="fluid-container px-2" style={{ height: '725px', overflow: 'auto' }}>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="a3" />} />
                <Route path="a3" element={<Assignment3/>}/>
            </Routes> 
        </div>
    );
}

export default Labs;