import { Categories } from '../constant/API';

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
}

export default CategoryService;