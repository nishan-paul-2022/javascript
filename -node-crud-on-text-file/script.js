/* eslint-disable @typescript-eslint/no-unused-vars */

function populateTable(texts) {
	const tableBody = document.getElementById('output');
	tableBody.innerHTML = texts
		.map((text, index) => {
			return `
				<tr id="row-${index}">
					<td>${index + 1}</td>
					<td contenteditable="true">${text}</td>
					<td>
						<button onclick="updateRow(${index})">Update</button>
						<button onclick="deleteRow(${index})">Delete</button>
					</td>
				</tr>
			`;
		})
		.join('');
}

function readText() {
	fetch('/read')
		.then((response) => {
			return response.json();
		})
		.then((texts) => {
			populateTable(texts);
		})
		.catch((error) => {
			console.error('Error:', error);
			// alert('An error occurred while reading text.');
		});
}

function createText() {
	const inputText = document.getElementById('textInput').value;
	if (inputText.trim() !== '') {
		fetch('/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: inputText
		})
			.then((response) => {
				return response.text();
			})
			.then((message) => {
				// alert(message);
				// Update the table after successful create
				readText();
			})
			.catch((error) => {
				console.error('Error:', error);
				// alert('An error occurred while creating text.');
			});
	} else {
		// alert('Please enter text.');
	}
}

function updateRow(index) {
	const editedText = document
		.getElementById(`row-${index}`)
		.querySelector('td[contenteditable="true"]')
		.textContent.trim();
	if (editedText !== '') {
		fetch('/update', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				index: index,
				text: editedText
			})
		})
			.then((response) => {
				return response.text();
			})
			.then((message) => {
				// alert(message);
				// Update the table after successful update
				readText();
			})
			.catch((error) => {
				console.error('Error:', error);
				// alert('An error occurred while updating text.');
			});
	} else {
		// alert('Please enter text.');
	}
}

function deleteRow(index) {
	fetch('/delete', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			index: index
		})
	})
		.then((response) => {
			return response.text();
		})
		.then((message) => {
			// alert(message);
			// Update the table after successful delete
			readText();
		})
		.catch((error) => {
			console.error('Error:', error);
			// alert('An error occurred while deleting text.');
		});
}

// Read the initial data when the page loads
readText();
