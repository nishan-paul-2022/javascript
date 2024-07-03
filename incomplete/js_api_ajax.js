// import { XMLHttpRequest } from 'xmlhttprequest';

// function MakeHttpRequest() {
// 	const xhr = new XMLHttpRequest();

// 	xhr.onload = function () {
// 		if (this.status === 200) {
// 			const response = this.responseText;
// 			console.log(response);
// 		}
// 	};

// 	xhr.onerror = function () {
// 		console.log('ERROR');
// 	};

// 	xhr.open('GET', 'https://reqres.in/', true); // 'true' indicates asynchronous mode
// 	xhr.send();

// 	console.log('OK');
// }

// MakeHttpRequest();

// function Create() {
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
// 	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState === 4 && xhr.status === 201) {
// 			console.log(JSON.parse(xhr.responseText));
// 		}
// 	};
// 	const newPost = JSON.stringify({
// 		title: 'foo',
// 		body: 'bar',
// 		userId: 1
// 	});
// 	xhr.send(newPost);
// }

// function Read() {
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			console.log(JSON.parse(xhr.responseText));
// 		}
// 	};
// 	xhr.send();
// }

// function Put() {
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1', true);
// 	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			console.log(JSON.parse(xhr.responseText));
// 		}
// 	};
// 	const updatedPost = JSON.stringify({
// 		id: 1,
// 		title: 'foo',
// 		body: 'bar',
// 		userId: 1
// 	});
// 	xhr.send(updatedPost);
// }

// function Delete() {
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', true);
// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			console.log('Post deleted');
// 		}
// 	};
// 	xhr.send();
// }

// Create();
// // Read();
// // Put();
// // Delete();

// // - xhr.open()
// // - xhr.send()
// // - xhr.onload
// // - xhr.onreadystatechange
// // - xhr.status
// // - xhr.readyState
// // - xhr.responseText
// // - xhr.responseXML
// // - xhr.setRequestHeader(type, value)
// // - xhr.getResponseHeader(type)
// // - xhr.getAllResponseHeaders()
