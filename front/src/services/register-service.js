import api from './api';

function getAll(){
    return new Promise((resolve, reject) => {
        return api.get('/cadastro')
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function getById(id){
    return new Promise((resolve, reject) => {
        return api.get(`/cadastro/${id}/`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function register(register){
    return new Promise((resolve, reject) => {
        return api.post(`/cadastro`, register)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function update(register){
    return new Promise((resolve, reject) => {
        return api.put(`/cadastro/${register.id}/`, register)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function remove(id){
    return new Promise((resolve, reject) => {
        return api.delete(`/cadastro/${id}/`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}


export default {
    getAll,
    getById,
    register,
    update,
    remove
}