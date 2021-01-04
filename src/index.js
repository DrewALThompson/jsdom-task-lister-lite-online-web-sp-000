document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementByTagName('form');
  
  form.addEventListener("submit", function(event) => {
    event.preventDefault();
  })
});
