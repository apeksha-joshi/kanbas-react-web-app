import httpClient from './index.js'

const USERS_API = `/api/users`

export const signin = async (credentials) => {
    // try{
        const response = await httpClient.post(`${USERS_API}/signin`, credentials);
        return response.data;
    // }catch(error){
    //     throw new Error("Internal server error");
    // }
}

export const getAccount = async () => {
    const response = await httpClient.post(`${USERS_API}/account`);
    return response.data;
}

export const updateUserDB = async (user) => {
    const response = await httpClient.put(`${USERS_API}/${user._id}`, user);
    return response.data;
}

export const findAllUsers = async () => {
    const response = await httpClient.get(`${USERS_API}`);
    return response.data;
}

export const createUser = async (user) => {
    const response = await httpClient.post(`${USERS_API}`, user);
    if(response.status === 400){
        return response.status;
    }
    return response.data;
}

export const findUserById = async (id) => {
    const response = await httpClient.get(`${USERS_API}/${id}`);
    return response.data;
}

export const deleteUserDB = async (user) => {
    const response = await httpClient.delete(`${USERS_API}/${user._id}`);
    return response.data;
}

export const signup = async (credentials) => {
    const response = await httpClient.post(`${USERS_API}/signup`, credentials);
    return response.data;
}

export const signout = async () => {
    const response = await httpClient.post(`${USERS_API}/signout`);
    return response.data;
}