import { competition } from './competition';
import { events } from './events';
import { workshops } from './workshops';
const imgPath = '../assets/images';
const domain = import.meta.env.VITE_DOMAIN_PATH || null;

export { competition, events, workshops, imgPath, domain };
