const BASE_URL_API = process.env.REACT_APP_BASE_URL_API;

export const Categories = {
    GET: BASE_URL_API + '/api/product-categories',
    CREATE: BASE_URL_API + '/api/product-categories',
    UPDATE: BASE_URL_API + '/api/product-categories',
    DELETE: BASE_URL_API + '/api/product-categories'
};


export const Products = {
    GET: BASE_URL_API + '/api/products'
}