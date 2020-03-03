import {helpers} from './DOMHelpers.js';

const renderer = (() => {
  helpers.createSection('div', 'main-content', 'todoLists', 'todos');
  helpers.createSection('div', 'main-content', 'projects', 'projects');
  helpers.createSection('div', 'main-content', 'projectAdd', 'projectAdd');
  helpers.createSection('div', 'main-content', 'projectArea', 'projects');
  helpers.createSection('div', 'main-content', 'toDoModal', 'modal');
  helpers.createSection('div','toDoModal', 'toDoModalContent', 'modal-content')
  helpers.createSection('span', 'toDoModalContent', 'todoClose', 'close');
  helpers.addInnerHTML('todoClose', '&times;');
  helpers.createSection('div', 'toDoModalContent', 'toDoForm', 'form')
  helpers.createSection('input', 'toDoForm', 'formTitle', 'todoform')
  helpers.createSection('input', 'toDoForm', 'formDescription', 'todoform')
  helpers.createSection('input', 'toDoForm', 'formDueDate', 'todoform')
  helpers.createSection('input', 'toDoForm', 'formPriority', 'todoform')
  helpers.createButton('Update', helpers.tester, 'toDoModalContent', 'formSubmit')
  const projectInput = document.createElement('input');
  const nodle = document.getElementById('projectAdd');
  const dueDateCalendar = document.getElementById('formDueDate');
  dueDateCalendar.type = 'date';
  nodle.appendChild(projectInput);
  projectInput.id = 'newProjectName';
})();



export {renderer};
