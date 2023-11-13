import httpClient from './index.js';

export const getCourseModules = async(courseId) => {
    try{
        const {data} = await httpClient.get(`/api/courses/${courseId}/modules`);
        return data;
    }catch(error){
        throw new Error("Internal server error");
    }
};


export const getCourseTasks = async(courseId) => {
    try{
        const {data} = await httpClient.get(`/api/courses/${courseId}/tasks`);
        return data;
    }catch(error){
        throw new Error("Internal server error");
    }
};

export const createModule = async (courseId, module) => {
    try{
        const response = await httpClient.post(`/api/courses/${courseId}/modules`, module);
        return response;
    }catch(error){
        throw new Error("Internal server error");
    }
};

export const deleteModuleDb = async (moduleId) => {
    try{
        const response = await httpClient.delete(`/api/modules/${moduleId}`);
        return response.status;
    }catch(error){
        throw new Error(error.response.status);
    }
}

export const updateModuleDb = async (module) => {
    try{
        const response = await httpClient.put(`/api/modules/${module._id}`, module);
        return response.status;
    }catch(error){
        throw new Error(error.response.status);
    }
}