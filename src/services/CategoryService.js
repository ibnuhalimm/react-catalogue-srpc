import { Categories } from '../constant/API';
import axios from 'axios';

class CategoryService {
    static getAllCategories() {
        return fetch(`${Categories.GET}`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.data) {
                    return Promise.resolve(responseJson.data);
                }
                else {
                    return Promise.reject(`Something went wrong`);
                }
            })
    }


    static storeNewCategory(data) {
        return axios.post(`${Categories.CREATE}`, data)
        .then(responseJson => {
            return Promise.resolve('success');
        })
        .catch(error => {
            return Promise.reject(error.response.data.message);
        });
    }


    static getSingleCategory(id) {
        return axios.get(`${Categories.GET}/${id}`)
            .then(responseJson => {
                if (responseJson.data.data) {
                    return Promise.resolve(responseJson.data.data);
                }
                else {
                    return Promise.reject(responseJson.data.message);
                }
            })
            .catch(error => {
                return Promise.reject(error.response.data.message);
            })
    }


    static updateCategory(id, data) {
        return axios.put(`${Categories.CREATE}/${id}`, data)
        .then(responseJson => {
            return Promise.resolve('success');
        })
        .catch(error => {
            return Promise.reject(error.response.data.message);
        });
    }


    static deleteCategory(id, data) {
        return axios.delete(`${Categories.CREATE}/${id}`)
        .then(responseJson => {
            return Promise.resolve('success');
        })
        .catch(error => {
            return Promise.reject(error.response.data.message);
        });
    }
}

export default CategoryService;