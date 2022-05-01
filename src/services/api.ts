import axios, { AxiosDefaults, AxiosInstance, HeadersDefaults } from 'axios';

const accessToken = localStorage.getItem('@sense:accessToken');

interface HeadersProps extends HeadersDefaults {
  Authorization?: string;
}
interface DefaultsProps extends AxiosDefaults {
  headers: HeadersProps;
}
interface AxiosProps extends AxiosInstance {
  [x: string]: any;
  defaults: DefaultsProps;
}

export const api: AxiosProps = axios.create({
  baseURL: 'https://nexten-sense-api.herokuapp.com/api',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
