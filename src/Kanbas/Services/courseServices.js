import httpClient from './index.js';

export const getAllCourses = async() => {
    try{
        const {data} = await httpClient.get("/api/courses");
        return data;
    }catch(error){
        console.log(error);
    }
};

export const addCourseDb = async (course) => {
    try{
        const response = await httpClient.post("/api/courses", course);
        return response;
    }catch(error){
        throw Error(error.response.data);
    }
};

export const deleteCourseDb = async (courseId) => {
    try{
        const response = await httpClient.delete(`/api/courses/${courseId}`);
        return response.status;
    }catch(error){
        throw new Error(error.response.status);
    }
}

export const updateCourseDb = async (course) => {
    try{
        const response = await httpClient.put(`/api/courses/${course._id}`, course);
        return response.status;
    }catch(error){
        throw new Error(error.response.status);
    }
}

export const getCourseDb = async (courseId) => {
    try{
        const response = await httpClient.get(`/api/courses/${courseId}`);
        return response.data;
    }catch(error){
        throw new Error(error.response.status);
    }
};



