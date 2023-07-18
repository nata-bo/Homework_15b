//Необходимо получить массив объектов ToDO с сервера
// https://jsonplaceholder.typicode.com/users/1/todos
// используя fetch (см. код написанный в классе)
// и отобразить их на странице

let url = "https://jsonplaceholder.typicode.com/users/1/todos";


function loadToDo() {
    let response = fetch(url);
  
    response.then((response)=> {
      dataPromise = response.json();
  
      dataPromise.then((res)=> {
        document.getElementById('todoList').innerHTML = '';
  
        res.forEach((todo) => {
          createToDoElement(todo);
        });
      });
    });
  }
  function createToDoElement(todo) {
    let todoElement = document.createElement('li');
    todoElement.innerHTML = todo.title;
  
    document.getElementById('todoList').appendChild(todoElement);
  }
  
  loadToDo();
