import axios from "axios";

//axios.defaults.baseURL = "http://localhost:4000";

axios.defaults.baseURL = "https://kanbas-node-server-app-db.onrender.com";
//axios.defaults.baseURL = process.env.REACT_APP_API_BASE;

const request = axios.create({
    withCredentials: true,
});

export default request;