import {controller} from './controller.js';
import "./styles.css";
import { model } from './model.js';
import {helpers} from './DOMHelpers.js'

if(controller.storageAvailable('localStorage')) {
    console.log('Yes')
    if('localProjects' in localStorage) {
        const data = JSON.parse(localStorage.getItem('localProjects'));
        data.forEach((e) => {
            model.createProject(e.name)
            const id = `${data.indexOf(e)}`;
            helpers.createSection('div', 'projectArea', `project-${id}`, 'x');
            helpers.createButton(e.name, () => helpers.renderTodos(data.indexOf(e)), 'projectArea', e.name);
            
          });
        
    const goob = Object.entries(localStorage);

    
        

        
    }
}
else {
    console.log('No')
}

