import Axios from "axios";
import { useAuthStore } from "../store/auth.store";
export function jwtInterceptor() {
  Axios.defaults.withCredentials = true;
  Axios.defaults.baseURL="http://localhost:8000/api/";
  Axios.defaults.headers['Accept'] = "application/json";
  Axios.defaults.headers['Content-Type'] = "application/json";
  Axios.interceptors.request.use(
    function (config) {
      const store = useAuthStore();
      config.headers.Authorization = `Bearer ${store.token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
}
