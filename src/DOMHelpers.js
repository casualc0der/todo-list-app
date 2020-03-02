const helpers = (()=> {
  const createButton = (text, func, attachId, buttonId) => {
    const node = document.getElementById(`${attachId}`);
    const button = document.createElement('button');
    button.classList.add('xxx');
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

  const renderTodos = (project) => {
    console.log(project)
    const node = document.getElementById('todoLists');
    clearSection(node.id);
    const toDoLists = project.retriveToDoLists();
    createSection('div','todoLists', project.name, 'todoCard');
    const list = document.getElementById(project.name);
    node.appendChild(list);
  
    list.innerHTML = toDoLists;

  }

  return {
    createButton,
    createSection,
    addInnerHTML,
    clearInputText,
    clearSection, 
    renderTodos};
})();

export {helpers};
