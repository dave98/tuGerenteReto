import Axios from "axios";

export default Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 6000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
})