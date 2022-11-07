import myAxios from './index.js';

export default {
  getLanguage() {
    return myAxios.get('/english_copy');
  },
};
