(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _welcomePage = _interopRequireDefault(require("./welcomePage"));

var _registrationEventlistener = _interopRequireDefault(require("./registrationEventlistener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _welcomePage.default)();
(0, _registrationEventlistener.default)();

},{"./registrationEventlistener":3,"./welcomePage":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _registrationForm = _interopRequireDefault(require("./registrationForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const registrationForm = () => {
  document.querySelector("#output").innerHTML = "";
  (0, _registrationForm.default)();
};

var _default = registrationForm;
exports.default = _default;

},{"./registrationForm":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _registration = _interopRequireDefault(require("./registration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const registrationEventListener = () => {
  document.querySelector("#welcomeButton").addEventListener("click", () => {
    (0, _registration.default)();
  });
};

var _default = registrationEventListener;
exports.default = _default;

},{"./registration":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const registrationHTML = () => {
  document.querySelector("#output").innerHTML += `
    <h1>Registration Form<h1>
    <div>
    <fieldset>
    <label>Username</label>
    <input type="text" id="inputUsername"></input>
    </fieldset>
    
    <fieldset>
    <label>Password</label>
    <input type="text" id="inputPassword"></input>
    </fieldset>
    </div>

    <fieldset>
    <label>First Name</label>
    <input type="text" id="inputFirstName"></input>
    </fieldset>
    </div>

    <fieldset>
    <label>Last Name</label>
    <input type="text" id="inputLastName"></input>
    </fieldset>
    </div>

    <fieldset>
    <label>Email</label>
    <input type="text" id="inputEmail"></input>
    </fieldset>

    <button id="formButton">Register</button>
    `;
};

var _default = registrationHTML;
exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const welcomePage = () => {
  document.querySelector("#output").innerHTML += `
    <h1>Welcome Pistachios<h1>
    <button id="welcomeButton">Register</button>
    `;
};

var _default = welcomePage;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3JlZ2lzdHJhdGlvbi5qcyIsIi4uL3NjcmlwdHMvcmVnaXN0cmF0aW9uRXZlbnRsaXN0ZW5lci5qcyIsIi4uL3NjcmlwdHMvcmVnaXN0cmF0aW9uRm9ybS5qcyIsIi4uL3NjcmlwdHMvd2VsY29tZVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7Ozs7OztBQ05BOzs7O0FBR0EsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzFCLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsR0FBOEMsRUFBOUM7QUFFSztBQUNULENBSkQ7O2VBS2UsZ0I7Ozs7Ozs7Ozs7O0FDUmY7Ozs7QUFHQSxNQUFNLHlCQUF5QixHQUFHLE1BQU07QUFDcEMsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUMsZ0JBQXpDLENBQTBELE9BQTFELEVBQWtFLE1BQU07QUFDcEU7QUFDSCxHQUZEO0FBR0gsQ0FKRDs7ZUFNZSx5Qjs7Ozs7Ozs7Ozs7QUNUZixNQUFNLGdCQUFnQixHQUFHLE1BQU07QUFDM0IsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxTQUFsQyxJQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUREO0FBa0NILENBbkNEOztlQXFDZSxnQjs7Ozs7Ozs7Ozs7QUNyQ2YsTUFBTSxXQUFXLEdBQUcsTUFBTTtBQUN0QixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLElBQ0M7OztLQUREO0FBS0gsQ0FORDs7ZUFRZSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHdlbGNvbWVQYWdlIGZyb20gXCIuL3dlbGNvbWVQYWdlXCI7XHJcbmltcG9ydCByZWdpc3RyYXRpb25FdmVudExpc3RlbmVyIGZyb20gXCIuL3JlZ2lzdHJhdGlvbkV2ZW50bGlzdGVuZXJcIjtcclxuXHJcblxyXG5cclxud2VsY29tZVBhZ2UoKVxyXG5yZWdpc3RyYXRpb25FdmVudExpc3RlbmVyKClcclxuIiwiaW1wb3J0IHJlZ2lzdHJhdGlvbkhUTUwgZnJvbSBcIi4vcmVnaXN0cmF0aW9uRm9ybVwiO1xyXG5cclxuXHJcbmNvbnN0IHJlZ2lzdHJhdGlvbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIikuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgXHJcbiAgICAgICAgICByZWdpc3RyYXRpb25IVE1MKClcclxufVxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25Gb3JtIiwiaW1wb3J0IHJlZ2lzdHJhdGlvbkZvcm0gZnJvbSBcIi4vcmVnaXN0cmF0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgcmVnaXN0cmF0aW9uRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VsY29tZUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uRm9ybSgpXHJcbiAgICB9IClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cmF0aW9uRXZlbnRMaXN0ZW5lciIsImNvbnN0IHJlZ2lzdHJhdGlvbkhUTUwgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKS5pbm5lckhUTUwgKz0gXHJcbiAgICBgXHJcbiAgICA8aDE+UmVnaXN0cmF0aW9uIEZvcm08aDE+XHJcbiAgICA8ZGl2PlxyXG4gICAgPGZpZWxkc2V0PlxyXG4gICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRVc2VybmFtZVwiPjwvaW5wdXQ+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICAgXHJcbiAgICA8ZmllbGRzZXQ+XHJcbiAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCI+PC9pbnB1dD5cclxuICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZmllbGRzZXQ+XHJcbiAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0Rmlyc3ROYW1lXCI+PC9pbnB1dD5cclxuICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZmllbGRzZXQ+XHJcbiAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRMYXN0TmFtZVwiPjwvaW5wdXQ+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGZpZWxkc2V0PlxyXG4gICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRFbWFpbFwiPjwvaW5wdXQ+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG5cclxuICAgIDxidXR0b24gaWQ9XCJmb3JtQnV0dG9uXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgIGBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cmF0aW9uSFRNTCIsImNvbnN0IHdlbGNvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIikuaW5uZXJIVE1MICs9IFxyXG4gICAgYFxyXG4gICAgPGgxPldlbGNvbWUgUGlzdGFjaGlvczxoMT5cclxuICAgIDxidXR0b24gaWQ9XCJ3ZWxjb21lQnV0dG9uXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgIGBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2VsY29tZVBhZ2UiXX0=
