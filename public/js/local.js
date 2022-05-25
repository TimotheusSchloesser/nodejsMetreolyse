
let form = document.querySelector('form')
let input = document.querySelector("[name='todo']")
let todoList = document.querySelector('#todos')

let todoStorage = []


form.onsubmit = (e) => {
  e.preventDefault()
  addTodo(input.value) 
  // todoList.append(input.value)
}
function addTodo(todoText) {
  todoStorage.push(todoText)
  todoJson = JSON.stringify(todoStorage)
  localStorage.setItem('todos', todoJson)
  input.value =''
  let li = document.createElement('li')
  li.innerHTML = todoText
  todoList.appendChild
}

mytodos = JSON.parse(localStorage.getItem('todos'))
console.log(mytodos)
mytodos.forEach(todoText => {
  let li = document.createElement('li')
  li.innerHTML = todoText
  todoList.appendChild(li)
});