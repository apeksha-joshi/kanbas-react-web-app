import { useDispatch, useSelector } from "react-redux";
import ModuleReducer from './ModuleReducer';
import {setModuleItem, toggleAddModuleItemForm, addModuleItemToModules, setSubModuleItem, addSubModuleEntry, removeSubModuleEntry, editModuleItemInModules} from './ModuleReducer';


function AddModuleItemForm() {
    const dispatch = useDispatch();

    const newModuleSubItem = {
        name : "Sub Module Name",
        path : "Add link to redirect",
    }
    //get module to which items and sub heading are to be added
    const selected_module = useSelector((state)=>state.ModuleReducer.module);
    const moduleItemFormType = useSelector((state)=>state.ModuleReducer.moduleItemFormType);
    // console.log("Selected Module after clicking Plus");
    // console.log(JSON.stringify(selected_module));
    
    //get the moduleItem to be updated and then added to the above module at the end
    const module_item = useSelector((state) => state.ModuleReducer.moduleItem);
    
    return (
        <>
            <div className="moduleForm">
                <h4 className="form-label d-flex justify-content-center">Add Module Items</h4>

                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="module_item_name">Module Item Name:</label>
                    </div>
                    <div className="col">
                        <input value={module_item.module_item_name} id="module_item_name" className="form-control"
                            onChange={(e) => dispatch(setModuleItem({properties:{module_item_name:e.target.value,}}))} />
                    </div>
                </div>

                {module_item.module_item_list.map((subModule)=>{
                    return (
                        <>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Sub Module name" value={subModule.name} aria-label="Sub Module name" 
                                      onChange={(e) => dispatch(setSubModuleItem({properties:{module_item_list_id:subModule.module_item_list_id,name:e.target.value}}))} />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Add link" value={subModule.path} aria-label="link to respective module" 
                                       onChange={(e) => dispatch(setSubModuleItem({properties:{module_item_list_id:subModule.module_item_list_id,path:e.target.value}}))}/>
                                </div>
                                <div className="col">
                                    <button className="btn btn-danger" onClick={() => dispatch(removeSubModuleEntry(subModule.module_item_list_id))}>Remove</button>
                                </div>
                            </div>
                        </>
                    );
                })}

                <div className="row d-flex justify-content-center">
                <button className="btn btn-light" style={{width:'200px'}} onClick={()=>dispatch(addSubModuleEntry())}>Add SubModule</button>
                </div>

                <div className="row d-flex justify-content-center">
                    {
                    moduleItemFormType==="Add"?
                    <button className="btn btn-light" style={{width:'70px'}} onClick={() => {dispatch(addModuleItemToModules())}}>{moduleItemFormType}</button>:
                    <button className="btn btn-light" style={{width:'70px'}} onClick={() => {dispatch(editModuleItemInModules())}}>{moduleItemFormType}</button>
                    }
                    
                    <button className="btn btn-light ms-3" style={{width:'70px'}} onClick={() => dispatch(toggleAddModuleItemForm())}>Cancel</button>
                </div>

            </div>
        </>
    );
}

export default AddModuleItemForm;