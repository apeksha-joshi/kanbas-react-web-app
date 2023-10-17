import { FaCheckCircle, FaEllipsisV, FaGripVertical, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function ModuleList({module}){

    const icons = {
        VGrip:<FaGripVertical />,
        Tick:<FaCheckCircle />,
        VEllipsis:<FaEllipsisV />,
        Plus:<FaPlus />
    }

    return(
        <>
        <div className="card my-3 rounded-0">
            {/* Module Header */}

            <div className="card-header px-0 list-group-item-secondary">
                <div className="btn-group mx-2 align-items-center" role="group">
                    <button id="assignment-option" type="button" className="btn ps-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="icon-colors">{icons['VGrip']}</i>&nbsp;
                    </button>
                    <strong><span className="list-item-color">{module.module_header}</span></strong>
                </div>
                <div className="float-end list-header-right-text">
                    <div className="d-flex align-items-center">

                        <div className="dropdown">
                            <button className="btn btn-color dropdown-toggle icon-colors" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="tick-icon">{icons['Tick']}</i>
                            </button>
                        </div>
                        <i className="icon-colors mx-3">{icons['Plus']}</i>&nbsp;
                        <i className="icon-colors me-2">{icons['VEllipsis']}</i>
                    </div>

                </div>
            </div>

            {/* Module Items List */}

            {/* If module_items exists display ul */}

            {module.module_items.length > 0 && (
                <ul className="list-group list-group-flush">
                    
                        {/* Loop module_items */}
                        {module.module_items.map((module_item, idx) => {

                                // Display module_item_name
                                
                                return (
                                    <div key={idx}>
                                    <div key={idx} className="list-group-item list-group-item-action list-group-item-light card-list-item" aria-current="true">
                                        <div className="row list-item-row">
                                            <div className="col-9 d-flex p-0">
                                                <i className="fas fa-grip-vertical fa-lg icon-colors ps-2"></i>
                                                <h6 className="mb-1 card-list-item-header ps-3 fw-bold"><Link to="">{module_item.module_item_name}</Link></h6>
                                            </div>

                                            <div className="col-3 d-flex list-item-option-icon justify-content-end align-items-center">
                                                <i className="tick-icon me-4">{icons['Tick']}</i>
                                                <i className="icon-colors">{icons['VEllipsis']}</i>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    {module_item.module_item_list.length > 0 &&(
                                        module_item.module_item_list.map((module_sub_list_item, i)=>
                                        {
                                            return (<div key={`${idx}_${i}`} className="list-group-item list-group-item-action list-group-item-light card-list-item" aria-current="true">
                                                     <div className="row list-item-row">
                                                         <div className="col-9 d-flex p-0">
                                                             <i className="fas fa-grip-vertical fa-lg icon-colors ps-2"></i>
                                                             <h6 className={`${module_sub_list_item.is_link === true ? "list-item-link" : ""} mb-1 ps-5 fw-bold`}><Link to={module_sub_list_item.path}>{module_sub_list_item.name}</Link></h6>
                                                         </div>

                                                         <div className="col-3 d-flex list-item-option-icon justify-content-end align-items-center">
                                                             <i className="tick-icon me-4">{icons['Tick']}</i>
                                                             <i className="icon-colors">{icons['VEllipsis']}</i>
                                                         </div>
                                                     </div>
                                                 </div>);
                                        })
                                    )}
                                </div>
                                );
                            }
                        )}
                        

                </ul>
            )}
            

        </div>
        </>
    );
}

export default ModuleList;