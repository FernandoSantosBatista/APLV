import axios from "axios";

const api = axios.create({
    baseURL: 'https://flaskapiaplv.herokuapp.com'
});

export default api;