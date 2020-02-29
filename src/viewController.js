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
  highPriority.innerHTML = 'high'  
  const normalPriority = document.createElement('option');
  normalPriority.value = 'normal'
  normalPriority.innerHTML = 'normal';  
  const lowPriority = document.createElement('option');
  lowPriority.value = 'low';
  lowPriority.innerHTML = 'low';  
 
  priority.appendChild(highPriority);
  priority.appendChild(normalPriority);  
  priority.appendChild(lowPriority);  
  

  priority.id = 'priority';  

   
    body[0].appendChild(title);
    body[0].appendChild(description);
    body[0].appendChild(dueDate);
    body[0].appendChild(priority);
    
  


    
    } 

    return {

      createButton: createButton,
      createInputForm: createInputForm

}




})();


export { viewController }
