const todoForm = document.querySelector(".to-do-form");
const todoInput = document.querySelector(".to-do__add-input");
const todoList = document.querySelector(".to-do-list");


// const toDoObj = {
//   id: "",
//   content: ""
// }

const toDoLocalStorageManager = {
  localStorageToDoKey: "toDos",
  get: function() {
    const savedToDos = localStorage.getItem(this.localStorageToDoKey); 
    if (savedToDos != null) {
      const parsedToDos = JSON.parse(savedToDos)
      return parsedToDos;
    } else {
      return []
    }
  },
  set: function(toDoObj) {
    const toDos = this.get();
    toDos.push(toDoObj);
    this._update(toDos);
  },
  del: function(toDoId) {
    const toDos = this.get().filter(function(toDoObj) {
      return toDoObj.id !== toDoId;
    });
    this._update(toDos);
  },
  _update: function(toDos) {
    const stringToDo = JSON.stringify(toDos);
    localStorage.setItem(this.localStorageToDoKey, stringToDo);
  }
}

function paintToDo(toDoObj) {
  const li = document.createElement("li");
  li.className = "to-do";
  li.id = toDoObj.id

  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "to-do__del-btn";
  deleteBtn.addEventListener("click", (event) => {
    const target = event.target;
    const li = target.parentElement;
    const ul = li.parentElement;
  
    ul.removeChild(li);

    toDoLocalStorageManager.del(li.id);
  });
  
  const label = document.createElement("label");
  label.innerHTML = toDoObj.content;

  li.appendChild(deleteBtn);
  li.appendChild(label);
  todoList.appendChild(li);
}

document.addEventListener("DOMContentLoaded",  () => {
  const savedToDos = toDoLocalStorageManager.get();

  if (savedToDos.length > 0) {
    savedToDos.forEach(function(toDoObj) {
      paintToDo(toDoObj);
    });
  }

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const toDoObj = {
      id: new Date().getTime().toString(),
      content: todoInput.value
    };
    todoInput.value = "";

    paintToDo(toDoObj);
    toDoLocalStorageManager.set(toDoObj);
  });
});



