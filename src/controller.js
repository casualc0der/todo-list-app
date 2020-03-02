import {renderer} from './view.js';
import {model} from './model.js';
import {helpers} from './DOMHelpers.js';

const controller = (() => {
  document.addEventListener('DOMContentLoaded', renderer);

  const newProjectName = document.getElementById('newProjectName');

  helpers.createButton('Add project', () => {
    helpers.clearSection('projectArea');
    model.createProject(newProjectName.value);
    helpers.clearInputText('newProjectName');
    const data = model.retrieveProjects();
    data.forEach((e) => {
      const id = `project-id${data.indexOf(e)}`;
      helpers.createSection('div', 'projectArea', id, 'x');
      helpers.createButton(e.name, () => helpers.renderTodos(e), id, e.name);
    });
  }, 'projectAdd', 'hello');

})();

export {controller};
