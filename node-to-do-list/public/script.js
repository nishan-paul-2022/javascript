const newTask = document.getElementById('new-task');
const form = document.getElementById('task-form');
const todoUl = document.getElementById('incomplete-items');
const completeUl = document.getElementById('complete-items');

async function updateTask(id, task, completed) {
	await fetch(`/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ task, completed })
	});
}

function shiftTask() {
	const li = this.parentNode;
	const id = li.dataset.id;
	const completed = this.checked;
	const task = li.querySelector('label').innerText;

	updateTask(id, task, completed);

	if (completed) {
		completeUl.appendChild(li);
	} else {
		todoUl.appendChild(li);
	}
}

function editTask() {
	const li = this.parentNode;
	const label = li.querySelector('label');
	const task = prompt('Edit task:', label.innerText);
	if (task) {
		label.innerText = task;
		const id = li.dataset.id;
		const completed = li.querySelector('input').checked;
		updateTask(id, task, completed);
	}
}

async function deleteTask() {
	const li = this.parentNode;
	const id = li.dataset.id;

	await fetch(`/todos/${id}`, {
		method: 'DELETE'
	});

	li.remove();
}

function createTodoElement(todo) {
	const li = document.createElement('li');
	li.dataset.id = todo.id;

	const checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.checked = todo.completed;
	checkBox.onchange = shiftTask;

	const label = document.createElement('label');
	label.innerText = todo.task;

	const editBtn = document.createElement('button');
	editBtn.innerText = 'Update';
	editBtn.className = 'edit';
	editBtn.onclick = editTask;

	const deleteBtn = document.createElement('button');
	deleteBtn.innerText = 'Delete';
	deleteBtn.className = 'delete';
	deleteBtn.onclick = deleteTask;

	li.appendChild(checkBox);
	li.appendChild(label);
	li.appendChild(editBtn);
	li.appendChild(deleteBtn);

	return li;
}

async function loadTodos() {
	const response = await fetch('/todos');
	const todos = await response.json();
	todos.forEach((todo) => {
		const li = createTodoElement(todo);
		if (todo.completed) {
			completeUl.appendChild(li);
		} else {
			todoUl.appendChild(li);
		}
	});
}

document.addEventListener('DOMContentLoaded', loadTodos);

form.addEventListener('submit', async (event) => {
	event.preventDefault();
	const task = newTask.value;

	const response = await fetch('/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ task })
	});

	const todo = await response.json(); // Get the newly added task data
	const li = createTodoElement(todo); // Create LI for the task
	todoUl.appendChild(li); // Add the LI to the incomplete tasks list

	newTask.value = ''; // Clear the input field
});
