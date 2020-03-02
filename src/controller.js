import { renderer } from './view.js';
import { model } from './model.js';
import { helpers } from './DOMHelpers.js';

const controller = (() => {
document.addEventListener('DOMContentLoaded',renderer);

let projectInput = document.createElement('input');
helpers.createSection('div', 'main-content', 'projectAdd', 'projectAdd');
let nodle = document.getElementById('projectAdd');
projectInput.id = 'newProjectName'
nodle.appendChild(projectInput);
helpers.createSection('div', 'main-content', 'projectArea', 'projects')
const newProjectName = document.getElementById('newProjectName');

helpers.createButton('Add project',() => {

  
  helpers.clearSection('projectArea');
  model.createProject(newProjectName.value)
   
    helpers.clearInputText('newProjectName');
    
    const data = model.retrieveProjects();

    data.forEach((e) => {

    helpers.createSection('div', 'projectArea',`project-id${data.indexOf(e)}`, 'x')
    helpers.createButton(e.name, e.retriveToDoLists, `project-id${data.indexOf(e)}`, e.name)
    });
    
    
    }, 'projectAdd', 'hello')











  
  


})();

export { controller }