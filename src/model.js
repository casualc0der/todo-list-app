const model = (() => {

  const project = (name) => {

    let todoLists = [];

    const addToDoList = (title, description) => {

      todoLists.push({title, description})
    }


    const retriveToDoLists = () => console.log(todoLists);
   
  
    return { name, retriveToDoLists, addToDoList };
  
  }

  const createProject = (name) => {
    if(!name) {
      return;
    }
    let newProject = project(name);
    projectLists.push(newProject);
  }


   let projectLists = [];

  const retrieveProjects = () => projectLists;

  return { createProject, retrieveProjects }
})();


export {model};
