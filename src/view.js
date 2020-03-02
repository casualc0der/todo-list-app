import {helpers} from './DOMHelpers.js';

const renderer = (() => {
  helpers.createSection('div', 'main-content', 'projects', 'projects');
})();

export {renderer};
