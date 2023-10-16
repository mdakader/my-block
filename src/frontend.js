import "./frontend.scss";

// Define a function to fetch JSON data from an API
function fetchJSONData(apiUrl, callback) {
	fetch(apiUrl)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then((data) => {
			callback(data);
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
		});
}

// Callback function to render user data in a table
function renderUserData(data) {
	// Define a container element to display the data
	const container = document.getElementById('user-data-container');

	if (container) {
		// Create an HTML table and append it to the container
		const table = document.createElement('table');
		table.classList.add('user-table');

		// Create table headers
		const headers = document.createElement('thead');
		const headerRow = document.createElement('tr');
		headerRow.innerHTML = `
		  <th>Name</th>
		  <th>Email</th>
		  <th>Website</th>
		`;
		headers.appendChild(headerRow);
		table.appendChild(headers);

		// Create table body
		const body = document.createElement('tbody');
		data.forEach((user) => {
			const row = document.createElement('tr');
			row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
      `;
			body.appendChild(row);
		});
		table.appendChild(body);

		container.appendChild(table);
	}
}

// Call the fetchJSONData function with the API URL and renderUserData callback
fetchJSONData('https://jsonplaceholder.typicode.com/users', renderUserData);
