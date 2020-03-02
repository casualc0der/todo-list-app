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

  return {
    createButton,
    createSection,
    addInnerHTML,
    clearInputText,
    clearSection};
})();

export {helpers};
