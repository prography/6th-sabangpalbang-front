import { ajax } from 'rxjs/ajax';

interface IHeaders {
  [key: string]: string;
}

export const get = (pathname: string, headers: IHeaders = {}) => {
  const userToken = localStorage.getItem('userToken');

  if(userToken) headers.Authorization = `Bearer ${userToken}`;
  return ajax.get(process.env.API_URL + pathname, headers);
}
export const getJSON = (pathname: string, headers: IHeaders = {}) => {
  const userToken = localStorage.getItem('userToken');

  if(userToken) headers.Authorization = `Bearer ${userToken}`;
  return ajax.getJSON(process.env.API_URL + pathname, headers);
}

process.env.API_URL =
  'http://ec2co-ecsel-mzwwf8vj5hjb-108490878.ap-northeast-2.elb.amazonaws.com:3000';
