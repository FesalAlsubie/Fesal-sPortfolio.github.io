const addTaskBtn = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const tasksList = document.getElementById('tasks');

addTaskBtn.addEventListener('click', function() {
  const taskText = newTaskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'delete';
  deleteBtn.onclick = function() {
    tasksList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  tasksList.appendChild(li);

  newTaskInput.value = '';
  newTaskInput.focus();
});

newTaskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});
