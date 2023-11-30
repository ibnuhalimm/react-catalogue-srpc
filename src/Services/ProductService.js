import { ApiClient, Products } from '../Constant/API';
import AuthTokenService from './AuthTokenService';


class ProductService {
    static async getSingleProduct(id) {
        return ApiClient.get(`${Products.GET}/${id}`, {
                headers: {
                    'Authorization': `${AuthTokenService.BearerToken()}`
                }
            })
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
}

export default ProductService;