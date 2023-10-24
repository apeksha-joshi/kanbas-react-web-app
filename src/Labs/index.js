import { Link, Navigate, Route, Routes } from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
import Assignment4 from "./a4";
import store from './store';
import { Provider } from "react-redux";

function Labs(){
    return (
        <Provider store={store}>
            <div className="fluid-container px-2" style={{ height: '725px', overflow: 'auto' }}>
                <Nav />
                <Routes>
                    <Route path="/" element={<Navigate to="a3" />} />
                    <Route path="a3/*" element={<Assignment3/>}/>
                    <Route path="a4/*" element={<Assignment4/>}/>
                </Routes> 
            </div>
        </Provider>
    );
}

export default Labs;