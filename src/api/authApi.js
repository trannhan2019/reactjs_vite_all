import axiosClient from './axiosClient';

const url_csrf = '/sanctum/csrf-cookie';

const authApi = {
  register(data) {
    const url = '/register';
    return axiosClient.post(url, data);
  },

  login(data) {
    const url = '/login';
    return axiosClient.get(url_csrf).then((res) => {
      return axiosClient.post(url, data);
    });
  },

  logout() {
    const url = '/api/logout';
    return axiosClient.post(url);
  },
};

export default authApi;
