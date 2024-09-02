/** @format */

function addTask() {
	const taskInput = document.getElementById('task');
	const taskText = taskInput.value.trim();

	if (taskText === '') {
		alert('Por favor, entre com uma tarefa!');
		return; // Sai da função se a tarefa estiver vazia
	}

	if (taskText !== '') {
		const taskList = document.getElementById('todo-list');

		const listItem = document.createElement('li');

		const completeButton = document.createElement('button');
		completeButton.id = 'completeButton';
		completeButton.textContent = '✔️';
		completeButton.onclick = function () {
			taskSpan.classList.toggle('completed');
		};

		const taskSpan = document.createElement('span');
		taskSpan.id = 'taskText';
		taskSpan.textContent = taskText;

		const deleteButton = document.createElement('button');
		deleteButton.id = 'deleteButton';
		deleteButton.textContent = '❌';
		deleteButton.onclick = function () {
			taskList.removeChild(listItem);
		};

		listItem.appendChild(completeButton);
		listItem.appendChild(taskSpan);
		listItem.appendChild(deleteButton);
		taskList.appendChild(listItem);

		taskInput.value = '';
	}
}

// Permiti evento com "Enter"
document.getElementById('task').addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		addTask();
	}
});
