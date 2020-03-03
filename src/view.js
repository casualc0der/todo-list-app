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
  helpers.createSection('select', 'toDoForm', 'formPriority', 'todoform')
  helpers.createSection('option', 'formPriority', 'highPriority', 'todoform' )
  helpers.createSection('option', 'formPriority', 'normalPriority', 'todoform' )
  helpers.createSection('option', 'formPriority', 'lowPriority', 'todoform' )
  helpers.createButton('Update', helpers.tester, 'toDoModalContent', 'formSubmit')
  const projectInput = document.createElement('input');
  const nodle = document.getElementById('projectAdd');
  document.getElementById('formDueDate').type = 'date';
  const highPriority = document.getElementById('highPriority');
  highPriority.value = 'High';
  highPriority.textContent = 'High';
  const normalPriority = document.getElementById('normalPriority');
  normalPriority.value = 'Normal';
  normalPriority.textContent = 'Normal';
  const lowPriority = document.getElementById('lowPriority');
  lowPriority.value = 'Low';
  lowPriority.textContent = 'Low';
  nodle.appendChild(projectInput);
  projectInput.id = 'newProjectName';
})();



export {renderer};
