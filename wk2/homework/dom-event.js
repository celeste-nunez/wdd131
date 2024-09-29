// events.js
let tasks = [];

function taskTemplate(task) {
  return  `<li ${task.completed ? 'class="strike"' : ""}>
    <p>${task.detail}</p>
    <div>
      <span data-action="delete">❎</span>
      <span data-action="complete">✅</span>
    </div>
  </li>`;
}

function renderTasks(tasks) {
  // get the list element from the DOM
  const listElement = document.querySelector('#todoList');
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  const html = tasks.map(taskTemplate);
  // console.log(html);
  listElement.innerHTML = html.join('');
}

function newTask() {
  // get the value entered into the #todo input
    const todoElement = document.querySelector('#todo');
  // add it to our arrays tasks
    const newTask = {detail: todoElement.value, completed: false };
    tasks.push(newTask);
  // render out the list
    renderTasks(tasks);
    todoElement.value = '';
}

function removeTask(taskElement) {
  // Note the use of Array.filter to remove the element from our task array
  // Notice also how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
    const taskDetail = taskElement.querySelector('p').innerText;
    tasks = tasks.filter(task => task.detail !== taskDetail);
    taskElement.remove();
    console.log('Task removed:', taskDetail);

  // this line removes the HTML element from the DOM
}

function completeTask(taskElement) {
  const taskDetail = taskElement.querySelector('p').innerText;
  const taskIndex = tasks.findIndex(task => task.detail === taskDetail);

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    taskElement.classList.toggle("strike");
    console.log(tasks);
  }
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  // console.log(event.target);
  // console.log(event.currentTarget);
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't

  // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
  const action = event.target.dataset.action;

  if (!action) return;

  const taskElement = event.target.closest('li');
  if (!taskElement) return;

  if (action === 'delete') {
    removeTask(taskElement);
  } else if (action === 'complete') {
    completeTask(taskElement);
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    newTask();
  }
}


// Add your event listeners here
// We need to attach listeners to the submit button and the list

document.querySelector('#submitTask').addEventListener('click', newTask);
document.querySelector('#todo').addEventListener('keypress', handleKeyPress);
document.querySelector('#todoList').addEventListener('click', manageTasks);
