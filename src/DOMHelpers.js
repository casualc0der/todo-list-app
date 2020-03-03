import { model } from "./model";

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
    const projectArray = model.retrieveProjects();
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
    const todoTitle = model.retrieveProjects()[i].retriveToDoLists()[x].title
    const todoDescription = model.retrieveProjects()[i].retriveToDoLists()[x].description
    const todoDueDate = model.retrieveProjects()[i].retriveToDoLists()[x].dueDate 
    const todoPiority = model.retrieveProjects()[i].retriveToDoLists()[x].priority
    const titleNode = document.getElementById('formTitle');
    const descriptionNode = document.getElementById('formDescription');
    const dueDateNode = document.getElementById('formDueDate');
    const priorityNode = document.getElementById('formPriority');

    todoTitle !== undefined ? titleNode.value = todoTitle : titleNode.placeholder = 'Title';
    todoDescription !== undefined ? descriptionNode.value = todoDescription: descriptionNode.placeholder = 'Add Description';
    todoDueDate !== undefined ? dueDateNode.value = todoDueDate: dueDateNode.placeholder = 'Due Date';
    todoPiority !== undefined ? priorityNode.value = todoPiority: priorityNode.placeholder = 'Priority';

    console.log(model.retrieveProjects()[i].retriveToDoLists()[x])
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
    const projects = model.retrieveProjects()
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

export {helpers};
