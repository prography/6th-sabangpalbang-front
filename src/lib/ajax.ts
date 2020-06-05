import { ajax } from 'rxjs/ajax';

console.log(process.env.API_URL);

export const get = (pathname: string, headers?: object) => ajax.get(process.env.API_URL + pathname, headers);
export const getJSON = (pathname: string, headers?: object) => ajax.getJSON(process.env.API_URL + pathname, headers);