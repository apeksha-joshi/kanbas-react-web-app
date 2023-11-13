import { useDispatch } from 'react-redux';
import {createModule, deleteModuleDb, updateModuleDb} from '../../../Services/moduleServices.js';
import {setSelectedModule, deleteModuleById, addModuleHeader, editModuleHeader} from '../ModuleReducer.js'


function useModuleActions() {

    const dispatch = useDispatch();

    const addModule = async (module) => {
        try{
            const courseId = module.course_id;
            const response = await createModule(courseId, module);
            if(response.status === 200){
                dispatch(setSelectedModule(response.data));
                dispatch(addModuleHeader());
            }
        }catch(error){
            if(error.message === "Internal server error") {
                setTimeout(() => {
                    alert("An Internal server error occurred. Please try again later");
                }, 0);
            }else{
                setTimeout(() => {
                    alert("Error adding module: " + error.message);
                }, 0);
            }            
        }
    };


    const deleteModule = async (moduleId) => {
        try{
            const responseStatus = await deleteModuleDb(moduleId);
            if(responseStatus === 204){
                dispatch(deleteModuleById(moduleId));
            }
        }catch(error){
            setTimeout(() => {
                alert("An Internal server error occurred. Please try again later");
            }, 0);
        }
    };

    const updateModule = async (module) => {
        try{
            const responseStatus = await updateModuleDb(module);
            if(responseStatus === 204){
                dispatch(setSelectedModule(module));
                dispatch(editModuleHeader());
            }
        }catch(error){
            setTimeout(() => {
                alert("An Internal server error occurred. Please try again later");
            }, 0);
        }
    };

    return {
        addModule,
        deleteModule,
        updateModule,
    }
}

export default useModuleActions;