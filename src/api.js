import axios from 'axios';
import {ActionCreator} from './reducer';


const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error.response.status === 403) {
      dispatch(ActionCreator.requireAuthorization(true));
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};


export default createAPI;
