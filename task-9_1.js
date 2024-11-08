document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => renderTask(task.text, task.completed));
}

function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('#taskList li')).map(li => ({
        text: li.querySelector('span').innerText,
        completed: li.classList.contains('done')
    }));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(taskText, completed = false) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = taskText;
    if (completed) li.classList.add('done');
    
    span.addEventListener('click', () => {
        li.classList.toggle('done');
        saveTasks();
    });

    li.appendChild(span);
    document.getElementById('taskList').appendChild(li);
}

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText) {
        renderTask(taskText);
        saveTasks();
        input.value = '';
    }
}