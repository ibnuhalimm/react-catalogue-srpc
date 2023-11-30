import {
    ApiClient,
    Categories
} from '../Constant/API';
import {
    SUCCESS
} from '../Constant/StatusCode';
import AuthTokenService from './AuthTokenService';


class CategoryService {
    static async getAllCategories() {
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


    static async storeNewCategory(data) {
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


    static async getSingleCategory(id) {
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


    static async updateCategory(id, data) {
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


    static async deleteCategory(id, data) {
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


    static async getSingleCategoryWithProducts(id) {
        return ApiClient.get(`${Categories.GET}/${id}/products`, {
                headers: {
                    'Authorization': `${AuthTokenService.BearerToken()}`
                }
            })
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