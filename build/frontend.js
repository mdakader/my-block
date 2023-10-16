/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend.scss":
/*!***************************!*\
  !*** ./src/frontend.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontend.scss */ "./src/frontend.scss");


// Define a function to fetch JSON data from an API
function fetchJSONData(apiUrl, callback) {
  fetch(apiUrl).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }).then(data => {
    callback(data);
  }).catch(error => {
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
    data.forEach(user => {
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
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map