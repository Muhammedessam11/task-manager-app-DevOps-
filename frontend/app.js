const taskList = document.getElementById('task-list');

// Fetch and display tasks
async function fetchTasks() {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.title;
        taskList.appendChild(li);
    });
}

fetchTasks();

// Add a new task
async function addTask() {
    const newTaskTitle = document.getElementById('new-task').value;
    await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTaskTitle })
    });
    document.getElementById('new-task').value = '';
    fetchTasks();
}

