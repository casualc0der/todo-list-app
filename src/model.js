const model = (() => {
  const project = (name) => {
    const todoLists = [];
    const addToDoList = (title, description) => {
      todoLists.push({title, description});
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

export {model};
