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
      listNode.addEventListener('click', () => test(i,currentProject.name,todoListPosition));

    })

  }

  const createNewTodo = () => {
    helpers.createSection('input', 'projects', 'title', 'todos');
    helpers.createButton('Add Todo', helpers.testFunc , 'projects', 'todos' )

  }

  const test = (i, p, x) => {
    console.log(`project number = ${i}`)
    console.log(`current project = ${p}`)
    console.log(`Todolist positon ${x}`)

    _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].description = 'hello'
    _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].dueDate = '19/03/2020'
    _model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x].priority = 'High'
    console.log(_model__WEBPACK_IMPORTED_MODULE_0__["model"].retrieveProjects()[i].retriveToDoLists()[x])
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
  _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__["helpers"].createSection('div', 'main-content', 'toDoModal', 'modalContent');
  
  const projectInput = document.createElement('input');
  const nodle = document.getElementById('projectAdd');
  nodle.appendChild(projectInput);
  projectInput.id = 'newProjectName';
})();






/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RPTUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFnQzs7QUFFaEM7QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQsOENBQThDLFlBQVk7QUFDMUQ7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQUs7QUFDOUI7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxFQUFFO0FBQy9DLGlEQUFpRCxFQUFFO0FBQ25EOzs7QUFHQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsY0FBYyxpQkFBaUI7QUFDbkUsMkRBQTJELGlCQUFpQjtBQUM1RTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0NBQW9DLEVBQUU7QUFDdEMscUNBQXFDLEVBQUU7QUFDdkMsb0NBQW9DLEVBQUU7O0FBRXRDLElBQUksNENBQUs7QUFDVCxJQUFJLDRDQUFLO0FBQ1QsSUFBSSw0Q0FBSztBQUNULGdCQUFnQiw0Q0FBSztBQUNyQjs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBSztBQUMxQiw2QjtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVnQjs7Ozs7Ozs7Ozs7OztBQy9HakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNGO0FBQ087O0FBRXhDO0FBQ0EsZ0RBQWdELGlEQUFROztBQUV4RDs7QUFFQSxFQUFFLHNEQUFPO0FBQ1QsSUFBSSxzREFBTztBQUNYLElBQUksK0NBQUs7QUFDVCxJQUFJLHNEQUFPO0FBQ1gsaUJBQWlCLCtDQUFLO0FBQ3RCO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQyxNQUFNLHNEQUFPLGdEQUFnRCxHQUFHO0FBQ2hFLE1BQU0sc0RBQU8sNEJBQTRCLHNEQUFPOztBQUVoRCxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsc0RBQU87Ozs7O0FBS1QsQ0FBQzs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7QUM1QnBCO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ3JCOzs7Ozs7Ozs7Ozs7O0FDRHRCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQ0FBc0M7QUFDNUQ7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVjOzs7Ozs7Ozs7Ozs7QUN4QmYsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUF3Qzs7QUFFeEM7QUFDQSxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVCxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJaUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgbW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xuXG5jb25zdCBoZWxwZXJzID0gKCgpPT4ge1xuICBjb25zdCBjcmVhdGVCdXR0b24gPSAodGV4dCwgZnVuYywgYXR0YWNoSWQsIGJ1dHRvbklkKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2F0dGFjaElkfWApO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG4gICAgYnV0dG9uLmlkID0gYnV0dG9uSWQ7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IHRleHQ7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZnVuYygpKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2VjdGlvbiA9IChzZWN0aW9uVHlwZSwgYXR0YWNoSWQsIHNlY3Rpb25JZCwgc2VjdGlvbkNsYXNzKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2F0dGFjaElkfWApO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3NlY3Rpb25UeXBlfWApO1xuICAgIHNlY3Rpb24uaWQgPSBzZWN0aW9uSWQ7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGAke3NlY3Rpb25DbGFzc31gKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICB9O1xuICBjb25zdCBhZGRJbm5lckhUTUwgPSAoc2VjdGlvbklkLCB0ZXh0KSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NlY3Rpb25JZH1gKTtcbiAgICBub2RlLmlubmVySFRNTCA9IHRleHQ7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJJbnB1dFRleHQgPSAoaW5wdXRJZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcbiAgICBub2RlLmlubmVyVGV4dCA9ICcnO1xuICAgIG5vZGUudmFsdWUgPSAnJztcbiAgfTtcblxuICBjb25zdCBjbGVhclNlY3Rpb24gPSAoc2VjdGlvbklkKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XG4gICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRvZG9zID0gKGkpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0cycpO1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IG1vZGVsLnJldHJpZXZlUHJvamVjdHMoKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RBcnJheVtpXVxuICBcbiAgICBjbGVhclNlY3Rpb24obm9kZS5pZCk7XG4gICAgY29uc3QgdG9Eb0xpc3RzID0gY3VycmVudFByb2plY3QucmV0cml2ZVRvRG9MaXN0cygpO1xuICAgIGNyZWF0ZVNlY3Rpb24oJ2RpdicsJ3RvZG9MaXN0cycsIGB0b2RvLSR7aX1gLCAndG9kb0NhcmQnKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvZG8tJHtpfWApO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICBcbiAgICBcbiAgICB0b0RvTGlzdHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgdG9kb0xpc3RQb3NpdGlvbiA9IHRvRG9MaXN0cy5pbmRleE9mKGUpO1xuICAgICAgY3JlYXRlU2VjdGlvbignZGl2JyxgdG9kby0ke2l9YCxgbGlzdC1pdGVtJHt0b2RvTGlzdFBvc2l0aW9ufWAsICdsaXN0SXRlbScpXG4gICAgICBjb25zdCBsaXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaXN0LWl0ZW0ke3RvZG9MaXN0UG9zaXRpb259YClcbiAgICAgIGxpc3ROb2RlLmlubmVySFRNTCA9IGUudGl0bGU7XG4gICAgICBsaXN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRlc3QoaSxjdXJyZW50UHJvamVjdC5uYW1lLHRvZG9MaXN0UG9zaXRpb24pKTtcblxuICAgIH0pXG5cbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAoKSA9PiB7XG4gICAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdpbnB1dCcsICdwcm9qZWN0cycsICd0aXRsZScsICd0b2RvcycpO1xuICAgIGhlbHBlcnMuY3JlYXRlQnV0dG9uKCdBZGQgVG9kbycsIGhlbHBlcnMudGVzdEZ1bmMgLCAncHJvamVjdHMnLCAndG9kb3MnIClcblxuICB9XG5cbiAgY29uc3QgdGVzdCA9IChpLCBwLCB4KSA9PiB7XG4gICAgY29uc29sZS5sb2coYHByb2plY3QgbnVtYmVyID0gJHtpfWApXG4gICAgY29uc29sZS5sb2coYGN1cnJlbnQgcHJvamVjdCA9ICR7cH1gKVxuICAgIGNvbnNvbGUubG9nKGBUb2RvbGlzdCBwb3NpdG9uICR7eH1gKVxuXG4gICAgbW9kZWwucmV0cmlldmVQcm9qZWN0cygpW2ldLnJldHJpdmVUb0RvTGlzdHMoKVt4XS5kZXNjcmlwdGlvbiA9ICdoZWxsbydcbiAgICBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKClbaV0ucmV0cml2ZVRvRG9MaXN0cygpW3hdLmR1ZURhdGUgPSAnMTkvMDMvMjAyMCdcbiAgICBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKClbaV0ucmV0cml2ZVRvRG9MaXN0cygpW3hdLnByaW9yaXR5ID0gJ0hpZ2gnXG4gICAgY29uc29sZS5sb2cobW9kZWwucmV0cmlldmVQcm9qZWN0cygpW2ldLnJldHJpdmVUb0RvTGlzdHMoKVt4XSlcbiAgfVxuXG4gIGNvbnN0IHRlc3RGdW5jID0gKCkgPT4ge1xuICBcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kb0NhcmQnKVxuICAgIGlmKCFub2RlWzBdKSB7IHJldHVybiB9IC8vYWRkIGVycm9yIG1lc3NhZ2VcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IG5vZGVbMF0uaWQ7XG4gICAgY29uc3QgdG9kb0lEID0gcGFyc2VJbnQoY3VycmVudFRvZG8uc2xpY2UoNSkpXG4gICAgY29uc3QgcHJvamVjdHMgPSBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKClcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlKSA9PiB7IFxuICAgICAgaWYodG9kb0lEID09PSBwcm9qZWN0cy5pbmRleE9mKGUpKSB7XG4gICAgICAgIGlmKCF0b2RvVGl0bGUudmFsdWUpIHsgcmV0dXJuIH07IC8vYWRkIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICBlLmFkZFRvRG9MaXN0KHRvZG9UaXRsZS52YWx1ZSk7XG4gICAgICAgICAgcmVuZGVyVG9kb3ModG9kb0lEKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgaGVscGVycy5jbGVhcklucHV0VGV4dCgndGl0bGUnKTtcblxuICB9XG5cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUJ1dHRvbixcbiAgICBjcmVhdGVTZWN0aW9uLFxuICAgIGFkZElubmVySFRNTCxcbiAgICBjbGVhcklucHV0VGV4dCxcbiAgICBjbGVhclNlY3Rpb24sIFxuICAgIHJlbmRlclRvZG9zLFxuICAgIGNyZWF0ZU5ld1RvZG8sXG4gICAgdGVzdEZ1bmMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQge2hlbHBlcnN9O1xuIiwiaW1wb3J0IHtyZW5kZXJlcn0gZnJvbSAnLi92aWV3LmpzJztcbmltcG9ydCB7bW9kZWx9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IHtoZWxwZXJzfSBmcm9tICcuL0RPTUhlbHBlcnMuanMnO1xuXG5jb25zdCBjb250cm9sbGVyID0gKCgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJlbmRlcmVyKTtcblxuICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0TmFtZScpO1xuXG4gIGhlbHBlcnMuY3JlYXRlQnV0dG9uKCdBZGQgcHJvamVjdCcsICgpID0+IHtcbiAgICBoZWxwZXJzLmNsZWFyU2VjdGlvbigncHJvamVjdEFyZWEnKTtcbiAgICBtb2RlbC5jcmVhdGVQcm9qZWN0KG5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgICBoZWxwZXJzLmNsZWFySW5wdXRUZXh0KCduZXdQcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IGRhdGEgPSBtb2RlbC5yZXRyaWV2ZVByb2plY3RzKCk7XG4gICAgZGF0YS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGAke2RhdGEuaW5kZXhPZihlKX1gO1xuICAgICAgaGVscGVycy5jcmVhdGVTZWN0aW9uKCdkaXYnLCAncHJvamVjdEFyZWEnLCBgcHJvamVjdC0ke2lkfWAsICd4Jyk7XG4gICAgICBoZWxwZXJzLmNyZWF0ZUJ1dHRvbihlLm5hbWUsICgpID0+IGhlbHBlcnMucmVuZGVyVG9kb3MoZGF0YS5pbmRleE9mKGUpKSwgJ3Byb2plY3RBcmVhJywgZS5uYW1lKTtcbiAgICAgIFxuICAgIH0pO1xuICB9LCAncHJvamVjdEFkZCcsICdidXR0b25zJyk7XG4gIGhlbHBlcnMuY3JlYXRlTmV3VG9kbygpO1xuXG5cbiAgXG5cbn0pKCk7XG5cbmV4cG9ydCB7Y29udHJvbGxlcn07XG4iLCJpbXBvcnQge2NvbnRyb2xsZXJ9IGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbiIsImNvbnN0IG1vZGVsID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gW107XG4gICAgY29uc3QgYWRkVG9Eb0xpc3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgdG9kb0xpc3RzLnB1c2goe3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9KTtcbiAgICB9O1xuICAgIGNvbnN0IHJldHJpdmVUb0RvTGlzdHMgPSAoKSA9PiB0b2RvTGlzdHM7XG5cbiAgICByZXR1cm4ge25hbWUsIHJldHJpdmVUb0RvTGlzdHMsIGFkZFRvRG9MaXN0fTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QobmFtZSk7XG4gICAgcHJvamVjdExpc3RzLnB1c2gobmV3UHJvamVjdCk7XG4gIH07XG4gIGNvbnN0IHByb2plY3RMaXN0cyA9IFtdO1xuICBjb25zdCByZXRyaWV2ZVByb2plY3RzID0gKCkgPT4gcHJvamVjdExpc3RzO1xuXG4gIHJldHVybiB7Y3JlYXRlUHJvamVjdCwgcmV0cmlldmVQcm9qZWN0c307XG59KSgpO1xuXG5leHBvcnQge21vZGVsfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7aGVscGVyc30gZnJvbSAnLi9ET01IZWxwZXJzLmpzJztcblxuY29uc3QgcmVuZGVyZXIgPSAoKCkgPT4ge1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdtYWluLWNvbnRlbnQnLCAndG9kb0xpc3RzJywgJ3RvZG9zJyk7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ21haW4tY29udGVudCcsICdwcm9qZWN0cycsICdwcm9qZWN0cycpO1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdtYWluLWNvbnRlbnQnLCAncHJvamVjdEFkZCcsICdwcm9qZWN0QWRkJyk7XG4gIGhlbHBlcnMuY3JlYXRlU2VjdGlvbignZGl2JywgJ21haW4tY29udGVudCcsICdwcm9qZWN0QXJlYScsICdwcm9qZWN0cycpO1xuICBoZWxwZXJzLmNyZWF0ZVNlY3Rpb24oJ2RpdicsICdtYWluLWNvbnRlbnQnLCAndG9Eb01vZGFsJywgJ21vZGFsQ29udGVudCcpO1xuICBcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3Qgbm9kbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEFkZCcpO1xuICBub2RsZS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICBwcm9qZWN0SW5wdXQuaWQgPSAnbmV3UHJvamVjdE5hbWUnO1xufSkoKTtcblxuXG5cbmV4cG9ydCB7cmVuZGVyZXJ9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==