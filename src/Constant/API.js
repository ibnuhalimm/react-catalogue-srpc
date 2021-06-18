import axios from 'axios';

const BASE_URL_API = process.env.REACT_APP_BASE_URL_API;

export const ApiClient = axios.create({
    baseURL: BASE_URL_API,
    withCredentials: true
});

export const CSRFToken = {
    GET: '/sanctum/csrf-cookie'
}

export const Auth = {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login'
};

export const Categories = {
    GET: '/api/product-categories',
    CREATE: '/api/product-categories',
    UPDATE: '/api/product-categories',
    DELETE: '/api/product-categories'
};

export const Products = {
    GET: '/api/products'
}