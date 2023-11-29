import axios from "axios";

//axios.defaults.baseURL = "http://localhost:4000";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE;

//axios.defaults.baseURL = "https://kanbas-node-server-app-viv0.onrender.com";

//axios.defaults.baseURL = "https://kanbas-node-server-app-db.onrender.com";

export default axios;