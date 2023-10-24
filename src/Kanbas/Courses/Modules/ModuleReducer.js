import { createSlice } from "@reduxjs/toolkit";
import db from '../../Database'
import { useParams } from "react-router";


const newModuleVal = {
    module_header:"Enter Module Header",
    module_description : "Enter Module Description",
    module_items :[]
}

const moduleItem = {
    module_item_name : "Module Item name",
    module_item_list : []
}


const initialState = {
    modules : db.modules,
    module : newModuleVal,
    moduleHeaderForm : false,
    moduleItem : moduleItem,
    addModuleItemForm : false,
    moduleHeaderFormType : "add",
    moduleItemFormType : "add"
};

const moduleSlice = createSlice({
    name : "modules",
    initialState,
    reducers : {
        toggleHeaderForm : (state, action) => {
            state.moduleHeaderForm = !state.moduleHeaderForm;
            state.moduleHeaderFormType = action.payload==="edit"? "Update" : "Add";
        },

        setSelectedModule : (state, action) => {
            if(action.payload.property) {
                const { property, value } = action.payload;
                state.module = {
                    ...state.module,
                    [property]:value,
                }
            }
            else{
                state.module = action.payload;
            }
        },

        setModuleItem : (state, action) => {
            // console.log("Inside Set ModuleItem");
            if(action.payload.properties){
                const module_item_id = state.module.module_items.length;
                const updateProperties = action.payload.properties;
                const updatedModuleItem = {
                    module_item_id: module_item_id,
                    ...state.moduleItem,
                    ...updateProperties,
                }
                
                state.moduleItem = updatedModuleItem;
                // console.log("updated module item");
                console.log(JSON.stringify(state.moduleItem));
            }else{
                state.moduleItem = action.payload;
            }
        },

        deleteModuleItem : (state, action) => {
            state.module.module_items = state.module.module_items.filter((item)=>{
                return item.module_item_id !== action.payload;
            });
            state.modules = state.modules.map((m)=> {
                return m._id === state.module._id ? state.module : m;
            });
        },

        setSubModuleItem : (state, action) =>{
            if(action.payload.properties) {
                
                const {module_item_list_id, name, path} = action.payload.properties;
                console.log("path",path);
                console.log(JSON.stringify(state.moduleItem));
                state.moduleItem.module_item_list = state.moduleItem.module_item_list.map((item)=>{
                    if(item.module_item_list_id ===module_item_list_id){
                        const newPath = path !== undefined ? path : item.path;
                        const newName = name !== undefined ? name : item.name;
                        return {
                                ...item,
                                name:newName,
                                path:newPath,
                                is_link:newPath!==""?true:false,
                            };
                    }
                    return item;
                });
                console.log(JSON.stringify(state.moduleItem));
                //state.moduleItem.module_item_list = updatedModuleItemList;
            }
        },

        addModuleItemToModules : (state) => {

            //check the module_item_list if has data or just dummy
            const newModuleItemListData = state.moduleItem.module_item_list.filter((l) =>
                l.name !== "");

            state.moduleItem.module_item_list = newModuleItemListData;

            //update module to include new module item
            let newModuleItemsData = [];
            if(state.module.module_items.length > 0){
                newModuleItemsData = [...state.module.module_items, state.moduleItem];
            }else{
                newModuleItemsData = [state.moduleItem];
            }
            state.module.module_items = newModuleItemsData;

            // replace the new updated module in the modules list
            const newModules = state.modules.map((m)=>
                m._id === state.module._id? state.module : m
            );
            state.modules = newModules;
            
            state.addModuleItemForm = false;
        },

        editModuleItemInModules : (state) => {
            state.module.module_items = state.module.module_items.map((item)=> {
                return item.module_item_id === state.moduleItem.module_item_id ? state.moduleItem : item; 
            });
            
            state.modules = state.modules.map((m)=>
                m._id === state.module._id? state.module : m
            );

            state.addModuleItemForm  = false;
            
        },

        addSubModuleEntry : (state) => {
            // add a empty subModule item to the current moduleItem
            const module_item_list_id = state.moduleItem.module_item_list.length;
            const subModuleItem = {
                module_item_list_id : module_item_list_id,
                name : "",
                path : "",
                is_link : false,
            }
            let newModuleItemList = [];
            if(state.moduleItem.module_item_list.length > 0){
                newModuleItemList = [...state.moduleItem.module_item_list, subModuleItem];
            }else{
                newModuleItemList = [subModuleItem];
            }
            state.moduleItem.module_item_list = newModuleItemList;
        },

        removeSubModuleEntry : (state, action) => {
            //get the sub module item list id 
            const module_item_list_id = action.payload;
            const newModuleItemListData = state.moduleItem.module_item_list.filter((l) =>
                l.module_item_list_id !== module_item_list_id);

            state.moduleItem.module_item_list = newModuleItemListData;

        },

        editModuleHeader : (state) => {
            state.modules = state.modules.map((m)=>
                m._id === state.module._id? state.module : m
            );
            state.moduleHeaderForm = false;
        },

        addModuleHeader : (state) => {
            const courseId = state.module.course_id;
            const moduleLength = state.modules.filter((module) => module.course_id ===courseId).length;
            const newModuleId = `${courseId}_M${moduleLength+1}`;
            state.modules = [...state.modules, {
                ...state.module, _id: newModuleId,
            },];
            state.moduleHeaderForm = false;
        },

        toggleAddModuleItemForm : (state,action) => {
            state.addModuleItemForm = !state.addModuleItemForm;
            state.moduleItemFormType = action.payload==="edit"? "Update" : "Add";
        },

        deleteModule : (state, action) => {
            state.modules = state.modules.filter((m) => m._id !== action.payload);
        }
    }
});

export const {toggleHeaderForm, addModuleHeader, setSelectedModule, setModuleItem, addModuleItemToModules, toggleAddModuleItemForm, addSubModuleEntry, removeSubModuleEntry, setSubModuleItem, deleteModule, editModuleHeader, deleteModuleItem, editModuleItemInModules} = moduleSlice.actions;
export default moduleSlice.reducer;