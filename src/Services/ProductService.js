import { Products } from '../Constant/API';
import axios from 'axios';

class ProductService {
    static getSingleProduct(id) {
        return axios.get(`${Products.GET}/${id}`)
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