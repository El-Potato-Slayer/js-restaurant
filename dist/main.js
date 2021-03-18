/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction createContactInformation(container, type, detail) {\n  const contactType = container.appendChild(document.createElement('p'));\n  contactType.classList.add('py-2');\n  contactType.innerHTML = `${type}: `;\n  const contactDetail = contactType.appendChild(document.createElement('span'));\n  contactDetail.classList.add('italic');\n  contactDetail.innerHTML = detail;\n}\n\nfunction createContactField(container, label, inputField, type) {\n  const wrapper = container.appendChild(document.createElement('div'));\n  wrapper.classList.add('py-4');\n  const wrapperLabel = wrapper.appendChild(document.createElement('label'));\n  wrapperLabel.classList.add('block', 'text-center');\n  wrapperLabel.innerHTML = label;\n  const wrapperInput = wrapper.appendChild(document.createElement(inputField));\n  wrapperInput.classList.add('bg-transparent', 'border-b', 'border-white', 'w-80');\n  if (inputField === 'input') {\n    wrapperInput.type = type;\n  } else if (inputField === 'textarea') {\n    wrapperInput.classList.add('h-40');\n    wrapperInput.setAttribute('data-gramm_editor', false);\n  }\n  return wrapperInput;\n}\n\nfunction contact() {\n  const container = document.getElementById('content').appendChild(document.createElement('div'));\n  container.classList.add('nav-content', 'contact');\n  const wrapper = container.appendChild(document.createElement('section'));\n  wrapper.classList.add('text-white', 'flex', 'flex-col', 'justify-center', 'items-center', 'bg-semi-dark', 'max-w-2xl', 'mx-auto', 'py-16');\n  const firstTitle = wrapper.appendChild(document.createElement('h2'));\n  firstTitle.classList.add('text-4xl', 'pb-8');\n  firstTitle.innerHTML = 'Contact Us';\n  createContactInformation(wrapper, 'Address', '37 Champs-Élysées, Paris');\n  createContactInformation(wrapper, 'Phone', '+33 1 48 24 55 69');\n  createContactInformation(wrapper, 'Email', 'info@lepoes.com');\n  const secondTitle = wrapper.appendChild(document.createElement('h3'));\n  secondTitle.classList.add('text-3xl', 'sm:text-4xl', 'pb-4', 'pt-16');\n  secondTitle.innerHTML = 'Have A Question?';\n  const contactForm = wrapper.appendChild(document.createElement('div'));\n  contactForm.classList.add('flex', 'flex-col');\n  createContactField(contactForm, 'Full Name', 'input', 'text');\n  createContactField(contactForm, 'Email', 'input', 'email');\n  createContactField(contactForm, 'Phone', 'input', 'tel');\n  createContactField(contactForm, 'Subject', 'input', 'text');\n  createContactField(contactForm, 'Message', 'textarea');\n  const submitButton = contactForm.appendChild(document.createElement('button'));\n  submitButton.classList.add('bg-white', 'text-black', 'my-4', 'px-2', 'py-1', 'mx-auto');\n  submitButton.innerHTML = 'Submit';\n}\n\n\n//# sourceURL=webpack://js-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"intro\": () => (/* binding */ intro),\n/* harmony export */   \"cardSection\": () => (/* binding */ cardSection)\n/* harmony export */ });\nfunction intro() {\n  const container = document.getElementById('content').appendChild(document.createElement('div'));\n  container.classList.add('nav-content', 'intro', 'reduced-screen-height', 'bg-dark', 'text-white');\n  const section = container.appendChild(document.createElement('section'));\n  section.classList.add('relative', 'reduced-screen-height', 'flex', 'flex-col', 'justify-center', 'items-center');\n  const h1 = section.appendChild(document.createElement('h1'));\n  h1.innerHTML = 'Le Poes';\n  const h2 = section.appendChild(document.createElement('h2'));\n  h2.innerHTML = 'A Taste Of France';\n  const rosemary = section.appendChild(document.createElement('img'));\n  rosemary.id = 'rosemary1';\n  rosemary.src = './assets/images/rosemary.png';\n  rosemary.classList.add('hidden', 'lg:inline');\n  const tomatoes = section.appendChild(document.createElement('img'));\n  tomatoes.id = 'tomatoes';\n  tomatoes.src = './assets/images/tomatoes.png';\n  tomatoes.classList.add('hidden', 'lg:inline');\n  const onions = section.appendChild(document.createElement('img'));\n  onions.id = 'onions';\n  onions.src = './assets/images/onions.png';\n  onions.classList.add('hidden', 'lg:inline');\n  const garlic = section.appendChild(document.createElement('img'));\n  garlic.id = 'garlic';\n  garlic.src = './assets/images/garlic.png';\n  garlic.classList.add('hidden', 'lg:inline');\n  const dish = section.appendChild(document.createElement('img'));\n  dish.id = 'dish';\n  dish.src = './assets/images/dish.png';\n  dish.classList.add('hidden', 'lg:inline');\n}\n\nfunction cardSection() {\n  const container = document.getElementsByClassName('nav-content')[0];\n  const section = container.appendChild(document.createElement('div'));\n  section.classList.add('bg-dark', 'px-8', 'sm:px-32', 'flex', 'xy-center', 'relative', 'card-text', 'py-16', 'sm:py-0');\n  const card = section.appendChild(document.createElement('div'));\n  card.classList.add('card', 'sm:h-80');\n  const imgWrapper = card.appendChild(document.createElement('div'));\n  imgWrapper.classList.add('hidden', 'lg:block');\n  const img = imgWrapper.appendChild(document.createElement('img'));\n  img.classList.add('w-full', 'h-full', 'object-cover');\n  img.src = './assets/images/ratatouille.jpg';\n  const cardTextContainer = card.appendChild(document.createElement('div'));\n  cardTextContainer.classList.add('bg-white', 'text-black', 'px-8', 'sm:px-12', 'md:px-20', 'xl:px-32', 'py-8', 'flex', 'flex-col', 'justify-center', 'items-center');\n  const cardTitle = cardTextContainer.appendChild(document.createElement('h3'));\n  cardTitle.classList.add('text-4xl', 'mb-4', 'md:mb-8', 'font-bold');\n  cardTitle.innerHTML = 'About Us';\n  const cardText = cardTextContainer.appendChild(document.createElement('p'));\n  cardText.innerHTML = 'Located in Champs-Élysées, Paris, we aim to provide the real French experience. Le Poes serves the most exquisite French cuisines. From our food, to the wine, and even to the wood we use to cook our food. All of our ingredients are locally sourced, and we inspect all of them to ensure they are of the highest of quality.';\n  const thyme = section.appendChild(document.createElement('img'));\n  thyme.id = 'thyme';\n  thyme.src = './assets/images/thyme.png';\n  thyme.classList.add('absolute', 'hidden', 'sm:inline');\n}\n\n//# sourceURL=webpack://js-restaurant/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parallax */ \"./src/parallax.js\");\n/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab */ \"./src/tab.js\");\n\n\n\n\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.intro)();\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.cardSection)();\n(0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_tab__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_parallax__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menuItems = [\n  {\n    title: 'Soupe à l’oignon', description: 'A traditional French soup made of caramelized onions and beef stock, served with savory croutons and melted cheese on a toasted, crispy baguette slice.', price: '20€', image: './assets/images/soup.png',\n  },\n  {\n    title: 'Poulet Basquaise', description: 'A classic French Basque dish. Chicken is slowly pot roasted in a pepper sauce called piperade, made from melted red and green peppers, shallots, garlic and tomatoes. Served with either sauté potatoes or boiled rice.', price: '40€', image: './assets/images/butter-chicken.png',\n  },\n  {\n    title: 'Le Bifteck', description: 'A French beef cut. This steak is beautifully marbled and balanced between the fat and meat ratio. Sauces include pepper sauce, cheese sauce, borderlaise sauce or plain. Available in 300g, 500g, and 1kg.', price: '40€/60€/85€', image: './assets/images/steak.png',\n  },\n  {\n    title: 'Homard Thermidor', description: 'Tender lobster meat cooked the right way. The lobster is served with linguine, smothered in a rich buttery, white sauce. Available in 300g, 500g, and 1kg servings.', price: '50€/65€/100€', image: './assets/images/lobster.png',\n  },\n];\n\nfunction createMenuItems(container, menu) {\n  menu.forEach(menuItem => {\n    const row = container.appendChild(document.createElement('section'));\n    row.classList.add('menu-item', 'grid', 'grid-cols-1', 'text-center', 'sm:text-left', 'sm:grid-cols-2', 'items-center', 'pb-20');\n    const menuTextWrapper = row.appendChild(document.createElement('div'));\n    menuTextWrapper.classList.add('menu-text', 'mb-8', 'sm:mb-0', 'text-white', 'flex', 'flex-col', 'justify-center');\n    const title = menuTextWrapper.appendChild(document.createElement('h4'));\n    title.classList.add('text-3xl', 'lg:text-4xl', 'font-bold', 'mb-8');\n    title.innerHTML = `${menuItem.title}`;\n    const description = menuTextWrapper.appendChild(document.createElement('p'));\n    description.classList.add('text-left');\n    description.innerHTML = `${menuItem.description}`;\n    const price = menuTextWrapper.appendChild(document.createElement('p'));\n    price.classList.add('font-bold', 'text-lg', 'text-gray-200', 'mt-8');\n    price.innerHTML = `Price: ${menuItem.price}`;\n    const imgContainer = row.appendChild(document.createElement('div'));\n    imgContainer.classList.add('menu-picture', 'flex', 'justify-center');\n    const img = imgContainer.appendChild(document.createElement('img'));\n    img.classList.add('w-60', 'h-full');\n    img.src = `${menuItem.image}`;\n  });\n}\n\nfunction menu() {\n  const container = document.getElementById('content').appendChild(document.createElement('main'));\n  container.classList.add('nav-content', 'menu', 'px-8', 'sm:px-16', 'py-16', 'w-full');\n  const menuWrapper = container.appendChild(document.createElement('div'));\n  menuWrapper.classList.add('max-w-3xl', 'mx-auto');\n  createMenuItems(menuWrapper, menuItems);\n}\n\n\n//# sourceURL=webpack://js-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hamburger)\n/* harmony export */ });\nfunction Hamburger(state) {\r\n  this.state = state;\r\n}\r\n\r\nHamburger.prototype.falsifyState = () => {\r\n  Hamburger.state = false;\r\n  document.getElementById('hamburger').classList.remove('open');\r\n  document.querySelector('.nav-links').style.top = '-6.5rem';\r\n};\r\n\r\nHamburger.prototype.setState = () => {\r\n  const hamburgerWrapper = document.getElementById('hamburger-wrapper');\r\n  const hamburger = document.getElementById('hamburger');\r\n  const links = document.querySelector('.nav-links');\r\n  hamburgerWrapper.addEventListener('click', () => {\r\n    if (Hamburger.state) {\r\n      hamburger.classList.remove('open');\r\n      links.style.top = '-6.5rem';\r\n    } else {\r\n      hamburger.classList.add('open');\r\n      links.style.top = '4.5rem';\r\n    }\r\n    Hamburger.state = !Hamburger.state;\r\n  });\r\n};\n\n//# sourceURL=webpack://js-restaurant/./src/navbar.js?");

/***/ }),

/***/ "./src/parallax.js":
/*!*************************!*\
  !*** ./src/parallax.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parallax)\n/* harmony export */ });\nfunction parallax() {\n  const intro = document.querySelector('.intro');\n  intro.addEventListener('scroll', () => {\n    const dish = document.getElementById('dish');\n    const onions = document.getElementById('onions');\n    const tomatoes = document.getElementById('tomatoes');\n    const rosemary = document.getElementById('rosemary1');\n    const thyme = document.getElementById('thyme');\n    const scroll = intro.scrollTop;\n\n    dish.style.transform = `translateY(${scroll * -0.85}px)`;\n    onions.style.transform = `translateY(${scroll * -0.4}px)`;\n    tomatoes.style.transform = `translateY(${scroll * -0.5}px)`;\n    rosemary.style.transform = `translateY(${scroll * -0.6}px)`;\n    thyme.style.transform = `translate(0, ${scroll * -0.3}px) rotate(20deg)`;\n  });\n\n  const menu = document.querySelector('.menu');\n  menu.addEventListener('scroll', () => {\n    const menuPictures = document.querySelectorAll('.menu-picture img');\n    for (let i = 0; i < menuPictures.length; i += 1) {\n      menuPictures[i].style.transform = `rotate(${menu.scrollTop * 0.1}deg)`;\n    }\n  });\n}\n\n//# sourceURL=webpack://js-restaurant/./src/parallax.js?");

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateContent)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\r\n\r\nconst ham = new _navbar__WEBPACK_IMPORTED_MODULE_0__.default(false);\r\nham.setState();\r\n\r\nfunction displayContentOnClick(navLinks, pages) {\r\n  navLinks.forEach((navLink, index) => {\r\n    navLink.addEventListener('click', () => {\r\n      pages.forEach(page => {\r\n        page.classList.add('hidden');\r\n      });\r\n\r\n      navLinks.forEach(t => {\r\n        t.classList.remove('active-link');\r\n      });\r\n\r\n      navLink.classList.add('active-link');\r\n\r\n      pages[index].classList.remove('hidden');\r\n\r\n      ham.falsifyState();\r\n    });\r\n  });\r\n}\r\n\r\nfunction displayContentOnLoad(pages) {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    pages.forEach(page => {\r\n      page.classList.add('hidden');\r\n    });\r\n    pages[0].classList.remove('hidden');\r\n  });\r\n}\r\n\r\nfunction updateContent() {\r\n  const navLinks = document.querySelectorAll('nav div p');\r\n  const pages = document.querySelectorAll('.nav-content');\r\n\r\n  displayContentOnLoad(pages);\r\n  displayContentOnClick(navLinks, pages);\r\n}\r\n\n\n//# sourceURL=webpack://js-restaurant/./src/tab.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;