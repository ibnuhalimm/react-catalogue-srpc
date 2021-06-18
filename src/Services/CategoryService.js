import {
    ApiClient,
    Categories
} from '../Constant/API';
import {
    SUCCESS
} from '../Constant/StatusCode';
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

                return Promise.reject(responseData);
            });
    }


    static storeNewCategory(data) {
        return ApiClient.post(`${Categories.CREATE}`, data, {
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

                return Promise.reject(responseData);
            });
    }


    static getSingleCategory(id) {
        return ApiClient.get(`${Categories.GET}/${id}`, {
                headers: {
                    'Authorization': `${AuthTokenService.BearerToken()}`
                }
            })
            .then(response => {
                let responseData = response.data;
                responseData['code'] = response.status;

                return Promise.resolve(responseData);
            })
            .catch(({ response }) => {
                let responseData = response.data;
                responseData['code'] = response.status;

                return Promise.reject(responseData);
            })
    }


    static updateCategory(id, data) {
        return ApiClient.put(`${Categories.CREATE}/${id}`, data, {
                headers: {
                    'Authorization': `${AuthTokenService.BearerToken()}`
                }
            })
            .then(response => {
                let responseData = response.data;
                responseData['code'] = response.status;

                return Promise.resolve(responseData);
            })
            .catch(({ response }) => {
                let responseData = response.data;
                responseData['code'] = response.status;

                return Promise.reject(responseData);
            });
    }


    static deleteCategory(id, data) {
        return ApiClient.delete(`${Categories.CREATE}/${id}`, {
                headers: {
                    'Authorization': `${AuthTokenService.BearerToken()}`
                }
            })
            .then(response => {
                let responseData = response.data;
                responseData['code'] = response.status;

                return Promise.resolve(responseData);
            })
            .catch(({ response }) => {
                let responseData = response.data;
                responseData['code'] = response.status;

                return Promise.reject(responseData);
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