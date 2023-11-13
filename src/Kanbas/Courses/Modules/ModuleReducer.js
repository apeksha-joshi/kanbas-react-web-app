import { createSlice } from "@reduxjs/toolkit";

const newModuleVal = {
    module_header:"Enter Module Header",
    module_description : "Enter Module Description"
}


const initialState = {
    modules : [],
    module : newModuleVal,
    moduleHeaderForm : false,
    moduleHeaderFormType : "add",
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

        setModules : (state, action) => {
            state.modules = action.payload;
        },


        editModuleHeader : (state) => {
            state.modules = state.modules.map((m)=>
                m._id === state.module._id? state.module : m
            );
            state.moduleHeaderForm = false;
        },

        addModuleHeader : (state) => {
            state.modules = [...state.modules, state.module];
            state.moduleHeaderForm = false;
        },

        deleteModuleById : (state, action) => {
            state.modules = state.modules.filter((m) => m._id !== action.payload);
        }
    }
});

export const {toggleHeaderForm, addModuleHeader, setSelectedModule, deleteModuleById, editModuleHeader, setModules} = moduleSlice.actions;
export default moduleSlice.reducer;