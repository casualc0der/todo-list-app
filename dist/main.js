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
    const todoTitle = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].title
    const todoDescription = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].description
    const todoDueDate = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].dueDate 
    const todoPiority = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].priority
    const titleNode = document.getElementById('formTitle');
    const descriptionNode = document.getElementById('formDescription');
    const dueDateNode = document.getElementById('formDueDate');
    const priorityNode = document.getElementById('formPriority');
    clearInputText(titleNode.id)
    clearInputText(descriptionNode.id)
    clearInputText(dueDateNode.id)
    clearInputText(priorityNode.id)

    todoTitle !== undefined ? titleNode.value = todoTitle : titleNode.placeholder = 'Title';
    todoDescription !== undefined ? descriptionNode.value = todoDescription: descriptionNode.placeholder = 'Add Description';
    todoDueDate !== undefined ? dueDateNode.value = todoDueDate: dueDateNode.placeholder = 'Due Date';
    todoPiority !== undefined ? priorityNode.value = todoPiority: priorityNode.placeholder = 'Priority';

    
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
    _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].title = titleNode.value
    _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].description = descriptionNode.value 
    _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].dueDate = dueDateNode.value
    _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].priority = priorityNode.value 

  
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
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('input', 'toDoForm', 'formPriority', 'todoform')
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createButton('Update', _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].tester, 'toDoModalContent', 'formSubmit')
  const projectInput = document.createElement('input');
  const nodle = document.getElementById('projectAdd');
  const dueDateCalendar = document.getElementById('formDueDate');
  dueDateCalendar.type = 'date';
  nodle.appendChild(projectInput);
  projectInput.id = 'newProjectName';
})();






/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RPTUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFnQzs7QUFFaEM7QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNB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QUNBO0FBQ0EsQ0FBQzs7OztBQUlpQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBtb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XG5cbmNvbnN0IGhlbHBlcnMgPSAoKCk9PiB7XG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh0ZXh0LCBmdW5jLCBhdHRhY2hJZCwgYnV0dG9uSWQpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXR0YWNoSWR9YCk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcbiAgICBidXR0b24uaWQgPSBidXR0b25JZDtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gdGV4dDtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBmdW5jKCkpO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCbGFua0J1dHRvbiA9ICh0ZXh0LCBhdHRhY2hJZCwgYnV0dG9uSWQpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXR0YWNoSWR9YCk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcbiAgICBidXR0b24uaWQgPSBidXR0b25JZDtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gdGV4dFxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICB9XG5cbiAgY29uc3QgY3JlYXRlU2VjdGlvbiA9IChzZWN0aW9uVHlwZSwgYXR0YWNoSWQsIHNlY3Rpb25JZCwgc2VjdGlvbkNsYXNzKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2F0dGFjaElkfWApO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3NlY3Rpb25UeXBlfWApO1xuICAgIHNlY3Rpb24uaWQgPSBzZWN0aW9uSWQ7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGAke3NlY3Rpb25DbGFzc31gKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICB9O1xuICBjb25zdCBhZGRJbm5lckhUTUwgPSAoc2VjdGlvbklkLCB0ZXh0KSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NlY3Rpb25JZH1gKTtcbiAgICBub2RlLmlubmVySFRNTCA9IHRleHQ7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJJbnB1dFRleHQgPSAoaW5wdXRJZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcbiAgICBub2RlLmlubmVyVGV4dCA9ICcnO1xuICAgIG5vZGUudmFsdWUgPSAnJztcbiAgfTtcblxuICBjb25zdCBjbGVhclNlY3Rpb24gPSAoc2VjdGlvbklkKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XG4gICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRvZG9zID0gKGkpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0cycpO1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RBcnJheVtpXVxuICBcbiAgICBjbGVhclNlY3Rpb24obm9kZS5pZCk7XG4gICAgY29uc3QgdG9Eb0xpc3RzID0gY3VycmVudFByb2plY3QucmV0cml2ZVRvRG9MaXN0cygpO1xuICAgIGNyZWF0ZVNlY3Rpb24oJ2RpdicsJ3RvZG9MaXN0cycsIGB0b2RvLSR7aX1gLCAndG9kb0NhcmQnKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvZG8tJHtpfWApO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICBcbiAgICBcbiAgICB0b0RvTGlzdHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgdG9kb0xpc3RQb3NpdGlvbiA9IHRvRG9MaXN0cy5pbmRleE9mKGUpO1xuICAgICAgY3JlYXRlU2VjdGlvbignZGl2JyxgdG9kby0ke2l9YCxgbGlzdC1pdGVtJHt0b2RvTGlzdFBvc2l0aW9ufWAsICdsaXN0SXRlbScpXG4gICAgICBjb25zdCBsaXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaXN0LWl0ZW0ke3RvZG9MaXN0UG9zaXRpb259YClcbiAgICAgIGxpc3ROb2RlLmlubmVySFRNTCA9IGUudGl0bGU7XG4gICAgICBsaXN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZG9EZXRhaWxzKGksY3VycmVudFByb2plY3QubmFtZSx0b2RvTGlzdFBvc2l0aW9uKSk7XG4gICAgICBcblxuICAgIH0pXG4gIFxuICB9XG5cbiAgY29uc3QgY3JlYXRlTmV3VG9kbyA9ICgpID0+IHtcbiAgICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2lucHV0JywgJ3Byb2plY3RzJywgJ3RpdGxlJywgJ3RvZG9zJyk7XG4gICAgaGVscGVycy5jcmVhdGVCdXR0b24oJ0FkZCBUb2RvJywgaGVscGVycy50ZXN0RnVuYyAsICdwcm9qZWN0cycsICd0b2RvcycgKVxuXG4gIH1cblxuICBjb25zdCBtb2RhbE1lbnUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvTW9kYWwnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9DbG9zZScpO1xuICAgIHNwYW4ub25jbGljayA9ICgpID0+IG1vZGFsLnN0eWxlLmRpc3BsYXkgPSdub25lJztcbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgaWYoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIH1cblxuICBjb25zdCB0b2RvRGV0YWlscyA9IChpLCBwLCB4KSA9PiB7XG4gICAgbW9kYWxNZW51KCk7XG4gIFxuXG4gICAgY29uc3QgbW9kYWxGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybScpO1xuICBcbiAgICBtb2RhbEZvcm1bMF0uaWQgPSBgJHtpfS0tJHt4fWA7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gbW9kZWwucmV0cmlldmVQcm9qZWN0cygpW2ldLnJldHJpdmVUb0RvTGlzdHMoKVt4XS50aXRsZVxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKVtpXS5yZXRyaXZlVG9Eb0xpc3RzKClbeF0uZGVzY3JpcHRpb25cbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKVtpXS5yZXRyaXZlVG9Eb0xpc3RzKClbeF0uZHVlRGF0ZSBcbiAgICBjb25zdCB0b2RvUGlvcml0eSA9IG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKVtpXS5yZXRyaXZlVG9Eb0xpc3RzKClbeF0ucHJpb3JpdHlcbiAgICBjb25zdCB0aXRsZU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRpdGxlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1EZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGR1ZURhdGVOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1EdWVEYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Qcmlvcml0eScpO1xuICAgIGNsZWFySW5wdXRUZXh0KHRpdGxlTm9kZS5pZClcbiAgICBjbGVhcklucHV0VGV4dChkZXNjcmlwdGlvbk5vZGUuaWQpXG4gICAgY2xlYXJJbnB1dFRleHQoZHVlRGF0ZU5vZGUuaWQpXG4gICAgY2xlYXJJbnB1dFRleHQocHJpb3JpdHlOb2RlLmlkKVxuXG4gICAgdG9kb1RpdGxlICE9PSB1bmRlZmluZWQgPyB0aXRsZU5vZGUudmFsdWUgPSB0b2RvVGl0bGUgOiB0aXRsZU5vZGUucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xuICAgIHRvZG9EZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gZGVzY3JpcHRpb25Ob2RlLnZhbHVlID0gdG9kb0Rlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbk5vZGUucGxhY2Vob2xkZXIgPSAnQWRkIERlc2NyaXB0aW9uJztcbiAgICB0b2RvRHVlRGF0ZSAhPT0gdW5kZWZpbmVkID8gZHVlRGF0ZU5vZGUudmFsdWUgPSB0b2RvRHVlRGF0ZTogZHVlRGF0ZU5vZGUucGxhY2Vob2xkZXIgPSAnRHVlIERhdGUnO1xuICAgIHRvZG9QaW9yaXR5ICE9PSB1bmRlZmluZWQgPyBwcmlvcml0eU5vZGUudmFsdWUgPSB0b2RvUGlvcml0eTogcHJpb3JpdHlOb2RlLnBsYWNlaG9sZGVyID0gJ1ByaW9yaXR5JztcblxuICAgIFxuICB9XG4gIGNvbnN0IHRlc3RlciA9ICgpID0+IHtcbiAgIFxuICAgIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0nKTtcbiAgICBjb25zdCBtb2RhbFN0cmluZyA9IG1vZGFsRm9ybVswXS5pZFxuICAgIGNvbnN0IGkgPSBtb2RhbFN0cmluZy5zbGljZSgwLCBtb2RhbFN0cmluZy5pbmRleE9mKCctJykpXG4gICAgY29uc3QgeCA9IG1vZGFsU3RyaW5nLnNsaWNlKG1vZGFsU3RyaW5nLmxhc3RJbmRleE9mKCctJykrMSlcbiAgXG4gICAgXG4gIFxuICAgIGNvbnN0IHRpdGxlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGl0bGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybURlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZHVlRGF0ZU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUR1ZURhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVByaW9yaXR5Jyk7XG4gICAgbW9kZWwucmV0cmlldmVQcm9qZWN0cygpW2ldLnJldHJpdmVUb0RvTGlzdHMoKVt4XS50aXRsZSA9IHRpdGxlTm9kZS52YWx1ZVxuICAgIG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKVtpXS5yZXRyaXZlVG9Eb0xpc3RzKClbeF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbk5vZGUudmFsdWUgXG4gICAgbW9kZWwucmV0cmlldmVQcm9qZWN0cygpW2ldLnJldHJpdmVUb0RvTGlzdHMoKVt4XS5kdWVEYXRlID0gZHVlRGF0ZU5vZGUudmFsdWVcbiAgICBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKClbaV0ucmV0cml2ZVRvRG9MaXN0cygpW3hdLnByaW9yaXR5ID0gcHJpb3JpdHlOb2RlLnZhbHVlIFxuXG4gIFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Nb2RhbCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuXG5cblxuXG4gIGNvbnN0IHRlc3RGdW5jID0gKCkgPT4ge1xuICBcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kb0NhcmQnKVxuICAgIGlmKCFub2RlWzBdKSB7IHJldHVybiB9IC8vYWRkIGVycm9yIG1lc3NhZ2VcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IG5vZGVbMF0uaWQ7XG4gICAgY29uc3QgdG9kb0lEID0gcGFyc2VJbnQoY3VycmVudFRvZG8uc2xpY2UoNSkpXG4gICAgY29uc3QgcHJvamVjdHMgPSBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKClcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlKSA9PiB7IFxuICAgICAgaWYodG9kb0lEID09PSBwcm9qZWN0cy5pbmRleE9mKGUpKSB7XG4gICAgICAgIGlmKCF0b2RvVGl0bGUudmFsdWUpIHsgcmV0dXJuIH07IC8vYWRkIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICBlLmFkZFRvRG9MaXN0KHRvZG9UaXRsZS52YWx1ZSk7XG4gICAgICAgICAgcmVuZGVyVG9kb3ModG9kb0lEKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgaGVscGVycy5jbGVhcklucHV0VGV4dCgndGl0bGUnKTtcblxuICB9XG5cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUJ1dHRvbixcbiAgICBjcmVhdGVCbGFua0J1dHRvbixcbiAgICBjcmVhdGVTZWN0aW9uLFxuICAgIGFkZElubmVySFRNTCxcbiAgICBjbGVhcklucHV0VGV4dCxcbiAgICBjbGVhclNlY3Rpb24sIFxuICAgIHJlbmRlclRvZG9zLFxuICAgIGNyZWF0ZU5ld1RvZG8sXG4gICAgdGVzdEZ1bmMsXG4gICAgdGVzdGVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHtoZWxwZXJzfTtcbiIsImltcG9ydCB7cmVuZGVyZXJ9IGZyb20gJy4vdmlldy5qcyc7XG5pbXBvcnQge21vZGVsfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB7aGVscGVyc30gZnJvbSAnLi9ET01IZWxwZXJzLmpzJztcblxuY29uc3QgY29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCByZW5kZXJlcik7XG5cbiAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdE5hbWUnKTtcblxuICBoZWxwZXJzLmNyZWF0ZUJ1dHRvbignQWRkIHByb2plY3QnLCAoKSA9PiB7XG4gICAgaGVscGVycy5jbGVhclNlY3Rpb24oJ3Byb2plY3RBcmVhJyk7XG4gICAgbW9kZWwuY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgaGVscGVycy5jbGVhcklucHV0VGV4dCgnbmV3UHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCBkYXRhID0gbW9kZWwucmV0cmlldmVQcm9qZWN0cygpO1xuICAgIGRhdGEuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBgJHtkYXRhLmluZGV4T2YoZSl9YDtcbiAgICAgIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ3Byb2plY3RBcmVhJywgYHByb2plY3QtJHtpZH1gLCAneCcpO1xuICAgICAgaGVscGVycy5jcmVhdGVCdXR0b24oZS5uYW1lLCAoKSA9PiBoZWxwZXJzLnJlbmRlclRvZG9zKGRhdGEuaW5kZXhPZihlKSksICdwcm9qZWN0QXJlYScsIGUubmFtZSk7XG4gICAgICBcbiAgICB9KTtcbiAgfSwgJ3Byb2plY3RBZGQnLCAnYnV0dG9ucycpO1xuICBoZWxwZXJzLmNyZWF0ZU5ld1RvZG8oKTtcblxuXG4gIFxuXG59KSgpO1xuXG5leHBvcnQge2NvbnRyb2xsZXJ9O1xuIiwiaW1wb3J0IHtjb250cm9sbGVyfSBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG4iLCJjb25zdCBtb2RlbCA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IFtdO1xuICAgIGNvbnN0IGFkZFRvRG9MaXN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgIHRvZG9MaXN0cy5wdXNoKHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5fSk7XG4gICAgfTtcbiAgICBjb25zdCByZXRyaXZlVG9Eb0xpc3RzID0gKCkgPT4gdG9kb0xpc3RzO1xuXG4gICAgcmV0dXJuIHtuYW1lLCByZXRyaXZlVG9Eb0xpc3RzLCBhZGRUb0RvTGlzdH07XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KG5hbWUpO1xuICAgIHByb2plY3RMaXN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICB9O1xuICBjb25zdCBwcm9qZWN0TGlzdHMgPSBbXTtcbiAgY29uc3QgcmV0cmlldmVQcm9qZWN0cyA9ICgpID0+IHByb2plY3RMaXN0cztcblxuICByZXR1cm4ge2NyZWF0ZVByb2plY3QsIHJldHJpZXZlUHJvamVjdHN9O1xufSkoKTtcblxuZXhwb3J0IHttb2RlbH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2hlbHBlcnN9IGZyb20gJy4vRE9NSGVscGVycy5qcyc7XG5cbmNvbnN0IHJlbmRlcmVyID0gKCgpID0+IHtcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCAnbWFpbi1jb250ZW50JywgJ3RvZG9MaXN0cycsICd0b2RvcycpO1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdtYWluLWNvbnRlbnQnLCAncHJvamVjdHMnLCAncHJvamVjdHMnKTtcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCAnbWFpbi1jb250ZW50JywgJ3Byb2plY3RBZGQnLCAncHJvamVjdEFkZCcpO1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdtYWluLWNvbnRlbnQnLCAncHJvamVjdEFyZWEnLCAncHJvamVjdHMnKTtcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCAnbWFpbi1jb250ZW50JywgJ3RvRG9Nb2RhbCcsICdtb2RhbCcpO1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsJ3RvRG9Nb2RhbCcsICd0b0RvTW9kYWxDb250ZW50JywgJ21vZGFsLWNvbnRlbnQnKVxuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ3NwYW4nLCAndG9Eb01vZGFsQ29udGVudCcsICd0b2RvQ2xvc2UnLCAnY2xvc2UnKTtcbiAgaGVscGVycy5hZGRJbm5lckhUTUwoJ3RvZG9DbG9zZScsICcmdGltZXM7Jyk7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ3RvRG9Nb2RhbENvbnRlbnQnLCAndG9Eb0Zvcm0nLCAnZm9ybScpXG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignaW5wdXQnLCAndG9Eb0Zvcm0nLCAnZm9ybVRpdGxlJywgJ3RvZG9mb3JtJylcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdpbnB1dCcsICd0b0RvRm9ybScsICdmb3JtRGVzY3JpcHRpb24nLCAndG9kb2Zvcm0nKVxuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2lucHV0JywgJ3RvRG9Gb3JtJywgJ2Zvcm1EdWVEYXRlJywgJ3RvZG9mb3JtJylcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdpbnB1dCcsICd0b0RvRm9ybScsICdmb3JtUHJpb3JpdHknLCAndG9kb2Zvcm0nKVxuICBoZWxwZXJzLmNyZWF0ZUJ1dHRvbignVXBkYXRlJywgaGVscGVycy50ZXN0ZXIsICd0b0RvTW9kYWxDb250ZW50JywgJ2Zvcm1TdWJtaXQnKVxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBub2RsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0QWRkJyk7XG4gIGNvbnN0IGR1ZURhdGVDYWxlbmRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRHVlRGF0ZScpO1xuICBkdWVEYXRlQ2FsZW5kYXIudHlwZSA9ICdkYXRlJztcbiAgbm9kbGUuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcbiAgcHJvamVjdElucHV0LmlkID0gJ25ld1Byb2plY3ROYW1lJztcbn0pKCk7XG5cblxuXG5leHBvcnQge3JlbmRlcmVyfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=