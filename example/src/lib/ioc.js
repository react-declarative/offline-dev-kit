import { inject } from 'react-declarative';

import TYPES from './types.js';

import "./config.js";

export const ioc = {
    alertService: inject(TYPES.alertService),
};

window.ioc = ioc;

export default ioc;
