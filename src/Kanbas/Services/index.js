import axios from "axios";

//axios.defaults.baseURL = "http://localhost:4000/api/";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE;


export default axios;