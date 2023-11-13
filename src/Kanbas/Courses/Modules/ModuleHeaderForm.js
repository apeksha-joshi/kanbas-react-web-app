import { useDispatch, useSelector } from "react-redux";
import {toggleHeaderForm, setSelectedModule} from './ModuleReducer';
import useModuleActions from "./actions/useModuleActions";

function ModuleHeaderForm() {
    const selected_module = useSelector((state) => state.ModuleReducer.module);
    const moduleHeaderFormType = useSelector((state) => state.ModuleReducer.moduleHeaderFormType);
    const dispatch = useDispatch();
    const {addModule, updateModule} = useModuleActions();

    return(
        <>
            <div className="moduleForm">
                <h4 className="form-label d-flex justify-content-center">Module Details</h4>
                
                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="module_header">Module Header:</label>
                    </div>
                    <div className="col">
                        <input value={selected_module.module_header} id="module_header" className="form-control"
                            onChange={(e) => dispatch(setSelectedModule({property:"module_header", value:e.target.value}))} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="module_description">Module Description:</label>
                    </div>
                    <div className="col">
                        <textarea value={selected_module.module_description} id="module_description" className="form-control"
                            onChange={(e) => dispatch(setSelectedModule({property:"module_description", value:e.target.value}))} />
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    {  
                        moduleHeaderFormType === "Add"?
                        <button className="btn btn-dark" style={{width:'70px'}} onClick={() => {addModule(selected_module)}}>{moduleHeaderFormType}</button> :
                        <button className="btn btn-dark" style={{width:'70px'}} onClick={() => {updateModule(selected_module)}}>{moduleHeaderFormType}</button>
                    }
                    
                    <button className="btn btn-dark ms-3" style={{width:'70px'}} onClick={() => dispatch(toggleHeaderForm())}>Cancel</button>
                </div>
            </div>  
        </>
    );
}

export default ModuleHeaderForm;