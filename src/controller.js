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
      const id = `${data.indexOf(e)}`;
      helpers.createSection('div', 'projectArea', `project-${id}`, 'x');
      helpers.createButton(e.name, () => helpers.renderTodos(data.indexOf(e)), 'projectArea', e.name);
      
    });
  }, 'projectAdd', 'buttons');
  helpers.createNewTodo();

  function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

return { storageAvailable }


  

})();

export {controller};
