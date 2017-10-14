function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const rButton = document.getElementById('removeButton');

  function createNewToDo () {
      const newToDoText = document.getElementById('newToDoText');

      if(!newToDoText) { return }

      toDos.push({
        title: newToDoText.value,
        complete: false
      });

      newToDoText.value = "";

      renderTheUI(toDos);
  }

  rButton.onclick = function removeCompletedTasks() {
    var removeItemsArray = [];
    for (var i = 0; i < toDos.length; i++) {
      alert(toDos[i].complete)
      if (toDos[i].complete == true) {
        removeItemsArray.push(i);
      }
    }
    if (removeItemsArray.length > 0){
      for (var i = removeItemsArray.length - 1; i >= 0; i--) {
        alert(removeItemsArray[i]);
        toDos.splice(removeItemsArray[i], 1);
      }
    }
    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {

    const todoList = document.getElementById('toDoList');

    todoList.textContent = '';

    toDos.forEach(function(toDo) {

      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const button = document.createElement('button');


      checkbox.type = "checkbox";

      checkbox.onchange = function(){
        var pNode = button.parentNode;
        var todoText = pNode.textContent.replace("Remove ToDo", "");
        console.log("toDos count: " + toDos.length);
        for (var i = 0; i < toDos.length; i++){
          var title = toDos[i].title;
          console.log(title);
          if (toDos[i].title === todoText) {
            toDos[i].complete = checkbox.checked;
            console.log(toDos[i].title + " is completed: " + toDos[i].complete);
          }
        }
      }

      button.onclick = function(){
        var pNode = button.parentNode;
        var todoText = pNode.textContent.replace("Remove ToDo", "");
        var removeIndex = 0;
        console.log("toDos count: " + toDos.length);
        for (var i = 0; i < toDos.length; i++){
          var title = toDos[i].title;
          console.log(title);
          if (toDos[i].title === todoText) {
            removeIndex = i;
          }
        }
        toDos.splice(removeIndex, 1);
        console.log(removeIndex);
        console.log("toDos count: " + toDos.length);
        renderTheUI(toDos);
      }

      var newLiTitle = document.createTextNode(toDo.title);
      newLi.appendChild(checkbox);
      newLi.appendChild(newLiTitle);
      button.textContent = "Remove ToDo";
      newLi.appendChild(button);
      todoList.appendChild(newLi);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
}
