const todoList = (() => {

  const todoSavedList = [];

  const createTodoItem = (title, description, dueDate, priority) => {

    return { title, description, dueDate, priority }
    



  }


const saveTodoList = () => todoList.push(createTodoItem); 


const retrieveTodoSavedList = () => todoSavedList;






return { createTodoItem:createTodoItem, retrieveTodoSavedList: retrieveTodoSavedList  }




})();
