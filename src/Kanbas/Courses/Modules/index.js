import { useParams } from "react-router";
import ModuleList from "./ModuleList";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import ModuleHeaderForm from "./ModuleHeaderForm";
import { useDispatch, useSelector } from "react-redux";
import {toggleHeaderForm,  setSelectedModule} from './ModuleReducer';

function Modules(){
    const icons = {
        Tick:<FaCheckCircle />,
        Plus:<FaPlus />,
        VEllipsis:<FaEllipsisV />
    }
    const {courseId} = useParams();
    const newModuleVal = {
        course_id:courseId,
        module_header:"Enter Module Header",
        module_description : "Enter Module Description"
    }

    const modules = useSelector((state) => state.ModuleReducer.modules);
    const moduleHeaderForm = useSelector((state) => state.ModuleReducer.moduleHeaderForm);
    const dispatch = useDispatch();
    const course_modules = modules.filter((module) => module.course_id===courseId);


    return (
        <>
            <div className="col-12 col-lg-10 pe-5">
                <div className="row pe-3 my-2">
                    <div className="btn-grp-row">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-light">Collapse All</button>
                            <button type="button" className="btn btn-light mx-2">Veiw Progress</button>
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    <i className="me-2 tick-icon">{icons['Tick']}</i>Publish All
                                </button>
                            </div>
                            <button type="button" onClick=
                                {() => {
                                    dispatch(toggleHeaderForm()); 
                                    dispatch(setSelectedModule(newModuleVal));
                                }} className="btn btn-danger mx-2"><i className="fas plus-color">{icons['Plus']}</i>&nbsp;Module</button>
                            <button type="button" className="btn btn-light"><i className="icon-colors">{icons['VEllipsis']}</i></button>
                        </div>
                    </div>
                </div>

                <div className="row pe-3">
                    <hr />
                </div>

                <div className="row">
                    <div className="course-content">

                        {/* ModuleHeader Form */}

                        {moduleHeaderForm && (<ModuleHeaderForm />)}


                        {/* ModuleList */}
                        {
                            course_modules.map(
                                (module) => {
                                    return(<ModuleList module={module} key={module._id}/> )
                                    
                                }
                            )
                            
                        }
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </>
    );
}

export default Modules;