'use strict';

let API = 'http://localhost:3000';

function renderThings(list) {
  const template = $("#thingsToDoTemplate").html();
  const container = $('#things');
  list.forEach(item => {
    let newItemHTML = Mustache.render(template, item)
    container.append(newItemHTML);
  });
}

function showThingsToDo() {
  
  
  $.ajax('http://localhost:3000/todo')
    .then(things => {
      renderThings(things);

    })

}

$('document').ready(function () {
  showThingsToDo();
});
