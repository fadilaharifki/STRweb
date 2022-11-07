import myAxios from './index.js';

export default {
  getProducts() {
    return myAxios.get('/products');
  },
};
