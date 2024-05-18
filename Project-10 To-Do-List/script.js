'use strict'


/*
 Variables
 input: My Input Text Field
 list: ul list that holds all the tasks
 form: for making submission event listener
*/
let input = document.querySelector('input')
let list = document.querySelector('.list')
let form = document.querySelector('.container')

/*
  This the logic of fetching all the old tasks from local storage
  and showing them on screen again.
*/
let storedTasks = JSON.parse(localStorage.getItem("todoTasks"))   // fetching
// looping


if(storedTasks != null){
  for(let i = 0; i < storedTasks.length; i++){
    addevent(null, storedTasks[i])        // adding on screen
  }
}

/*
 This is a function for adding a task into list.
 It will be called in two scnerios:
    1. On form submission --->  e = value  | storedTask = null
    2. On adding a old task ---> e = null | storedTask = {name, status}
*/
function addevent(e, storedTask){
  // if adding task on form submission
  if(e != null){
      e.preventDefault()
  }
  
  let taskName = input.value

  // if adding a stored task
  if(storedTask != null){
    taskName = storedTask.name;
  }

  // creating list item (li) based on the task name
  const listItems = document.createElement('li')
  listItems.innerText = taskName

  // if stored task is coming, and checked status is also true
  // then we will add disable class to above list item (li)
  if(storedTask != null && storedTask.checked === true){
    listItems.classList.add('disable')
  }


  // making check mark icon
  const checkMarkIcon = document.createElement('div')
  checkMarkIcon.innerHTML = '<i class="fa-solid fa-square-check" style="color: #27912a;"></i>'

  // adding event listner on check mark
  checkMarkIcon.addEventListener('click', () => {
    listItems.classList.toggle('disable')
    saveIntoStorage();
  })

    // making trash icon
  const trashIcon = document.createElement('div')
  trashIcon.innerHTML = '<i class="fa-solid fa-trash-can" style="color: #d2290f;"></i>'

   // adding event listner on trash icon
  trashIcon.addEventListener('click', () => {
    listItems.remove()
    saveIntoStorage();
  })

  // adding icons in list
  listItems.appendChild(checkMarkIcon)
  listItems.appendChild(trashIcon)

  list.appendChild(listItems)

  input.value = ''

  // if adding a new task, then we have to update local stortage
  if(storedTask == null)
      saveIntoStorage();
}

/*
  This function is to save all tasks into local storage.
*/
const saveIntoStorage = ()=>{
  let allTasks = []     
  let listTasks = document.querySelectorAll('li');    // getting all li tasks

  // looping over it
  listTasks.forEach((todoItem)=>{ 
    // making object with name and checked status
   let obj = {
    name:todoItem.innerText,
    checked: todoItem.classList.contains('disable')
   }
   
   allTasks.push(obj)   // pushing it into array
  })

  // storing array in local storage
  localStorage.setItem("todoTasks", JSON.stringify(allTasks));

}


// event listener of form
form.addEventListener('submit', addevent)