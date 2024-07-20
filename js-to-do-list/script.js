const newTask = document.getElementById('new-task');
const form = document.getElementById('task-form');
const todoUl = document.getElementById('incomplete-items');
const completeUl = document.getElementById('complete-items');

function shiftTask() {
	const li = this.parentNode;
	const ul = li.parentNode;
	const status = ul.getAttribute('id');
	if (status === 'incomplete-items') {
		completeUl.appendChild(li);
	} else if (status === 'complete-items') {
		todoUl.appendChild(li);
	}
}

function editTask() {
	const li = this.parentNode;
	const label = li.querySelector('label');
	const flag = label.contentEditable;
	if (flag === 'true') {
		label.contentEditable = 'false';
	} else {
		label.contentEditable = 'true';
		label.focus();
	}
}

function deleteTask() {
	const li = this.parentNode;
	const ul = li.parentNode;
	ul.removeChild(li);
}

function addTask(event) {
	event.preventDefault();

	const li = document.createElement('li');

	const checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.onchange = shiftTask;

	const label = document.createElement('label');
	label.innerText = newTask.value;

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

	todoUl.appendChild(li);

	newTask.value = '';
}

form.addEventListener('submit', addTask);
