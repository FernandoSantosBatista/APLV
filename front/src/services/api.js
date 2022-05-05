import axios from "axios";

const api = axios.create({
    baseURL: 'http://djangorestapi2.herokuapp.com'
});

export default api;