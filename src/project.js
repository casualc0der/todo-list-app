const project = (title) => {


  let toDoLists = [];

  let addTodoListToProject = (x) => {
    
  toDoLists.push(x);

  }

  let retrieveTodoLists = () => toDoLists;




return { title, addTodoListToProject, retrieveTodoLists }

}


export { project }
