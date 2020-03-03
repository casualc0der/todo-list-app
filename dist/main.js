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
    const todoTitle = localStorage.getItem(`title${i}--${x}`)
    const todoDescription = localStorage.getItem(`description${i}--${x}`)
    const todoDueDate = localStorage.getItem(`dueDate${i}--${x}`)
    const todoPiority = localStorage.getItem(`priority${i}--${x}`)
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

    localStorage.setItem(`title${i}--${x}`, titleNode.value);
    localStorage.setItem(`description${i}--${x}`, descriptionNode.value);
    localStorage.setItem(`dueDate${i}--${x}`, dueDateNode.value);
    localStorage.setItem(`priority${i}--${x}`, priorityNode.value);
    console.log(localStorage);

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
      if(todoID === projects.indexOf(e)) {
        if(!todoTitle.value) { return }; //add error message
          e.addToDoList(todoTitle.value);
          renderTodos(todoID);
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
    _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__["helpers"].clearInputText('newProjectName');
    const data = _model_js__WEBPACK_IMPORTED_MODULE_1__["model"].retrieveProjects();
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



if(_controller_js__WEBPACK_IMPORTED_MODULE_0__["controller"].storageAvailable('localStorage')) {
    console.log('Yes')
}
else {
    console.log('No')
}

let itemsArray = [];
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RPTUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFnQzs7QUFFaEM7QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNB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O0FBRWM7Ozs7Ozs7Ozs7OztBQ3hCZix1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQXdDOztBQUV4QztBQUNBLEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPLG1DQUFtQztBQUM1QyxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU8sd0JBQXdCLHNEQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSWlCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcblxuY29uc3QgaGVscGVycyA9ICgoKT0+IHtcbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gKHRleHQsIGZ1bmMsIGF0dGFjaElkLCBidXR0b25JZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthdHRhY2hJZH1gKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuICAgIGJ1dHRvbi5pZCA9IGJ1dHRvbklkO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGZ1bmMoKSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJsYW5rQnV0dG9uID0gKHRleHQsIGF0dGFjaElkLCBidXR0b25JZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthdHRhY2hJZH1gKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuICAgIGJ1dHRvbi5pZCA9IGJ1dHRvbklkO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0ZXh0XG4gICAgbm9kZS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIH1cblxuICBjb25zdCBjcmVhdGVTZWN0aW9uID0gKHNlY3Rpb25UeXBlLCBhdHRhY2hJZCwgc2VjdGlvbklkLCBzZWN0aW9uQ2xhc3MpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXR0YWNoSWR9YCk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7c2VjdGlvblR5cGV9YCk7XG4gICAgc2VjdGlvbi5pZCA9IHNlY3Rpb25JZDtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoYCR7c2VjdGlvbkNsYXNzfWApO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIH07XG4gIGNvbnN0IGFkZElubmVySFRNTCA9IChzZWN0aW9uSWQsIHRleHQpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c2VjdGlvbklkfWApO1xuICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dDtcbiAgfTtcblxuICBjb25zdCBjbGVhcklucHV0VGV4dCA9IChpbnB1dElkKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xuICAgIG5vZGUuaW5uZXJUZXh0ID0gJyc7XG4gICAgbm9kZS52YWx1ZSA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU2VjdGlvbiA9IChzZWN0aW9uSWQpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklkKTtcbiAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVG9kb3MgPSAoaSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0xpc3RzJyk7XG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gbW9kZWwucmV0cmlldmVQcm9qZWN0cygpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2ldXG4gIFxuICAgIGNsZWFyU2VjdGlvbihub2RlLmlkKTtcbiAgICBjb25zdCB0b0RvTGlzdHMgPSBjdXJyZW50UHJvamVjdC5yZXRyaXZlVG9Eb0xpc3RzKCk7XG4gICAgY3JlYXRlU2VjdGlvbignZGl2JywndG9kb0xpc3RzJywgYHRvZG8tJHtpfWAsICd0b2RvQ2FyZCcpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9kby0ke2l9YCk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChsaXN0KTtcbiAgIFxuICAgIFxuICAgIHRvRG9MaXN0cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBjb25zdCB0b2RvTGlzdFBvc2l0aW9uID0gdG9Eb0xpc3RzLmluZGV4T2YoZSk7XG4gICAgICBjcmVhdGVTZWN0aW9uKCdkaXYnLGB0b2RvLSR7aX1gLGBsaXN0LWl0ZW0ke3RvZG9MaXN0UG9zaXRpb259YCwgJ2xpc3RJdGVtJylcbiAgICAgIGNvbnN0IGxpc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpc3QtaXRlbSR7dG9kb0xpc3RQb3NpdGlvbn1gKVxuICAgICAgbGlzdE5vZGUuaW5uZXJIVE1MID0gZS50aXRsZTtcbiAgICAgIGxpc3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9kb0RldGFpbHMoaSxjdXJyZW50UHJvamVjdC5uYW1lLHRvZG9MaXN0UG9zaXRpb24pKTtcbiAgICAgIFxuXG4gICAgfSlcbiAgXG4gIH1cblxuICBjb25zdCBjcmVhdGVOZXdUb2RvID0gKCkgPT4ge1xuICAgIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignaW5wdXQnLCAncHJvamVjdHMnLCAndGl0bGUnLCAndG9kb3MnKTtcbiAgICBoZWxwZXJzLmNyZWF0ZUJ1dHRvbignQWRkIFRvZG8nLCBoZWxwZXJzLnRlc3RGdW5jICwgJ3Byb2plY3RzJywgJ3RvZG9zJyApXG5cbiAgfVxuXG4gIGNvbnN0IG1vZGFsTWVudSA9ICgpID0+IHtcblxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Nb2RhbCcpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Nsb3NlJyk7XG4gICAgc3Bhbi5vbmNsaWNrID0gKCkgPT4gbW9kYWwuc3R5bGUuZGlzcGxheSA9J25vbmUnO1xuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZihldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgfVxuXG4gIGNvbnN0IHRvZG9EZXRhaWxzID0gKGksIHAsIHgpID0+IHtcbiAgICBtb2RhbE1lbnUoKTtcbiAgXG5cbiAgICBjb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtJyk7XG4gIFxuICAgIG1vZGFsRm9ybVswXS5pZCA9IGAke2l9LS0ke3h9YDtcbiAgICBjb25zdCBub2RlID0gbW9kZWwucmV0cmlldmVQcm9qZWN0cygpW2ldLnJldHJpdmVUb0RvTGlzdHMoKVt4XVxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aXRsZSR7aX0tLSR7eH1gKVxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBkZXNjcmlwdGlvbiR7aX0tLSR7eH1gKVxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGR1ZURhdGUke2l9LS0ke3h9YClcbiAgICBjb25zdCB0b2RvUGlvcml0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcmlvcml0eSR7aX0tLSR7eH1gKVxuICAgIGNvbnN0IHRpdGxlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGl0bGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybURlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZHVlRGF0ZU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUR1ZURhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVByaW9yaXR5Jyk7XG4gICAgY2xlYXJJbnB1dFRleHQodGl0bGVOb2RlLmlkKVxuICAgIGNsZWFySW5wdXRUZXh0KGRlc2NyaXB0aW9uTm9kZS5pZClcbiAgICBjbGVhcklucHV0VGV4dChkdWVEYXRlTm9kZS5pZClcbiAgICAvLyBjbGVhcklucHV0VGV4dChwcmlvcml0eU5vZGUuaWQpXG5cbiAgICB0b2RvVGl0bGUgIT09IHVuZGVmaW5lZCA/IHRpdGxlTm9kZS52YWx1ZSA9IHRvZG9UaXRsZSA6IHRpdGxlTm9kZS5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XG4gICAgdG9kb0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyBkZXNjcmlwdGlvbk5vZGUudmFsdWUgPSB0b2RvRGVzY3JpcHRpb246IGRlc2NyaXB0aW9uTm9kZS5wbGFjZWhvbGRlciA9ICdBZGQgRGVzY3JpcHRpb24nO1xuICAgIHRvZG9EdWVEYXRlICE9PSB1bmRlZmluZWQgPyBkdWVEYXRlTm9kZS52YWx1ZSA9IHRvZG9EdWVEYXRlOiBkdWVEYXRlTm9kZS5wbGFjZWhvbGRlciA9ICdEdWUgRGF0ZSc7XG4gICAgdG9kb1Bpb3JpdHkgIT09IHVuZGVmaW5lZCA/IHByaW9yaXR5Tm9kZS52YWx1ZSA9IHRvZG9QaW9yaXR5OiBwcmlvcml0eU5vZGUudmFsdWUgPSAnUHJpb3JpdHknO1xuXG4gICAgXG4gIH1cbiAgY29uc3QgdGVzdGVyID0gKCkgPT4ge1xuICAgXG4gICAgY29uc3QgbW9kYWxGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybScpO1xuICAgIGNvbnN0IG1vZGFsU3RyaW5nID0gbW9kYWxGb3JtWzBdLmlkXG4gICAgY29uc3QgaSA9IG1vZGFsU3RyaW5nLnNsaWNlKDAsIG1vZGFsU3RyaW5nLmluZGV4T2YoJy0nKSlcbiAgICBjb25zdCB4ID0gbW9kYWxTdHJpbmcuc2xpY2UobW9kYWxTdHJpbmcubGFzdEluZGV4T2YoJy0nKSsxKVxuICAgIGNvbnN0IHRpdGxlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGl0bGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybURlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZHVlRGF0ZU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUR1ZURhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVByaW9yaXR5Jyk7XG4gICAgY29uc3Qgbm9kZSA9IG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKVtpXS5yZXRyaXZlVG9Eb0xpc3RzKClbeF07XG4gICAgbm9kZS50aXRsZSA9IHRpdGxlTm9kZS52YWx1ZVxuICAgIG5vZGUuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbk5vZGUudmFsdWUgXG4gICAgbm9kZS5kdWVEYXRlID0gZHVlRGF0ZU5vZGUudmFsdWVcbiAgICBub2RlLnByaW9yaXR5ID0gcHJpb3JpdHlOb2RlLnZhbHVlXG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGl0bGUke2l9LS0ke3h9YCwgdGl0bGVOb2RlLnZhbHVlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgZGVzY3JpcHRpb24ke2l9LS0ke3h9YCwgZGVzY3JpcHRpb25Ob2RlLnZhbHVlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgZHVlRGF0ZSR7aX0tLSR7eH1gLCBkdWVEYXRlTm9kZS52YWx1ZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByaW9yaXR5JHtpfS0tJHt4fWAsIHByaW9yaXR5Tm9kZS52YWx1ZSk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcblxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Nb2RhbCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblxuXG4gIFxuICB9XG5cblxuICBjb25zdCB0ZXN0RnVuYyA9ICgpID0+IHtcbiAgXG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9DYXJkJylcbiAgICBpZighbm9kZVswXSkgeyByZXR1cm4gfSAvL2FkZCBlcnJvciBtZXNzYWdlXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgY29uc3QgY3VycmVudFRvZG8gPSBub2RlWzBdLmlkO1xuICAgIGNvbnN0IHRvZG9JRCA9IHBhcnNlSW50KGN1cnJlbnRUb2RvLnNsaWNlKDUpKVxuICAgIGNvbnN0IHByb2plY3RzID0gbW9kZWwucmV0cmlldmVQcm9qZWN0cygpXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZSkgPT4geyBcbiAgICAgIGlmKHRvZG9JRCA9PT0gcHJvamVjdHMuaW5kZXhPZihlKSkge1xuICAgICAgICBpZighdG9kb1RpdGxlLnZhbHVlKSB7IHJldHVybiB9OyAvL2FkZCBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgZS5hZGRUb0RvTGlzdCh0b2RvVGl0bGUudmFsdWUpO1xuICAgICAgICAgIHJlbmRlclRvZG9zKHRvZG9JRCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gIGhlbHBlcnMuY2xlYXJJbnB1dFRleHQoJ3RpdGxlJyk7XG5cbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVCdXR0b24sXG4gICAgY3JlYXRlQmxhbmtCdXR0b24sXG4gICAgY3JlYXRlU2VjdGlvbixcbiAgICBhZGRJbm5lckhUTUwsXG4gICAgY2xlYXJJbnB1dFRleHQsXG4gICAgY2xlYXJTZWN0aW9uLCBcbiAgICByZW5kZXJUb2RvcyxcbiAgICBjcmVhdGVOZXdUb2RvLFxuICAgIHRlc3RGdW5jLFxuICAgIHRlc3RlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7aGVscGVyc307XG4iLCJpbXBvcnQge3JlbmRlcmVyfSBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0IHttb2RlbH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQge2hlbHBlcnN9IGZyb20gJy4vRE9NSGVscGVycy5qcyc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVuZGVyZXIpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3ROYW1lJyk7XG5cbiAgaGVscGVycy5jcmVhdGVCdXR0b24oJ0FkZCBwcm9qZWN0JywgKCkgPT4ge1xuICAgIGhlbHBlcnMuY2xlYXJTZWN0aW9uKCdwcm9qZWN0QXJlYScpO1xuICAgIG1vZGVsLmNyZWF0ZVByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICAgIGhlbHBlcnMuY2xlYXJJbnB1dFRleHQoJ25ld1Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgZGF0YSA9IG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKTtcbiAgICBkYXRhLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gYCR7ZGF0YS5pbmRleE9mKGUpfWA7XG4gICAgICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdwcm9qZWN0QXJlYScsIGBwcm9qZWN0LSR7aWR9YCwgJ3gnKTtcbiAgICAgIGhlbHBlcnMuY3JlYXRlQnV0dG9uKGUubmFtZSwgKCkgPT4gaGVscGVycy5yZW5kZXJUb2RvcyhkYXRhLmluZGV4T2YoZSkpLCAncHJvamVjdEFyZWEnLCBlLm5hbWUpO1xuICAgICAgXG4gICAgfSk7XG4gIH0sICdwcm9qZWN0QWRkJywgJ2J1dHRvbnMnKTtcbiAgaGVscGVycy5jcmVhdGVOZXdUb2RvKCk7XG5cbiAgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgdmFyIHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cbnJldHVybiB7IHN0b3JhZ2VBdmFpbGFibGUgfVxuXG5cbiAgXG5cbn0pKCk7XG5cbmV4cG9ydCB7Y29udHJvbGxlcn07XG4iLCJpbXBvcnQge2NvbnRyb2xsZXJ9IGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuaWYoY29udHJvbGxlci5zdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIGNvbnNvbGUubG9nKCdZZXMnKVxufVxuZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ05vJylcbn1cblxubGV0IGl0ZW1zQXJyYXkgPSBbXTtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtcycsIEpTT04uc3RyaW5naWZ5KGl0ZW1zQXJyYXkpKVxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW1zJykpIiwiY29uc3QgbW9kZWwgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBbXTtcbiAgICBjb25zdCBhZGRUb0RvTGlzdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICB0b2RvTGlzdHMucHVzaCh7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX0pO1xuICAgIH07XG4gICAgY29uc3QgcmV0cml2ZVRvRG9MaXN0cyA9ICgpID0+IHRvZG9MaXN0cztcblxuICAgIHJldHVybiB7bmFtZSwgcmV0cml2ZVRvRG9MaXN0cywgYWRkVG9Eb0xpc3R9O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChuYW1lKTtcbiAgICBwcm9qZWN0TGlzdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgfTtcbiAgY29uc3QgcHJvamVjdExpc3RzID0gW107XG4gIGNvbnN0IHJldHJpZXZlUHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0TGlzdHM7XG5cbiAgcmV0dXJuIHtjcmVhdGVQcm9qZWN0LCByZXRyaWV2ZVByb2plY3RzfTtcbn0pKCk7XG5cbmV4cG9ydCB7bW9kZWx9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHtoZWxwZXJzfSBmcm9tICcuL0RPTUhlbHBlcnMuanMnO1xuXG5jb25zdCByZW5kZXJlciA9ICgoKSA9PiB7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ21haW4tY29udGVudCcsICd0b2RvTGlzdHMnLCAndG9kb3MnKTtcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCAnbWFpbi1jb250ZW50JywgJ3Byb2plY3RzJywgJ3Byb2plY3RzJyk7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ21haW4tY29udGVudCcsICdwcm9qZWN0QWRkJywgJ3Byb2plY3RBZGQnKTtcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCAnbWFpbi1jb250ZW50JywgJ3Byb2plY3RBcmVhJywgJ3Byb2plY3RzJyk7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ21haW4tY29udGVudCcsICd0b0RvTW9kYWwnLCAnbW9kYWwnKTtcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCd0b0RvTW9kYWwnLCAndG9Eb01vZGFsQ29udGVudCcsICdtb2RhbC1jb250ZW50JylcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdzcGFuJywgJ3RvRG9Nb2RhbENvbnRlbnQnLCAndG9kb0Nsb3NlJywgJ2Nsb3NlJyk7XG4gIGhlbHBlcnMuYWRkSW5uZXJIVE1MKCd0b2RvQ2xvc2UnLCAnJnRpbWVzOycpO1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICd0b0RvTW9kYWxDb250ZW50JywgJ3RvRG9Gb3JtJywgJ2Zvcm0nKVxuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2lucHV0JywgJ3RvRG9Gb3JtJywgJ2Zvcm1UaXRsZScsICd0b2RvZm9ybScpXG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignaW5wdXQnLCAndG9Eb0Zvcm0nLCAnZm9ybURlc2NyaXB0aW9uJywgJ3RvZG9mb3JtJylcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdpbnB1dCcsICd0b0RvRm9ybScsICdmb3JtRHVlRGF0ZScsICd0b2RvZm9ybScpXG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignc2VsZWN0JywgJ3RvRG9Gb3JtJywgJ2Zvcm1Qcmlvcml0eScsICd0b2RvZm9ybScpXG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignb3B0aW9uJywgJ2Zvcm1Qcmlvcml0eScsICdoaWdoUHJpb3JpdHknLCAndG9kb2Zvcm0nIClcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdvcHRpb24nLCAnZm9ybVByaW9yaXR5JywgJ25vcm1hbFByaW9yaXR5JywgJ3RvZG9mb3JtJyApXG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignb3B0aW9uJywgJ2Zvcm1Qcmlvcml0eScsICdsb3dQcmlvcml0eScsICd0b2RvZm9ybScgKVxuICBoZWxwZXJzLmNyZWF0ZUJ1dHRvbignVXBkYXRlJywgaGVscGVycy50ZXN0ZXIsICd0b0RvTW9kYWxDb250ZW50JywgJ2Zvcm1TdWJtaXQnKVxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBub2RsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0QWRkJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRHVlRGF0ZScpLnR5cGUgPSAnZGF0ZSc7XG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWdoUHJpb3JpdHknKTtcbiAgaGlnaFByaW9yaXR5LnZhbHVlID0gJ0hpZ2gnO1xuICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gIGNvbnN0IG5vcm1hbFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vcm1hbFByaW9yaXR5Jyk7XG4gIG5vcm1hbFByaW9yaXR5LnZhbHVlID0gJ05vcm1hbCc7XG4gIG5vcm1hbFByaW9yaXR5LnRleHRDb250ZW50ID0gJ05vcm1hbCc7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvd1ByaW9yaXR5Jyk7XG4gIGxvd1ByaW9yaXR5LnZhbHVlID0gJ0xvdyc7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gIG5vZGxlLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gIHByb2plY3RJbnB1dC5pZCA9ICduZXdQcm9qZWN0TmFtZSc7XG59KSgpO1xuXG5cblxuZXhwb3J0IHtyZW5kZXJlcn07XG4iXSwic291cmNlUm9vdCI6IiJ9