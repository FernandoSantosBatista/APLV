import axios from "axios";

const api = axios.create({
    baseURL: 'https://djangorestapi2.herokuapp.com'
});

export default api;