import { provide } from 'react-declarative';

import AlertService from './services/AlertService.js';

import TYPES from './types.js';

provide(TYPES.alertService, () => new AlertService());
