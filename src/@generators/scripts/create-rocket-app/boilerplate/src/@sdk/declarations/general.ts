/** @format */

import packageJSON from '../../../package.json';

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const NAME_APP = packageJSON.name;
