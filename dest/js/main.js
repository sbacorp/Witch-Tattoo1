/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const iconMenu = document.querySelector('.menu__icon');\r\nif (iconMenu) {\r\n\tconst menuBody = document.querySelector('.menu__body');\r\n\ticonMenu.addEventListener(\"click\",function(e){\r\n\t\ticonMenu.classList.toggle('_active');\r\n\t\tmenuBody.classList.toggle('_active');\r\n\t});\r\n}\r\n\r\n\r\nvar submit = document.getElementById('btnFormSubmit');\r\nsubmit.addEventListener('click', submitForm);\r\n\r\nfunction submitForm(event){\r\nevent.preventDefault();\r\nevent.stopPropagation();\r\n\r\nvar href = '',\r\ninputs = this.parentNode.getElementsByTagName('input')\r\n    for(var i=0;i<inputs.length;i++){\r\n         if(inputs[i].getAttribute('name') == 'prefer' && inputs[i].checked){\r\n             href = inputs[i].getAttribute('data-href');\r\n             window.location = href;\r\n         }\r\n    }\r\n}\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;