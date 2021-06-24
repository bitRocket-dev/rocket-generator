/** @format */

import boilerplate from './boilerplate';

const [name] = process.argv.slice(2);
boilerplate(name, (type = 'npm'));
