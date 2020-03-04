/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOMHelpers.js":
/*!***************************!*\
  !*** ./src/DOMHelpers.js ***!
  \***************************/
/*! exports provided: helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helpers", function() { return helpers; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");


const helpers = (()=> {
  const createButton = (text, func, attachId, buttonId) => {
    const node = document.getElementById(`${attachId}`);
    const button = document.createElement('button');
    button.classList.add('buttons');
    button.id = buttonId;
    button.innerHTML = text;
    button.addEventListener('click', () => func());
    node.appendChild(button);
  };

  const createBlankButton = (text, attachId, buttonId) => {
    const node = document.getElementById(`${attachId}`);
    const button = document.createElement('button');
    button.classList.add('buttons');
    button.id = buttonId;
    button.innerHTML = text
    node.appendChild(button);

  }

  const createSection = (sectionType, attachId, sectionId, sectionClass) => {
    const node = document.getElementById(`${attachId}`);
    const section = document.createElement(`${sectionType}`);
    section.id = sectionId;
    section.classList.add(`${sectionClass}`);
    node.appendChild(section);
  };
  const addInnerHTML = (sectionId, text) => {
    const node = document.getElementById(`${sectionId}`);
    node.innerHTML = text;
  };

  const clearInputText = (inputId) => {
    const node = document.getElementById(inputId);
    node.innerText = '';
    node.value = '';
  };

  const clearSection = (sectionId) => {
    const node = document.getElementById(sectionId);
    while (node.firstChild) {
      node.removeChild(node.lastChild);
    }
  };

  const renderTodos = (i) => {
    const node = document.getElementById('todoLists');
    const projectArray = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects();
    const currentProject = projectArray[i]
  
    clearSection(node.id);
    const toDoLists = currentProject.retriveToDoLists();
    createSection('div','todoLists', `todo-${i}`, 'todoCard');
    const list = document.getElementById(`todo-${i}`);
    node.appendChild(list);
   
    
    toDoLists.forEach((e) => {
      const todoListPosition = toDoLists.indexOf(e);
      createSection('div',`todo-${i}`,`list-item${todoListPosition}`, 'listItem')
      const listNode = document.getElementById(`list-item${todoListPosition}`)
      listNode.innerHTML = e.title;
      listNode.addEventListener('click', () => todoDetails(i,currentProject.name,todoListPosition));
      

    })
  
  }

  const createNewTodo = () => {
    helpers.createSection('input', 'projects', 'title', 'todos');
    helpers.createButton('Add Todo', helpers.testFunc , 'projects', 'todos' )

  }

  const modalMenu = () => {

    const modal = document.getElementById('toDoModal');
    const span = document.getElementById('todoClose');
    span.onclick = () => modal.style.display ='none';
    window.onclick = (event) => {
      if(event.target == modal) {
        modal.style.display = 'none';
      }
    }
    modal.style.display = 'block';

  }

  const todoDetails = (i, p, x) => {
    modalMenu();
  

    const modalForm = document.getElementsByClassName('form');
  
    modalForm[0].id = `${i}--${x}`;
    const node = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x]
    const todoTitle = node.title
    const todoDescription = node.description
    const todoDueDate = node.dueDate 
    const todoPiority = node.priority
    const titleNode = document.getElementById('formTitle');
    const descriptionNode = document.getElementById('formDescription');
    const dueDateNode = document.getElementById('formDueDate');
    const priorityNode = document.getElementById('formPriority');
    clearInputText(titleNode.id)
    clearInputText(descriptionNode.id)
    clearInputText(dueDateNode.id)
    // clearInputText(priorityNode.id)

    todoTitle !== undefined ? titleNode.value = todoTitle : titleNode.placeholder = 'Title';
    todoDescription !== undefined ? descriptionNode.value = todoDescription: descriptionNode.placeholder = 'Add Description';
    todoDueDate !== undefined ? dueDateNode.value = todoDueDate: dueDateNode.placeholder = 'Due Date';
    todoPiority !== undefined ? priorityNode.value = todoPiority: priorityNode.value = 'Priority';

    
  }
  const tester = () => {
   
    const modalForm = document.getElementsByClassName('form');
    const modalString = modalForm[0].id
    const i = modalString.slice(0, modalString.indexOf('-'))
    const x = modalString.slice(modalString.lastIndexOf('-')+1)
    const titleNode = document.getElementById('formTitle');
    const descriptionNode = document.getElementById('formDescription');
    const dueDateNode = document.getElementById('formDueDate');
    const priorityNode = document.getElementById('formPriority');
    const node = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x];
    node.title = titleNode.value
    node.description = descriptionNode.value 
    node.dueDate = dueDateNode.value
    node.priority = priorityNode.value 
    
  
    const modal = document.getElementById('toDoModal');
    modal.style.display = 'none';

  }


  const testFunc = () => {
  
    const node = document.getElementsByClassName('todoCard')
    if(!node[0]) { return } //add error message
    const todoTitle = document.getElementById('title');
    const currentTodo = node[0].id;
    const todoID = parseInt(currentTodo.slice(5))
    const projects = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()
    
    projects.forEach((e) => { 
      const index = projects.indexOf(e)
      if(todoID === index) {
        if(!todoTitle.value) { return }; //add error message
          e.addToDoList(todoTitle.value);
          renderTodos(todoID);
          const hello = e.retriveToDoLists()
          const derp = JSON.parse(localStorage.getItem(['localProjects']))
          const nerp = JSON.parse(localStorage.getItem(['localProjects']))
          localStorage.setItem([`todos-${index}`], JSON.stringify(hello))
         const goob = Object.entries(localStorage)
         console.log(goob)
          }
        })

  helpers.clearInputText('title');

  }


  return {
    createButton,
    createBlankButton,
    createSection,
    addInnerHTML,
    clearInputText,
    clearSection, 
    renderTodos,
    createNewTodo,
    testFunc,
    tester,
  };
})();




/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controller", function() { return controller; });
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMHelpers.js */ "./src/DOMHelpers.js");




const controller = (() => {
  document.addEventListener('DOMContentLoaded', _view_js__WEBPACK_IMPORTED_MODULE_0__["renderer"]);

  const newProjectName = document.getElementById('newProjectName');

  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__["helpers"].createButton('Add project', () => {
    _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__["helpers"].clearSection('projectArea');
    _model_js__WEBPACK_IMPORTED_MODULE_1__["model"].createProject(newProjectName.value);
    "localProjects" in localStorage ? console.log('yes!'): console.log('no!')
    const localProjects = _model_js__WEBPACK_IMPORTED_MODULE_1__["model"].retrieveProjects();
    localStorage.setItem('localProjects', JSON.stringify(localProjects));
    _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__["helpers"].clearInputText('newProjectName');
    const data = JSON.parse(localStorage.getItem('localProjects'));
    console.log(data)
    console.log(localStorage)
    // const data = model.retrieveProjects();
    data.forEach((e) => {
      const id = `${data.indexOf(e)}`;
      _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__["helpers"].createSection('div', 'projectArea', `project-${id}`, 'x');
      _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__["helpers"].createButton(e.name, () => _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__["helpers"].renderTodos(data.indexOf(e)), 'projectArea', e.name);
      
    });
  }, 'projectAdd', 'buttons');
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__["helpers"].createNewTodo();

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




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMHelpers.js */ "./src/DOMHelpers.js");





if(_controller_js__WEBPACK_IMPORTED_MODULE_0__["controller"].storageAvailable('localStorage')) {
    console.log('Yes')
    if('localProjects' in localStorage) {
        const data = JSON.parse(localStorage.getItem('localProjects'));
        data.forEach((e) => {
            _model_js__WEBPACK_IMPORTED_MODULE_2__["model"].createProject(e.name)
            const id = `${data.indexOf(e)}`;
            _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__["helpers"].createSection('div', 'projectArea', `project-${id}`, 'x');
            _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__["helpers"].createButton(e.name, () => _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__["helpers"].renderTodos(data.indexOf(e)), 'projectArea', e.name);
            
          });
        
    const goob = Object.entries(localStorage);

    
        

        
    }
}
else {
    console.log('No')
}



/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "model", function() { return model; });
const model = (() => {
  const project = (name) => {
    const todoLists = [];
    const addToDoList = (title, description, dueDate, priority) => {
      todoLists.push({title, description, dueDate, priority});
    };
    const retriveToDoLists = () => todoLists;

    return {name, retriveToDoLists, addToDoList};
  };

  const createProject = (name) => {
    if (!name) {
      return;
    }
    const newProject = project(name);
    projectLists.push(newProject);
  };
  const projectLists = [];
  const retrieveProjects = () => projectLists;

  return {createProject, retrieveProjects};
})();




/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderer", function() { return renderer; });
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMHelpers.js */ "./src/DOMHelpers.js");


const renderer = (() => {
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('div', 'main-content', 'todoLists', 'todos');
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('div', 'main-content', 'projects', 'projects');
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('div', 'main-content', 'projectAdd', 'projectAdd');
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('div', 'main-content', 'projectArea', 'projects');
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('div', 'main-content', 'toDoModal', 'modal');
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('div','toDoModal', 'toDoModalContent', 'modal-content')
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('span', 'toDoModalContent', 'todoClose', 'close');
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].addInnerHTML('todoClose', '&times;');
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('div', 'toDoModalContent', 'toDoForm', 'form')
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('input', 'toDoForm', 'formTitle', 'todoform')
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('input', 'toDoForm', 'formDescription', 'todoform')
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('input', 'toDoForm', 'formDueDate', 'todoform')
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('select', 'toDoForm', 'formPriority', 'todoform')
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('option', 'formPriority', 'highPriority', 'todoform' )
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('option', 'formPriority', 'normalPriority', 'todoform' )
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('option', 'formPriority', 'lowPriority', 'todoform' )
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createButton('Update', _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].tester, 'toDoModalContent', 'formSubmit')
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






/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RPTUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFnQzs7QUFFaEM7QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNB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QUNWLENBQUM7O0FBRWM7Ozs7Ozs7Ozs7OztBQ3hCZix1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQXdDOztBQUV4QztBQUNBLEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPLG1DQUFtQztBQUM1QyxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU8sd0JBQXdCLHNEQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSWlCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcblxuY29uc3QgaGVscGVycyA9ICgoKT0+IHtcbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gKHRleHQsIGZ1bmMsIGF0dGFjaElkLCBidXR0b25JZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthdHRhY2hJZH1gKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuICAgIGJ1dHRvbi5pZCA9IGJ1dHRvbklkO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGZ1bmMoKSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJsYW5rQnV0dG9uID0gKHRleHQsIGF0dGFjaElkLCBidXR0b25JZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthdHRhY2hJZH1gKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuICAgIGJ1dHRvbi5pZCA9IGJ1dHRvbklkO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0ZXh0XG4gICAgbm9kZS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIH1cblxuICBjb25zdCBjcmVhdGVTZWN0aW9uID0gKHNlY3Rpb25UeXBlLCBhdHRhY2hJZCwgc2VjdGlvbklkLCBzZWN0aW9uQ2xhc3MpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXR0YWNoSWR9YCk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7c2VjdGlvblR5cGV9YCk7XG4gICAgc2VjdGlvbi5pZCA9IHNlY3Rpb25JZDtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoYCR7c2VjdGlvbkNsYXNzfWApO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIH07XG4gIGNvbnN0IGFkZElubmVySFRNTCA9IChzZWN0aW9uSWQsIHRleHQpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c2VjdGlvbklkfWApO1xuICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dDtcbiAgfTtcblxuICBjb25zdCBjbGVhcklucHV0VGV4dCA9IChpbnB1dElkKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xuICAgIG5vZGUuaW5uZXJUZXh0ID0gJyc7XG4gICAgbm9kZS52YWx1ZSA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU2VjdGlvbiA9IChzZWN0aW9uSWQpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklkKTtcbiAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVG9kb3MgPSAoaSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0xpc3RzJyk7XG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gbW9kZWwucmV0cmlldmVQcm9qZWN0cygpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2ldXG4gIFxuICAgIGNsZWFyU2VjdGlvbihub2RlLmlkKTtcbiAgICBjb25zdCB0b0RvTGlzdHMgPSBjdXJyZW50UHJvamVjdC5yZXRyaXZlVG9Eb0xpc3RzKCk7XG4gICAgY3JlYXRlU2VjdGlvbignZGl2JywndG9kb0xpc3RzJywgYHRvZG8tJHtpfWAsICd0b2RvQ2FyZCcpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9kby0ke2l9YCk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChsaXN0KTtcbiAgIFxuICAgIFxuICAgIHRvRG9MaXN0cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBjb25zdCB0b2RvTGlzdFBvc2l0aW9uID0gdG9Eb0xpc3RzLmluZGV4T2YoZSk7XG4gICAgICBjcmVhdGVTZWN0aW9uKCdkaXYnLGB0b2RvLSR7aX1gLGBsaXN0LWl0ZW0ke3RvZG9MaXN0UG9zaXRpb259YCwgJ2xpc3RJdGVtJylcbiAgICAgIGNvbnN0IGxpc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpc3QtaXRlbSR7dG9kb0xpc3RQb3NpdGlvbn1gKVxuICAgICAgbGlzdE5vZGUuaW5uZXJIVE1MID0gZS50aXRsZTtcbiAgICAgIGxpc3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9kb0RldGFpbHMoaSxjdXJyZW50UHJvamVjdC5uYW1lLHRvZG9MaXN0UG9zaXRpb24pKTtcbiAgICAgIFxuXG4gICAgfSlcbiAgXG4gIH1cblxuICBjb25zdCBjcmVhdGVOZXdUb2RvID0gKCkgPT4ge1xuICAgIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignaW5wdXQnLCAncHJvamVjdHMnLCAndGl0bGUnLCAndG9kb3MnKTtcbiAgICBoZWxwZXJzLmNyZWF0ZUJ1dHRvbignQWRkIFRvZG8nLCBoZWxwZXJzLnRlc3RGdW5jICwgJ3Byb2plY3RzJywgJ3RvZG9zJyApXG5cbiAgfVxuXG4gIGNvbnN0IG1vZGFsTWVudSA9ICgpID0+IHtcblxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Nb2RhbCcpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Nsb3NlJyk7XG4gICAgc3Bhbi5vbmNsaWNrID0gKCkgPT4gbW9kYWwuc3R5bGUuZGlzcGxheSA9J25vbmUnO1xuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZihldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgfVxuXG4gIGNvbnN0IHRvZG9EZXRhaWxzID0gKGksIHAsIHgpID0+IHtcbiAgICBtb2RhbE1lbnUoKTtcbiAgXG5cbiAgICBjb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtJyk7XG4gIFxuICAgIG1vZGFsRm9ybVswXS5pZCA9IGAke2l9LS0ke3h9YDtcbiAgICBjb25zdCBub2RlID0gbW9kZWwucmV0cmlldmVQcm9qZWN0cygpW2ldLnJldHJpdmVUb0RvTGlzdHMoKVt4XVxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IG5vZGUudGl0bGVcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBub2RlLmRlc2NyaXB0aW9uXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBub2RlLmR1ZURhdGUgXG4gICAgY29uc3QgdG9kb1Bpb3JpdHkgPSBub2RlLnByaW9yaXR5XG4gICAgY29uc3QgdGl0bGVOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UaXRsZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkdWVEYXRlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRHVlRGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtUHJpb3JpdHknKTtcbiAgICBjbGVhcklucHV0VGV4dCh0aXRsZU5vZGUuaWQpXG4gICAgY2xlYXJJbnB1dFRleHQoZGVzY3JpcHRpb25Ob2RlLmlkKVxuICAgIGNsZWFySW5wdXRUZXh0KGR1ZURhdGVOb2RlLmlkKVxuICAgIC8vIGNsZWFySW5wdXRUZXh0KHByaW9yaXR5Tm9kZS5pZClcblxuICAgIHRvZG9UaXRsZSAhPT0gdW5kZWZpbmVkID8gdGl0bGVOb2RlLnZhbHVlID0gdG9kb1RpdGxlIDogdGl0bGVOb2RlLnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcbiAgICB0b2RvRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IGRlc2NyaXB0aW9uTm9kZS52YWx1ZSA9IHRvZG9EZXNjcmlwdGlvbjogZGVzY3JpcHRpb25Ob2RlLnBsYWNlaG9sZGVyID0gJ0FkZCBEZXNjcmlwdGlvbic7XG4gICAgdG9kb0R1ZURhdGUgIT09IHVuZGVmaW5lZCA/IGR1ZURhdGVOb2RlLnZhbHVlID0gdG9kb0R1ZURhdGU6IGR1ZURhdGVOb2RlLnBsYWNlaG9sZGVyID0gJ0R1ZSBEYXRlJztcbiAgICB0b2RvUGlvcml0eSAhPT0gdW5kZWZpbmVkID8gcHJpb3JpdHlOb2RlLnZhbHVlID0gdG9kb1Bpb3JpdHk6IHByaW9yaXR5Tm9kZS52YWx1ZSA9ICdQcmlvcml0eSc7XG5cbiAgICBcbiAgfVxuICBjb25zdCB0ZXN0ZXIgPSAoKSA9PiB7XG4gICBcbiAgICBjb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtJyk7XG4gICAgY29uc3QgbW9kYWxTdHJpbmcgPSBtb2RhbEZvcm1bMF0uaWRcbiAgICBjb25zdCBpID0gbW9kYWxTdHJpbmcuc2xpY2UoMCwgbW9kYWxTdHJpbmcuaW5kZXhPZignLScpKVxuICAgIGNvbnN0IHggPSBtb2RhbFN0cmluZy5zbGljZShtb2RhbFN0cmluZy5sYXN0SW5kZXhPZignLScpKzEpXG4gICAgY29uc3QgdGl0bGVOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UaXRsZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkdWVEYXRlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRHVlRGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtUHJpb3JpdHknKTtcbiAgICBjb25zdCBub2RlID0gbW9kZWwucmV0cmlldmVQcm9qZWN0cygpW2ldLnJldHJpdmVUb0RvTGlzdHMoKVt4XTtcbiAgICBub2RlLnRpdGxlID0gdGl0bGVOb2RlLnZhbHVlXG4gICAgbm9kZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uTm9kZS52YWx1ZSBcbiAgICBub2RlLmR1ZURhdGUgPSBkdWVEYXRlTm9kZS52YWx1ZVxuICAgIG5vZGUucHJpb3JpdHkgPSBwcmlvcml0eU5vZGUudmFsdWUgXG4gICAgXG4gIFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Nb2RhbCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgfVxuXG5cbiAgY29uc3QgdGVzdEZ1bmMgPSAoKSA9PiB7XG4gIFxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvQ2FyZCcpXG4gICAgaWYoIW5vZGVbMF0pIHsgcmV0dXJuIH0gLy9hZGQgZXJyb3IgbWVzc2FnZVxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gbm9kZVswXS5pZDtcbiAgICBjb25zdCB0b2RvSUQgPSBwYXJzZUludChjdXJyZW50VG9kby5zbGljZSg1KSlcbiAgICBjb25zdCBwcm9qZWN0cyA9IG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKVxuICAgIFxuICAgIHByb2plY3RzLmZvckVhY2goKGUpID0+IHsgXG4gICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YoZSlcbiAgICAgIGlmKHRvZG9JRCA9PT0gaW5kZXgpIHtcbiAgICAgICAgaWYoIXRvZG9UaXRsZS52YWx1ZSkgeyByZXR1cm4gfTsgLy9hZGQgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgIGUuYWRkVG9Eb0xpc3QodG9kb1RpdGxlLnZhbHVlKTtcbiAgICAgICAgICByZW5kZXJUb2Rvcyh0b2RvSUQpO1xuICAgICAgICAgIGNvbnN0IGhlbGxvID0gZS5yZXRyaXZlVG9Eb0xpc3RzKClcbiAgICAgICAgICBjb25zdCBkZXJwID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShbJ2xvY2FsUHJvamVjdHMnXSkpXG4gICAgICAgICAgY29uc3QgbmVycCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oWydsb2NhbFByb2plY3RzJ10pKVxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFtgdG9kb3MtJHtpbmRleH1gXSwgSlNPTi5zdHJpbmdpZnkoaGVsbG8pKVxuICAgICAgICAgY29uc3QgZ29vYiA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSlcbiAgICAgICAgIGNvbnNvbGUubG9nKGdvb2IpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gIGhlbHBlcnMuY2xlYXJJbnB1dFRleHQoJ3RpdGxlJyk7XG5cbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVCdXR0b24sXG4gICAgY3JlYXRlQmxhbmtCdXR0b24sXG4gICAgY3JlYXRlU2VjdGlvbixcbiAgICBhZGRJbm5lckhUTUwsXG4gICAgY2xlYXJJbnB1dFRleHQsXG4gICAgY2xlYXJTZWN0aW9uLCBcbiAgICByZW5kZXJUb2RvcyxcbiAgICBjcmVhdGVOZXdUb2RvLFxuICAgIHRlc3RGdW5jLFxuICAgIHRlc3RlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7aGVscGVyc307XG4iLCJpbXBvcnQge3JlbmRlcmVyfSBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0IHttb2RlbH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQge2hlbHBlcnN9IGZyb20gJy4vRE9NSGVscGVycy5qcyc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVuZGVyZXIpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3ROYW1lJyk7XG5cbiAgaGVscGVycy5jcmVhdGVCdXR0b24oJ0FkZCBwcm9qZWN0JywgKCkgPT4ge1xuICAgIGhlbHBlcnMuY2xlYXJTZWN0aW9uKCdwcm9qZWN0QXJlYScpO1xuICAgIG1vZGVsLmNyZWF0ZVByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICAgIFwibG9jYWxQcm9qZWN0c1wiIGluIGxvY2FsU3RvcmFnZSA/IGNvbnNvbGUubG9nKCd5ZXMhJyk6IGNvbnNvbGUubG9nKCdubyEnKVxuICAgIGNvbnN0IGxvY2FsUHJvamVjdHMgPSBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShsb2NhbFByb2plY3RzKSk7XG4gICAgaGVscGVycy5jbGVhcklucHV0VGV4dCgnbmV3UHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxQcm9qZWN0cycpKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcbiAgICAvLyBjb25zdCBkYXRhID0gbW9kZWwucmV0cmlldmVQcm9qZWN0cygpO1xuICAgIGRhdGEuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBgJHtkYXRhLmluZGV4T2YoZSl9YDtcbiAgICAgIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ3Byb2plY3RBcmVhJywgYHByb2plY3QtJHtpZH1gLCAneCcpO1xuICAgICAgaGVscGVycy5jcmVhdGVCdXR0b24oZS5uYW1lLCAoKSA9PiBoZWxwZXJzLnJlbmRlclRvZG9zKGRhdGEuaW5kZXhPZihlKSksICdwcm9qZWN0QXJlYScsIGUubmFtZSk7XG4gICAgICBcbiAgICB9KTtcbiAgfSwgJ3Byb2plY3RBZGQnLCAnYnV0dG9ucycpO1xuICBoZWxwZXJzLmNyZWF0ZU5ld1RvZG8oKTtcblxuICBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICB2YXIgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cblxucmV0dXJuIHsgc3RvcmFnZUF2YWlsYWJsZSB9XG5cblxuICBcblxufSkoKTtcblxuZXhwb3J0IHtjb250cm9sbGVyfTtcbiIsImltcG9ydCB7Y29udHJvbGxlcn0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB7aGVscGVyc30gZnJvbSAnLi9ET01IZWxwZXJzLmpzJ1xuXG5pZihjb250cm9sbGVyLnN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgY29uc29sZS5sb2coJ1llcycpXG4gICAgaWYoJ2xvY2FsUHJvamVjdHMnIGluIGxvY2FsU3RvcmFnZSkge1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxQcm9qZWN0cycpKTtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBtb2RlbC5jcmVhdGVQcm9qZWN0KGUubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7ZGF0YS5pbmRleE9mKGUpfWA7XG4gICAgICAgICAgICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdwcm9qZWN0QXJlYScsIGBwcm9qZWN0LSR7aWR9YCwgJ3gnKTtcbiAgICAgICAgICAgIGhlbHBlcnMuY3JlYXRlQnV0dG9uKGUubmFtZSwgKCkgPT4gaGVscGVycy5yZW5kZXJUb2RvcyhkYXRhLmluZGV4T2YoZSkpLCAncHJvamVjdEFyZWEnLCBlLm5hbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIGNvbnN0IGdvb2IgPSBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpO1xuXG4gICAgXG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgIH1cbn1cbmVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdObycpXG59XG5cbiIsImNvbnN0IG1vZGVsID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gW107XG4gICAgY29uc3QgYWRkVG9Eb0xpc3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgdG9kb0xpc3RzLnB1c2goe3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9KTtcbiAgICB9O1xuICAgIGNvbnN0IHJldHJpdmVUb0RvTGlzdHMgPSAoKSA9PiB0b2RvTGlzdHM7XG5cbiAgICByZXR1cm4ge25hbWUsIHJldHJpdmVUb0RvTGlzdHMsIGFkZFRvRG9MaXN0fTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QobmFtZSk7XG4gICAgcHJvamVjdExpc3RzLnB1c2gobmV3UHJvamVjdCk7XG4gIH07XG4gIGNvbnN0IHByb2plY3RMaXN0cyA9IFtdO1xuICBjb25zdCByZXRyaWV2ZVByb2plY3RzID0gKCkgPT4gcHJvamVjdExpc3RzO1xuXG4gIHJldHVybiB7Y3JlYXRlUHJvamVjdCwgcmV0cmlldmVQcm9qZWN0c307XG59KSgpO1xuXG5leHBvcnQge21vZGVsfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7aGVscGVyc30gZnJvbSAnLi9ET01IZWxwZXJzLmpzJztcblxuY29uc3QgcmVuZGVyZXIgPSAoKCkgPT4ge1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdtYWluLWNvbnRlbnQnLCAndG9kb0xpc3RzJywgJ3RvZG9zJyk7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ21haW4tY29udGVudCcsICdwcm9qZWN0cycsICdwcm9qZWN0cycpO1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdtYWluLWNvbnRlbnQnLCAncHJvamVjdEFkZCcsICdwcm9qZWN0QWRkJyk7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ21haW4tY29udGVudCcsICdwcm9qZWN0QXJlYScsICdwcm9qZWN0cycpO1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdtYWluLWNvbnRlbnQnLCAndG9Eb01vZGFsJywgJ21vZGFsJyk7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywndG9Eb01vZGFsJywgJ3RvRG9Nb2RhbENvbnRlbnQnLCAnbW9kYWwtY29udGVudCcpXG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignc3BhbicsICd0b0RvTW9kYWxDb250ZW50JywgJ3RvZG9DbG9zZScsICdjbG9zZScpO1xuICBoZWxwZXJzLmFkZElubmVySFRNTCgndG9kb0Nsb3NlJywgJyZ0aW1lczsnKTtcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCAndG9Eb01vZGFsQ29udGVudCcsICd0b0RvRm9ybScsICdmb3JtJylcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdpbnB1dCcsICd0b0RvRm9ybScsICdmb3JtVGl0bGUnLCAndG9kb2Zvcm0nKVxuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2lucHV0JywgJ3RvRG9Gb3JtJywgJ2Zvcm1EZXNjcmlwdGlvbicsICd0b2RvZm9ybScpXG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignaW5wdXQnLCAndG9Eb0Zvcm0nLCAnZm9ybUR1ZURhdGUnLCAndG9kb2Zvcm0nKVxuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ3NlbGVjdCcsICd0b0RvRm9ybScsICdmb3JtUHJpb3JpdHknLCAndG9kb2Zvcm0nKVxuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ29wdGlvbicsICdmb3JtUHJpb3JpdHknLCAnaGlnaFByaW9yaXR5JywgJ3RvZG9mb3JtJyApXG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignb3B0aW9uJywgJ2Zvcm1Qcmlvcml0eScsICdub3JtYWxQcmlvcml0eScsICd0b2RvZm9ybScgKVxuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ29wdGlvbicsICdmb3JtUHJpb3JpdHknLCAnbG93UHJpb3JpdHknLCAndG9kb2Zvcm0nIClcbiAgaGVscGVycy5jcmVhdGVCdXR0b24oJ1VwZGF0ZScsIGhlbHBlcnMudGVzdGVyLCAndG9Eb01vZGFsQ29udGVudCcsICdmb3JtU3VibWl0JylcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3Qgbm9kbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEFkZCcpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUR1ZURhdGUnKS50eXBlID0gJ2RhdGUnO1xuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlnaFByaW9yaXR5Jyk7XG4gIGhpZ2hQcmlvcml0eS52YWx1ZSA9ICdIaWdoJztcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICBjb25zdCBub3JtYWxQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3JtYWxQcmlvcml0eScpO1xuICBub3JtYWxQcmlvcml0eS52YWx1ZSA9ICdOb3JtYWwnO1xuICBub3JtYWxQcmlvcml0eS50ZXh0Q29udGVudCA9ICdOb3JtYWwnO1xuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3dQcmlvcml0eScpO1xuICBsb3dQcmlvcml0eS52YWx1ZSA9ICdMb3cnO1xuICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBub2RsZS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICBwcm9qZWN0SW5wdXQuaWQgPSAnbmV3UHJvamVjdE5hbWUnO1xufSkoKTtcblxuXG5cbmV4cG9ydCB7cmVuZGVyZXJ9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==