document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let input = (document.getElementById('new-task-description')).value;
    
    let liItem = document.createElement('li');
    liItem.innerText = input;
    
    let ulAll = document.querySelector('ul');
    ulAll.append(liItem);
    input = '';
  })
});
