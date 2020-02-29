const viewController = (()=> {


  const createButton = (text, func) => {

  let button = document.createElement('button');
    button.innerHTML = text; 

    let body = document.getElementsByTagName('body');
    body[0].appendChild(button);

    button.addEventListener('click',()=> func() )

  }


  const createInputForm = () => {
  
  let body = document.getElementsByTagName('body');

    
  const todoInputCard = document.createElement('div');
  todoInputCard.classList.add('inputCard');
  todoInputCard.id= 'inputcard'
  


  const title = document.createElement('input')
  title.placeholder = 'Title';
  title.id = 'title'

  const description = document.createElement('input')
  description.placeholder = 'Description';
  description.id = 'description';
  
  const dueDate = document.createElement('input')
  dueDate.type = 'date';  
  dueDate.placeholder = 'Due Date';
  dueDate.id = 'dueDate';

  const priority = document.createElement('select');

  const highPriority = document.createElement('option');
  highPriority.value = 'high'
  highPriority.innerHTML = 'High'  

  const normalPriority = document.createElement('option');
  normalPriority.value = 'normal'
  normalPriority.innerHTML = 'Normal';  

  const lowPriority = document.createElement('option');
  lowPriority.value = 'low';
  lowPriority.innerHTML = 'Low';  
 
  priority.appendChild(highPriority);
  priority.appendChild(normalPriority);  
  priority.appendChild(lowPriority);  
  priority.id = 'priority'; 

  const addButton = document.createElement('button');
  addButton.id = 'addButton';
  addButton.innerHTML = "Add To-Do";  

  body[0].appendChild(todoInputCard);
  todoInputCard.appendChild(title);
  todoInputCard.appendChild(description);
  todoInputCard.appendChild(dueDate);
  todoInputCard.appendChild(priority);
  todoInputCard.appendChild(addButton);  
    
    } 

    return {

      createButton: createButton,
      createInputForm: createInputForm
}
})();


export { viewController }
