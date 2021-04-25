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
}

export default CategoryService;