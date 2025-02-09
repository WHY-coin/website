import axios from 'axios';


export const useApi = () => {
  const baseURL = 'https://mempad-domain.blum.codes/api/v1';

  return axios.create({
    baseURL
  });
}
