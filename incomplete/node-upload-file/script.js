function logError(error) {
	alert(error);
	console.error(error);
}

function viewFile(fileName) {
	fetch(`/view?file=${fileName}`)
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			if (response.data) {
				return response.data;
			} else if (response.error) {
				throw response.error;
			}
		})
		.then((data) => {
			document.getElementById('file-content').innerText = data;
			document.getElementById('modal').style.display = 'block';
		})
		.catch((error) => {
			logError(error);
		});
}

function deleteFile(fileName) {
	fetch(`/delete?file=${fileName}`, {
		method: 'DELETE'
	})
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			if (response.message) {
				return response.message;
			} else if (response.error) {
				throw response.error;
			}
		})
		.then((message) => {
			alert(message);
			location.reload();
		})
		.catch((error) => {
			logError(error);
		});
}

function setModal() {
	const modal = document.getElementById('modal');
	const span = document.getElementById('modal-close');
	span.onclick = function () {
		modal.style.display = 'none';
	};
	window.onclick = function (event) {
		if (event.target === modal) {
			modal.style.display = 'none';
		}
	};
}

function listFiles() {
	fetch('/files')
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			if (response.fileNames) {
				return response.fileNames;
			} else if (response.error) {
				throw response.error;
			}
		})
		.then((fileNames) => {
			const fileGrid = document.getElementById('file-grid');
			const fragment = document.createDocumentFragment();
			fileGrid.innerHTML = '';

			fileNames.forEach((fileName) => {
				const div = document.createElement('div');
				div.textContent = fileName;

				const viewButton = document.createElement('button');
				viewButton.textContent = 'View';
				viewButton.onclick = () => {
					return viewFile(fileName);
				};
				viewButton.style.marginLeft = '10px';

				const downloadLink = document.createElement('a');
				downloadLink.href = `/uploads/${fileName}`;
				downloadLink.textContent = 'Download';
				downloadLink.style.marginLeft = '10px';
				downloadLink.setAttribute('download', 'download');

				const deleteButton = document.createElement('button');
				deleteButton.textContent = 'Delete';
				deleteButton.style.marginLeft = '10px';
				deleteButton.onclick = () => {
					return deleteFile(fileName);
				};

				div.appendChild(viewButton);
				div.appendChild(downloadLink);
				div.appendChild(deleteButton);
				fragment.appendChild(div);
			});

			fileGrid.appendChild(fragment);
		})
		.catch((error) => {
			logError(error);
		});
}

function handleSubmission(event) {
	event.preventDefault();

	// const formData = new FormData();
	// const fileInput = document.getElementById('file-input');
	// formData.set('fileInput', fileInput.files);

	const formData = new FormData(event.target);

	fetch('/upload', {
		method: 'POST',
		body: formData
	})
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			if (response.message) {
				return response.message;
			} else if (response.error) {
				throw response.error;
			}
		})
		.then((message) => {
			alert(message);
			location.reload();
		})
		.catch((error) => {
			logError(error);
		});
}

function onLoad() {
	setModal();
	listFiles();
	document
		.getElementById('upload-form')
		.addEventListener('submit', handleSubmission);
}

document.addEventListener('DOMContentLoaded', onLoad);

/*
methods to read response content:
	response.json()         : reads response body and returns it as a regular object or array
	response.text()         : reads response body and returns it as a text string
	response.blob()         : reads response body and returns it as a Blob
	response.arrayBuffer()  : reads response body and returns it as an ArrayBuffer
	response.formData()     : reads response body and returns it as FormData */
