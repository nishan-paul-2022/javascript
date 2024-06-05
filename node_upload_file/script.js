document.getElementById('uploadForm').addEventListener('submit', (e) => {
	e.preventDefault();
	const fileInput = document.getElementById('fileInput');
	const formData = new FormData();
	formData.append('file', fileInput.files[0]);

	fetch('/upload', {
		method: 'POST',
		body: formData
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			alert('File uploaded successfully');
			listFiles();
		})
		.catch((error) => {
			return console.error('Error:', error);
		});
});

function listFiles() {
	fetch('/files')
		.then((response) => {
			return response.json();
		})
		.then((files) => {
			const fileList = document.getElementById('fileList');
			fileList.innerHTML = '';
			files.forEach((file) => {
				const li = document.createElement('li');
				li.textContent = file;
				const downloadLink = document.createElement('a');
				downloadLink.href = `/uploads/${file}`;
				downloadLink.textContent = 'Download';
				downloadLink.style.marginLeft = '10px';

				const viewButton = document.createElement('button');
				viewButton.textContent = 'Show';
				viewButton.style.marginLeft = '10px';
				viewButton.onclick = () => {
					return viewFileContent(file);
				};

				li.appendChild(downloadLink);
				li.appendChild(viewButton);
				fileList.appendChild(li);
			});
		});
}

function viewFileContent(fileName) {
	fetch(`/view?file=${fileName}`)
		.then((response) => {
			return response.text();
		})
		.then((content) => {
			const modal = document.getElementById('modal');
			const fileContent = document.getElementById('fileContent');
			fileContent.textContent = content;
			modal.style.display = 'block';
		})
		.catch((error) => {
			return console.error('Error:', error);
		});
}

document.addEventListener('DOMContentLoaded', listFiles);

const modal = document.getElementById('modal');
const span = document.getElementsByClassName('close')[0];
span.onclick = function () {
	modal.style.display = 'none';
};
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
