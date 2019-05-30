import { isEmpty } from 'validator';

export const toString = json => JSON.stringify(json);
export const toJson = str => JSON.parse(str);
export const isStringEmpty = str => !str || isEmpty(`${str}`);
