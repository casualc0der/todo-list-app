const viewController = (()=> {


  const createButton = (text, func) => {

  let button = document.createElement('button');
    button.innerHTML = text; 

    let body = document.getElementsByTagName('body');
    body[0].appendChild(button);

    button.addEventListener('click',()=> func() )

  }

    return {

      createButton: createButton

}

})();


export { viewController }
