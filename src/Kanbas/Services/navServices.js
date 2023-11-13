import httpClient from './index.js';

export const getAllKanbasItems = async () => {
    try{
        const {data} = await httpClient.get("/api/navItems/kanbas");
        return data;
    }catch(error){
        console.log(error);
    }
}

export const getAllCourseItems = async () => {
    try{
        const {data} = await httpClient.get("/api/navItems/course");
        return data;
    }catch(error){
        console.log(error);
    }
}