import { FaCheckCircle, FaEdit, FaEllipsisV, FaGripVertical, FaPlus, FaTrashAlt } from "react-icons/fa";
import { toggleHeaderForm, setSelectedModule } from './ModuleReducer';
import { useDispatch } from "react-redux";
import useModuleActions from "./actions/useModuleActions";

function ModuleList({module}){

    const icons = {
        VGrip:<FaGripVertical />,
        Tick:<FaCheckCircle />,
        VEllipsis:<FaEllipsisV />,
        Plus:<FaPlus />,
        Delete:<FaTrashAlt />,
        Edit: <FaEdit />,
    }


    const dispatch = useDispatch();
    const {deleteModule} = useModuleActions();
    return(
        <>
        <div className="card my-3 rounded-0">
            {/* Module Header */}

            <div className="card-header px-0 list-group-item-secondary">
                <div className="btn-group mx-2 align-items-center" role="group">
                    <button id="assignment-option" type="button" className="btn ps-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="icon-colors">{icons['VGrip']}</i>&nbsp;
                    </button>
                    <strong><span className="list-item-color">{module.module_header}{module.module_description!==""? ` - ${module.module_description}`:""}</span></strong>
                </div>
                <div className="float-end list-header-right-text">
                    <div className="d-flex align-items-center">

                        <div className="dropdown">
                            <button className="btn btn-color dropdown-toggle icon-colors" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="tick-icon">{icons['Tick']}</i>
                            </button>
                        </div>
                        <button className="border-0 icon-btn" ><i className="icon-colors mx-3">{icons['Plus']}</i></button>&nbsp;
                        <button className="border-0 icon-btn" onClick={()=>{    
                                                                                dispatch(setSelectedModule(module));
                                                                                dispatch(toggleHeaderForm("edit"));
                                                                            }}><i className="icon-colors me-2">{icons['Edit']}</i></button>
                        
                        <button className="border-0 icon-btn" onClick={()=>{
                                                                                deleteModule(module._id);
                                                                            }}><i className="icon-colors me-2">{icons['Delete']}</i></button>
                        <i className="icon-colors me-2">{icons['VEllipsis']}</i>
                    </div>

                </div>
            </div>     
                     

        </div>
        </>
    );
}

export default ModuleList;