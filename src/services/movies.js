import proxyRequest from 'utils/request';
import {
  baseUrl
} from '@/utils/baseServer';

export const getItemByType = ({
  type,
  start = 0,
  count = 20
}) => proxyRequest.get(`${baseUrl}/movie/${type}?start=${start}&count=${count}`);
export const getMovieById = id => proxyRequest.get(`${baseUrl}/movie/subject/${id}`);
export const getSearchMovies = ({
  query,
  start = 0
}) => proxyRequest.get(encodeURI(`${baseUrl}/movie/search?q=${query}&start=${start}`));