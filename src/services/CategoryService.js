import {
    ApiClient,
    Categories
} from '../constant/API';
import {
    SUCCESS
} from '../constant/StatusCode';
import axios from 'axios';
import AuthTokenService from './AuthTokenService';


class CategoryService {
    static getAllCategories() {
        return ApiClient.get(`${Categories.GET}`, {
                headers: {
                    'Authorization': `${AuthTokenService.BearerToken()}`
                }
            })
            .then(response => {
                let responseData = response.data;
                responseData['code'] = SUCCESS;

                return Promise.resolve(responseData);
            })
            .catch(({ response }) => {
                let responseData = response.data;
                responseData['code'] = response.status;
                // if (response.status === UNAUTHORIZED) {
                //     responseData['code'] = UNAUTHORIZED;

                //     return Promise.resolve(responseData);
                // }

                return Promise.reject(responseData);
            });
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


    static getSingleCategoryWithProducts(id) {
        return axios.get(`${Categories.GET}/${id}/products`)
            .then(responseJson => {
                if (responseJson.data.data) {
                    const responseData = responseJson.data.data;

                    return Promise.resolve({
                        categoryName: responseData.name,
                        products: responseData.products
                    });
                }
                else {
                    return Promise.reject(responseJson.data.message);
                }
            })
            .catch(error => {
                return Promise.reject(error.response.data.message);
            })
    }
}

export default CategoryService;