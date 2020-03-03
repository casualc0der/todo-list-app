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
    const submitButton = document.getElementById('toDoForm')
    if(submitButton === undefined) {
      helpers.createButton('Update', () => tester(), 'toDoForm', 'formSubmit')
    }

    console.log(`project number = ${i}`)
    console.log(`current project = ${p}`)
    console.log(`Todolist positon ${x}`)
    const todoTitle = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].title
    const todoDescription = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].description
    const todoDueDate = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].dueDate 
    const todoPiority = _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].priority
    const titleNode = document.getElementById('formTitle');
    const descriptionNode = document.getElementById('formDescription');
    const dueDateNode = document.getElementById('formDueDate');
    const priorityNode = document.getElementById('formPriority');

    todoTitle !== undefined ? titleNode.value = todoTitle : titleNode.placeholder = 'Title';
    todoDescription !== undefined ? descriptionNode.value = todoDescription: descriptionNode.placeholder = 'Add Description';
    todoDueDate !== undefined ? dueDateNode.value = todoDueDate: dueDateNode.placeholder = 'Due Date';
    todoPiority !== undefined ? priorityNode.value = todoPiority: priorityNode.placeholder = 'Priority';

    console.log(_model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x])
  }
  const tester = () => {
    const titleNode = document.getElementById('formTitle');
    const descriptionNode = document.getElementById('formDescription');
    const dueDateNode = document.getElementById('formDueDate');
    const priorityNode = document.getElementById('formPriority');


    clearInputText(descriptionNode.id)
    clearInputText(dueDateNode.id)
    clearInputText(priorityNode.id)
    console.log('form submitted!')
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
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createButton('Update', _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].tester, 'toDoForm', 'formSubmit') 
  const projectInput = document.createElement('input');
  const nodle = document.getElementById('projectAdd');
  nodle.appendChild(projectInput);
  projectInput.id = 'newProjectName';
})();






/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RPTUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFnQzs7QUFFaEM7QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQsOENBQThDLFlBQVk7QUFDMUQ7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQUs7QUFDOUI7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxFQUFFO0FBQy9DLGlEQUFpRCxFQUFFO0FBQ25EOzs7QUFHQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsY0FBYyxpQkFBaUI7QUFDbkUsMkRBQTJELGlCQUFpQjtBQUM1RTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLEVBQUU7QUFDdEMscUNBQXFDLEVBQUU7QUFDdkMsb0NBQW9DLEVBQUU7QUFDdEMsc0JBQXNCLDRDQUFLO0FBQzNCLDRCQUE0Qiw0Q0FBSztBQUNqQyx3QkFBd0IsNENBQUs7QUFDN0Isd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQiw0Q0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUFLO0FBQzFCLDZCO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7QUMvSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDRjtBQUNPOztBQUV4QztBQUNBLGdEQUFnRCxpREFBUTs7QUFFeEQ7O0FBRUEsRUFBRSxzREFBTztBQUNULElBQUksc0RBQU87QUFDWCxJQUFJLCtDQUFLO0FBQ1QsSUFBSSxzREFBTztBQUNYLGlCQUFpQiwrQ0FBSztBQUN0QjtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEMsTUFBTSxzREFBTyxnREFBZ0QsR0FBRztBQUNoRSxNQUFNLHNEQUFPLDRCQUE0QixzREFBTzs7QUFFaEQsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFLHNEQUFPOzs7OztBQUtULENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7O0FDNUJwQjtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNyQjs7Ozs7Ozs7Ozs7OztBQ0R0QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0NBQXNDO0FBQzVEO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFYzs7Ozs7Ozs7Ozs7O0FDeEJmLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBd0M7O0FBRXhDO0FBQ0EsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU8sbUNBQW1DO0FBQzVDLEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTyx3QkFBd0Isc0RBQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSWlCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcblxuY29uc3QgaGVscGVycyA9ICgoKT0+IHtcbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gKHRleHQsIGZ1bmMsIGF0dGFjaElkLCBidXR0b25JZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthdHRhY2hJZH1gKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuICAgIGJ1dHRvbi5pZCA9IGJ1dHRvbklkO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGZ1bmMoKSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVNlY3Rpb24gPSAoc2VjdGlvblR5cGUsIGF0dGFjaElkLCBzZWN0aW9uSWQsIHNlY3Rpb25DbGFzcykgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthdHRhY2hJZH1gKTtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtzZWN0aW9uVHlwZX1gKTtcbiAgICBzZWN0aW9uLmlkID0gc2VjdGlvbklkO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChgJHtzZWN0aW9uQ2xhc3N9YCk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgfTtcbiAgY29uc3QgYWRkSW5uZXJIVE1MID0gKHNlY3Rpb25JZCwgdGV4dCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzZWN0aW9uSWR9YCk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0O1xuICB9O1xuXG4gIGNvbnN0IGNsZWFySW5wdXRUZXh0ID0gKGlucHV0SWQpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XG4gICAgbm9kZS5pbm5lclRleHQgPSAnJztcbiAgICBub2RlLnZhbHVlID0gJyc7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJTZWN0aW9uID0gKHNlY3Rpb25JZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSWQpO1xuICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJUb2RvcyA9IChpKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTGlzdHMnKTtcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0QXJyYXlbaV1cbiAgXG4gICAgY2xlYXJTZWN0aW9uKG5vZGUuaWQpO1xuICAgIGNvbnN0IHRvRG9MaXN0cyA9IGN1cnJlbnRQcm9qZWN0LnJldHJpdmVUb0RvTGlzdHMoKTtcbiAgICBjcmVhdGVTZWN0aW9uKCdkaXYnLCd0b2RvTGlzdHMnLCBgdG9kby0ke2l9YCwgJ3RvZG9DYXJkJyk7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b2RvLSR7aX1gKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgXG4gICAgXG4gICAgdG9Eb0xpc3RzLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0UG9zaXRpb24gPSB0b0RvTGlzdHMuaW5kZXhPZihlKTtcbiAgICAgIGNyZWF0ZVNlY3Rpb24oJ2RpdicsYHRvZG8tJHtpfWAsYGxpc3QtaXRlbSR7dG9kb0xpc3RQb3NpdGlvbn1gLCAnbGlzdEl0ZW0nKVxuICAgICAgY29uc3QgbGlzdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlzdC1pdGVtJHt0b2RvTGlzdFBvc2l0aW9ufWApXG4gICAgICBsaXN0Tm9kZS5pbm5lckhUTUwgPSBlLnRpdGxlO1xuICAgICAgbGlzdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2RvRGV0YWlscyhpLGN1cnJlbnRQcm9qZWN0Lm5hbWUsdG9kb0xpc3RQb3NpdGlvbikpO1xuXG4gICAgfSlcblxuICB9XG5cbiAgY29uc3QgY3JlYXRlTmV3VG9kbyA9ICgpID0+IHtcbiAgICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2lucHV0JywgJ3Byb2plY3RzJywgJ3RpdGxlJywgJ3RvZG9zJyk7XG4gICAgaGVscGVycy5jcmVhdGVCdXR0b24oJ0FkZCBUb2RvJywgaGVscGVycy50ZXN0RnVuYyAsICdwcm9qZWN0cycsICd0b2RvcycgKVxuXG4gIH1cblxuICBjb25zdCBtb2RhbE1lbnUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvTW9kYWwnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9DbG9zZScpO1xuICAgIHNwYW4ub25jbGljayA9ICgpID0+IG1vZGFsLnN0eWxlLmRpc3BsYXkgPSdub25lJztcbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgaWYoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIH1cblxuICBjb25zdCB0b2RvRGV0YWlscyA9IChpLCBwLCB4KSA9PiB7XG4gICAgbW9kYWxNZW51KCk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Gb3JtJylcbiAgICBpZihzdWJtaXRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGVscGVycy5jcmVhdGVCdXR0b24oJ1VwZGF0ZScsICgpID0+IHRlc3RlcigpLCAndG9Eb0Zvcm0nLCAnZm9ybVN1Ym1pdCcpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYHByb2plY3QgbnVtYmVyID0gJHtpfWApXG4gICAgY29uc29sZS5sb2coYGN1cnJlbnQgcHJvamVjdCA9ICR7cH1gKVxuICAgIGNvbnNvbGUubG9nKGBUb2RvbGlzdCBwb3NpdG9uICR7eH1gKVxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKVtpXS5yZXRyaXZlVG9Eb0xpc3RzKClbeF0udGl0bGVcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKClbaV0ucmV0cml2ZVRvRG9MaXN0cygpW3hdLmRlc2NyaXB0aW9uXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKClbaV0ucmV0cml2ZVRvRG9MaXN0cygpW3hdLmR1ZURhdGUgXG4gICAgY29uc3QgdG9kb1Bpb3JpdHkgPSBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKClbaV0ucmV0cml2ZVRvRG9MaXN0cygpW3hdLnByaW9yaXR5XG4gICAgY29uc3QgdGl0bGVOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UaXRsZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkdWVEYXRlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRHVlRGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtUHJpb3JpdHknKTtcblxuICAgIHRvZG9UaXRsZSAhPT0gdW5kZWZpbmVkID8gdGl0bGVOb2RlLnZhbHVlID0gdG9kb1RpdGxlIDogdGl0bGVOb2RlLnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcbiAgICB0b2RvRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IGRlc2NyaXB0aW9uTm9kZS52YWx1ZSA9IHRvZG9EZXNjcmlwdGlvbjogZGVzY3JpcHRpb25Ob2RlLnBsYWNlaG9sZGVyID0gJ0FkZCBEZXNjcmlwdGlvbic7XG4gICAgdG9kb0R1ZURhdGUgIT09IHVuZGVmaW5lZCA/IGR1ZURhdGVOb2RlLnZhbHVlID0gdG9kb0R1ZURhdGU6IGR1ZURhdGVOb2RlLnBsYWNlaG9sZGVyID0gJ0R1ZSBEYXRlJztcbiAgICB0b2RvUGlvcml0eSAhPT0gdW5kZWZpbmVkID8gcHJpb3JpdHlOb2RlLnZhbHVlID0gdG9kb1Bpb3JpdHk6IHByaW9yaXR5Tm9kZS5wbGFjZWhvbGRlciA9ICdQcmlvcml0eSc7XG5cbiAgICBjb25zb2xlLmxvZyhtb2RlbC5yZXRyaWV2ZVByb2plY3RzKClbaV0ucmV0cml2ZVRvRG9MaXN0cygpW3hdKVxuICB9XG4gIGNvbnN0IHRlc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRpdGxlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1EZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGR1ZURhdGVOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1EdWVEYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Qcmlvcml0eScpO1xuXG5cbiAgICBjbGVhcklucHV0VGV4dChkZXNjcmlwdGlvbk5vZGUuaWQpXG4gICAgY2xlYXJJbnB1dFRleHQoZHVlRGF0ZU5vZGUuaWQpXG4gICAgY2xlYXJJbnB1dFRleHQocHJpb3JpdHlOb2RlLmlkKVxuICAgIGNvbnNvbGUubG9nKCdmb3JtIHN1Ym1pdHRlZCEnKVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Nb2RhbCcpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuXG5cblxuICBjb25zdCB0ZXN0RnVuYyA9ICgpID0+IHtcbiAgXG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9DYXJkJylcbiAgICBpZighbm9kZVswXSkgeyByZXR1cm4gfSAvL2FkZCBlcnJvciBtZXNzYWdlXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgY29uc3QgY3VycmVudFRvZG8gPSBub2RlWzBdLmlkO1xuICAgIGNvbnN0IHRvZG9JRCA9IHBhcnNlSW50KGN1cnJlbnRUb2RvLnNsaWNlKDUpKVxuICAgIGNvbnN0IHByb2plY3RzID0gbW9kZWwucmV0cmlldmVQcm9qZWN0cygpXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZSkgPT4geyBcbiAgICAgIGlmKHRvZG9JRCA9PT0gcHJvamVjdHMuaW5kZXhPZihlKSkge1xuICAgICAgICBpZighdG9kb1RpdGxlLnZhbHVlKSB7IHJldHVybiB9OyAvL2FkZCBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgZS5hZGRUb0RvTGlzdCh0b2RvVGl0bGUudmFsdWUpO1xuICAgICAgICAgIHJlbmRlclRvZG9zKHRvZG9JRCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gIGhlbHBlcnMuY2xlYXJJbnB1dFRleHQoJ3RpdGxlJyk7XG5cbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVCdXR0b24sXG4gICAgY3JlYXRlU2VjdGlvbixcbiAgICBhZGRJbm5lckhUTUwsXG4gICAgY2xlYXJJbnB1dFRleHQsXG4gICAgY2xlYXJTZWN0aW9uLCBcbiAgICByZW5kZXJUb2RvcyxcbiAgICBjcmVhdGVOZXdUb2RvLFxuICAgIHRlc3RGdW5jLFxuICAgIHRlc3RlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7aGVscGVyc307XG4iLCJpbXBvcnQge3JlbmRlcmVyfSBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0IHttb2RlbH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQge2hlbHBlcnN9IGZyb20gJy4vRE9NSGVscGVycy5qcyc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVuZGVyZXIpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3ROYW1lJyk7XG5cbiAgaGVscGVycy5jcmVhdGVCdXR0b24oJ0FkZCBwcm9qZWN0JywgKCkgPT4ge1xuICAgIGhlbHBlcnMuY2xlYXJTZWN0aW9uKCdwcm9qZWN0QXJlYScpO1xuICAgIG1vZGVsLmNyZWF0ZVByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICAgIGhlbHBlcnMuY2xlYXJJbnB1dFRleHQoJ25ld1Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgZGF0YSA9IG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKTtcbiAgICBkYXRhLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gYCR7ZGF0YS5pbmRleE9mKGUpfWA7XG4gICAgICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdwcm9qZWN0QXJlYScsIGBwcm9qZWN0LSR7aWR9YCwgJ3gnKTtcbiAgICAgIGhlbHBlcnMuY3JlYXRlQnV0dG9uKGUubmFtZSwgKCkgPT4gaGVscGVycy5yZW5kZXJUb2RvcyhkYXRhLmluZGV4T2YoZSkpLCAncHJvamVjdEFyZWEnLCBlLm5hbWUpO1xuICAgICAgXG4gICAgfSk7XG4gIH0sICdwcm9qZWN0QWRkJywgJ2J1dHRvbnMnKTtcbiAgaGVscGVycy5jcmVhdGVOZXdUb2RvKCk7XG5cblxuICBcblxufSkoKTtcblxuZXhwb3J0IHtjb250cm9sbGVyfTtcbiIsImltcG9ydCB7Y29udHJvbGxlcn0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuIiwiY29uc3QgbW9kZWwgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBbXTtcbiAgICBjb25zdCBhZGRUb0RvTGlzdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICB0b2RvTGlzdHMucHVzaCh7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX0pO1xuICAgIH07XG4gICAgY29uc3QgcmV0cml2ZVRvRG9MaXN0cyA9ICgpID0+IHRvZG9MaXN0cztcblxuICAgIHJldHVybiB7bmFtZSwgcmV0cml2ZVRvRG9MaXN0cywgYWRkVG9Eb0xpc3R9O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChuYW1lKTtcbiAgICBwcm9qZWN0TGlzdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgfTtcbiAgY29uc3QgcHJvamVjdExpc3RzID0gW107XG4gIGNvbnN0IHJldHJpZXZlUHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0TGlzdHM7XG5cbiAgcmV0dXJuIHtjcmVhdGVQcm9qZWN0LCByZXRyaWV2ZVByb2plY3RzfTtcbn0pKCk7XG5cbmV4cG9ydCB7bW9kZWx9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHtoZWxwZXJzfSBmcm9tICcuL0RPTUhlbHBlcnMuanMnO1xuXG5jb25zdCByZW5kZXJlciA9ICgoKSA9PiB7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ21haW4tY29udGVudCcsICd0b2RvTGlzdHMnLCAndG9kb3MnKTtcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCAnbWFpbi1jb250ZW50JywgJ3Byb2plY3RzJywgJ3Byb2plY3RzJyk7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ21haW4tY29udGVudCcsICdwcm9qZWN0QWRkJywgJ3Byb2plY3RBZGQnKTtcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCAnbWFpbi1jb250ZW50JywgJ3Byb2plY3RBcmVhJywgJ3Byb2plY3RzJyk7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ21haW4tY29udGVudCcsICd0b0RvTW9kYWwnLCAnbW9kYWwnKTtcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCd0b0RvTW9kYWwnLCAndG9Eb01vZGFsQ29udGVudCcsICdtb2RhbC1jb250ZW50JylcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdzcGFuJywgJ3RvRG9Nb2RhbENvbnRlbnQnLCAndG9kb0Nsb3NlJywgJ2Nsb3NlJyk7XG4gIGhlbHBlcnMuYWRkSW5uZXJIVE1MKCd0b2RvQ2xvc2UnLCAnJnRpbWVzOycpO1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICd0b0RvTW9kYWxDb250ZW50JywgJ3RvRG9Gb3JtJywgJ2Zvcm0nKVxuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2lucHV0JywgJ3RvRG9Gb3JtJywgJ2Zvcm1UaXRsZScsICd0b2RvZm9ybScpXG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignaW5wdXQnLCAndG9Eb0Zvcm0nLCAnZm9ybURlc2NyaXB0aW9uJywgJ3RvZG9mb3JtJylcbiAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdpbnB1dCcsICd0b0RvRm9ybScsICdmb3JtRHVlRGF0ZScsICd0b2RvZm9ybScpXG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignaW5wdXQnLCAndG9Eb0Zvcm0nLCAnZm9ybVByaW9yaXR5JywgJ3RvZG9mb3JtJylcbiAgaGVscGVycy5jcmVhdGVCdXR0b24oJ1VwZGF0ZScsIGhlbHBlcnMudGVzdGVyLCAndG9Eb0Zvcm0nLCAnZm9ybVN1Ym1pdCcpIFxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBub2RsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0QWRkJyk7XG4gIG5vZGxlLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gIHByb2plY3RJbnB1dC5pZCA9ICduZXdQcm9qZWN0TmFtZSc7XG59KSgpO1xuXG5cblxuZXhwb3J0IHtyZW5kZXJlcn07XG4iXSwic291cmNlUm9vdCI6IiJ9