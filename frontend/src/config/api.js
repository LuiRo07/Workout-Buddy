const API_BASE_URL = process.env.NODE_ENV === 'production'? process.env.REACT_APP_PRODUCTION_BASE_URL: process.env.REACT_APP_DEVELOPMENT_BASE_URL;

export default API_BASE_URL;
