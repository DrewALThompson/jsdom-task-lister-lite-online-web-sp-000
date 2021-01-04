document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let input = document.getElementById('new-task-description').value;
    
    let liItem = document.createElement('li');
    
    let ulAll = document.querySelector('ul');
    if (input.value != '') {
      liItem.innerText = input;
      ulAll.append(liItem);
      input = '';
    };
    
  })
});
