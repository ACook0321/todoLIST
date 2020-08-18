let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]
// console.log('userID'.arrayOfTodos(0).userId)
const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  var ol= document.getElementById("todo-list");
// console.log(ol)
for(let index=0;index<arrayOfTodos.length;index++){
var listItem = document.createElement("li");
const elementTitle = arrayOfTodos[index].title
var listItemText= document.createTextNode(elementTitle);
listItem.appendChild(listItemText);
ol.appendChild(listItem)
}
}