import { ajax } from 'rxjs/ajax';

export const get = (pathname: string, headers?: object) =>
  ajax.get(process.env.API_URL + pathname, headers);
export const getJSON = (pathname: string, headers?: object) =>
  ajax.getJSON(process.env.API_URL + pathname, headers);

process.env.API_URL =
  'http://ec2co-ecsel-mzwwf8vj5hjb-108490878.ap-northeast-2.elb.amazonaws.com:3000';
