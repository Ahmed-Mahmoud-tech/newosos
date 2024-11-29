import axios from 'axios';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

const noAuthRoutes = ['identity/sadmin/v1/Auth/Signin'];
const roles = ['', 'superAdmin'];

const axiosInterceptor = () => {
  const axiosObject = {
    baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  };

  const mainInstance = axios.create(axiosObject);
  mainInstance.interceptors.request.use(
    function (config) {
      if (!noAuthRoutes.includes(config.url || '')) {
        const cookieToken = Cookies.get('token');
        config.headers.Authorization = cookieToken
          ? `Bearer ${cookieToken}`
          : '';
      } else {
        // config.headers['Client-Id'] = Client_id
      }
      return config;
    },
    (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  );

  mainInstance.interceptors.response.use(
    async (res) => {
      res.data?.data?.token?.accessToken &&
        Cookies.set('token', res.data?.data?.token?.accessToken);

      if (res.data?.data?.userAccount?.email) {
        Cookies.set(
          'userData',
          JSON.stringify({
            email: res.data?.data?.userAccount?.email,
            role: roles[res.data?.data?.userAccount?.userType],
          })
        );
      }
      return res;
    },
    async (err) => {
      if (err?.response?.status === 401) {
        Cookies.remove('userData');
        Cookies.remove('token');
        redirect('/');
      }

      if (err?.response?.data?.metadata) {
        // when the Access Token is expired
        (err.response.data.metadata.errors as { message: string }[]).map(
          (element) => {
            toast.error(element.message, {
              position: 'top-center',
            });
          }
        );
      }
    }
  );
  return mainInstance;
};

export default axiosInterceptor;
