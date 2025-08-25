import axios from "axios";

export default axios.create({
    baseURL: "https://my-json-server.typicode.com/codegym-vn/mock-api-books",
    headers: {
        "Content-Type": "application/json",
    },
});
