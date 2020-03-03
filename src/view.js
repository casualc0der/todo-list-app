import {helpers} from './DOMHelpers.js';

const renderer = (() => {
  helpers.createSection('div', 'main-content', 'todoLists', 'todos');
  helpers.createSection('div', 'main-content', 'projects', 'projects');
  helpers.createSection('div', 'main-content', 'projectAdd', 'projectAdd');
  helpers.createSection('div', 'main-content', 'projectArea', 'projects');
  helpers.createSection('div', 'main-content', 'toDoModal', 'modalContent');
  
  const projectInput = document.createElement('input');
  const nodle = document.getElementById('projectAdd');
  nodle.appendChild(projectInput);
  projectInput.id = 'newProjectName';
})();



export {renderer};
