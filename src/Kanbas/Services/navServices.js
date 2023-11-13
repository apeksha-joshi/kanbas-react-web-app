import httpClient from './index.js';

export const getAllKanbasItems = async () => {
    try{
        const {data} = await httpClient.get("navItems/kanbas");
        return data;
    }catch(error){
        console.log(error);
    }
}

export const getAllCourseItems = async () => {
    try{
        const {data} = await httpClient.get("navItems/course");
        return data;
    }catch(error){
        console.log(error);
    }
}