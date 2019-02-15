(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const dataManager = {
  getData: function () {
    return fetch("http://localhost:3005/Users").then(res => res.json());
  },
  postUserData: function (userObject) {
    return fetch("http://localhost:3005/Users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObject)
    }).then(res => res.json());
  }
};
var _default = dataManager;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _welcomePage = _interopRequireDefault(require("./welcomePage"));

var _registrationEventlistener = _interopRequireDefault(require("./registrationEventlistener"));

var _submitRegistrationForm = _interopRequireDefault(require("./submitRegistrationForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _welcomePage.default)();
(0, _registrationEventlistener.default)();

},{"./registrationEventlistener":4,"./submitRegistrationForm":6,"./welcomePage":7}],3:[function(require,module,exports){
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

},{"./registrationForm":5}],4:[function(require,module,exports){
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

},{"./registration":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataManager = _interopRequireDefault(require("./dataManager"));

var _submitRegistrationForm = _interopRequireDefault(require("./submitRegistrationForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _submitRegistrationForm.default)();
};

var _default = registrationHTML;
exports.default = _default;

},{"./dataManager":1,"./submitRegistrationForm":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataManager = _interopRequireDefault(require("./dataManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const registrationFormButton = () => {
  document.querySelector("#formButton").addEventListener("click", () => {
    const userName = document.querySelector("#inputUsername").value;
    const password = document.querySelector("#inputPassword").value;
    const first_name = document.querySelector("#inputFirstName").value;
    const last_name = document.querySelector("#inputLastName").value;
    const email = document.querySelector("#inputEmail").value;
    console.log(userName);
    const inputUserObject = {
      userName: userName,
      password: password,
      first_name: first_name,
      last_name: last_name,
      email: email
    };

    _dataManager.default.getData().then(userList => {
      userList.forEach(user => {
        if (user.userName === inputUserObject.userName) {
          alert("this user already exists");
        } else {
          _dataManager.default.postUserData(inputUserObject);
        }
      });
    });
  });
};

var _default = registrationFormButton;
exports.default = _default;

},{"./dataManager":1}],7:[function(require,module,exports){
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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9yZWdpc3RyYXRpb24uanMiLCIuLi9zY3JpcHRzL3JlZ2lzdHJhdGlvbkV2ZW50bGlzdGVuZXIuanMiLCIuLi9zY3JpcHRzL3JlZ2lzdHJhdGlvbkZvcm0uanMiLCIuLi9zY3JpcHRzL3N1Ym1pdFJlZ2lzdHJhdGlvbkZvcm0uanMiLCIuLi9zY3JpcHRzL3dlbGNvbWVQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxXQUFXLEdBQUc7QUFDakIsRUFBQSxPQUFPLEVBQUUsWUFBVztBQUNwQixXQUFPLEtBQUssQ0FBQyw2QkFBRCxDQUFMLENBQ04sSUFETSxDQUNELEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSixFQUROLENBQVA7QUFHRixHQUxtQjtBQU1qQixFQUFBLFlBQVksRUFBRSxVQUFTLFVBQVQsRUFBb0I7QUFDakMsV0FBTyxLQUFLLENBQUMsOEJBQUQsRUFBaUM7QUFDekMsTUFBQSxNQUFNLEVBQUUsTUFEaUM7QUFFekMsTUFBQSxPQUFPLEVBQUU7QUFBQyx3QkFBZTtBQUFoQixPQUZnQztBQUk3QyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLFVBQWY7QUFKdUMsS0FBakMsQ0FBTCxDQU1OLElBTk0sQ0FNRCxHQUFHLElBQUksR0FBRyxDQUFDLElBQUosRUFOTixDQUFQO0FBUUE7QUFmZ0IsQ0FBcEI7ZUFrQmUsVzs7Ozs7O0FDbEJmOztBQUNBOztBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7Ozs7OztBQ1BBOzs7O0FBR0EsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzFCLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsR0FBOEMsRUFBOUM7QUFFSztBQUNULENBSkQ7O2VBS2UsZ0I7Ozs7Ozs7Ozs7O0FDUmY7Ozs7QUFHQSxNQUFNLHlCQUF5QixHQUFHLE1BQU07QUFDcEMsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUMsZ0JBQXpDLENBQTBELE9BQTFELEVBQWtFLE1BQU07QUFDcEU7QUFDSCxHQUZEO0FBR0gsQ0FKRDs7ZUFNZSx5Qjs7Ozs7Ozs7Ozs7QUNUZjs7QUFDQTs7OztBQUVBLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTTtBQUMzQixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLElBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBREQ7QUFrQ0E7QUFDSCxDQXBDRDs7ZUF1Q2UsZ0I7Ozs7Ozs7Ozs7O0FDMUNmOzs7O0FBRUEsTUFBTSxzQkFBc0IsR0FBRyxNQUFNO0FBQ2pDLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLE1BQU07QUFDbEUsVUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQTFEO0FBQ0EsVUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQTFEO0FBQ0EsVUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDLEtBQTdEO0FBQ0EsVUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQTNEO0FBQ0EsVUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsS0FBcEQ7QUFDSSxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUNKLFVBQU0sZUFBZSxHQUFHO0FBQ3BCLE1BQUEsUUFBUSxFQUFFLFFBRFU7QUFFcEIsTUFBQSxRQUFRLEVBQUUsUUFGVTtBQUdwQixNQUFBLFVBQVUsRUFBRSxVQUhRO0FBSXBCLE1BQUEsU0FBUyxFQUFFLFNBSlM7QUFLcEIsTUFBQSxLQUFLLEVBQUU7QUFMYSxLQUF4Qjs7QUFPQSx5QkFBWSxPQUFaLEdBQ0MsSUFERCxDQUNPLFFBQVEsSUFBSTtBQUNmLE1BQUEsUUFBUSxDQUFDLE9BQVQsQ0FBa0IsSUFBRCxJQUFVO0FBQ3ZCLFlBQUksSUFBSSxDQUFDLFFBQUwsS0FBa0IsZUFBZSxDQUFDLFFBQXRDLEVBQWdEO0FBQzVDLFVBQUEsS0FBSyxDQUFDLDBCQUFELENBQUw7QUFDSCxTQUZELE1BRU87QUFFSCwrQkFBWSxZQUFaLENBQXlCLGVBQXpCO0FBQ0g7QUFFSixPQVJEO0FBU0gsS0FYRDtBQWFILEdBM0JEO0FBNEJILENBN0JEOztlQStCZSxzQjs7Ozs7Ozs7Ozs7QUNqQ2YsTUFBTSxXQUFXLEdBQUcsTUFBTTtBQUN0QixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLElBQ0M7OztLQUREO0FBS0gsQ0FORDs7ZUFRZSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZGF0YU1hbmFnZXIgPSB7XHJcbiAgIGdldERhdGE6IGZ1bmN0aW9uKCkgeyBcclxuICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDA1L1VzZXJzXCIpXHJcbiAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cclxufSxcclxuICAgcG9zdFVzZXJEYXRhOiBmdW5jdGlvbih1c2VyT2JqZWN0KXtcclxuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9Vc2Vycy9cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyT2JqZWN0KVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhTWFuYWdlciIsImltcG9ydCB3ZWxjb21lUGFnZSBmcm9tIFwiLi93ZWxjb21lUGFnZVwiO1xyXG5pbXBvcnQgcmVnaXN0cmF0aW9uRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9yZWdpc3RyYXRpb25FdmVudGxpc3RlbmVyXCI7XHJcbmltcG9ydCByZWdpc3RyYXRpb25Gb3JtQnV0dG9uIGZyb20gXCIuL3N1Ym1pdFJlZ2lzdHJhdGlvbkZvcm1cIjtcclxuXHJcblxyXG5cclxud2VsY29tZVBhZ2UoKVxyXG5yZWdpc3RyYXRpb25FdmVudExpc3RlbmVyKClcclxuXHJcblxyXG4iLCJpbXBvcnQgcmVnaXN0cmF0aW9uSFRNTCBmcm9tIFwiLi9yZWdpc3RyYXRpb25Gb3JtXCI7XHJcblxyXG5cclxuY29uc3QgcmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcclxuICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBcclxuICAgICAgICAgIHJlZ2lzdHJhdGlvbkhUTUwoKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJhdGlvbkZvcm0iLCJpbXBvcnQgcmVnaXN0cmF0aW9uRm9ybSBmcm9tIFwiLi9yZWdpc3RyYXRpb25cIjtcclxuXHJcblxyXG5jb25zdCByZWdpc3RyYXRpb25FdmVudExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWxjb21lQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICByZWdpc3RyYXRpb25Gb3JtKClcclxuICAgIH0gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25FdmVudExpc3RlbmVyIiwiaW1wb3J0IGRhdGFNYW5hZ2VyIGZyb20gXCIuL2RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCByZWdpc3RyYXRpb25Gb3JtQnV0dG9uIGZyb20gXCIuL3N1Ym1pdFJlZ2lzdHJhdGlvbkZvcm1cIjtcclxuXHJcbmNvbnN0IHJlZ2lzdHJhdGlvbkhUTUwgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKS5pbm5lckhUTUwgKz0gXHJcbiAgICBgXHJcbiAgICA8aDE+UmVnaXN0cmF0aW9uIEZvcm08aDE+XHJcbiAgICA8ZGl2PlxyXG4gICAgPGZpZWxkc2V0PlxyXG4gICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRVc2VybmFtZVwiPjwvaW5wdXQ+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICAgXHJcbiAgICA8ZmllbGRzZXQ+XHJcbiAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCI+PC9pbnB1dD5cclxuICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZmllbGRzZXQ+XHJcbiAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0Rmlyc3ROYW1lXCI+PC9pbnB1dD5cclxuICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZmllbGRzZXQ+XHJcbiAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRMYXN0TmFtZVwiPjwvaW5wdXQ+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGZpZWxkc2V0PlxyXG4gICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRFbWFpbFwiPjwvaW5wdXQ+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG5cclxuICAgIDxidXR0b24gaWQ9XCJmb3JtQnV0dG9uXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgIGBcclxuICAgIHJlZ2lzdHJhdGlvbkZvcm1CdXR0b24oKSBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJhdGlvbkhUTUwiLCJpbXBvcnQgZGF0YU1hbmFnZXIgZnJvbSBcIi4vZGF0YU1hbmFnZXJcIlxyXG5cclxuY29uc3QgcmVnaXN0cmF0aW9uRm9ybUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dFVzZXJuYW1lXCIpLnZhbHVlXHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0UGFzc3dvcmRcIikudmFsdWVcclxuICAgICAgICBjb25zdCBmaXJzdF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dEZpcnN0TmFtZVwiKS52YWx1ZVxyXG4gICAgICAgIGNvbnN0IGxhc3RfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRMYXN0TmFtZVwiKS52YWx1ZVxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dEVtYWlsXCIpLnZhbHVlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJOYW1lKVxyXG4gICAgICAgIGNvbnN0IGlucHV0VXNlck9iamVjdCA9IHtcclxuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJOYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbGFzdF9uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogZW1haWxcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YU1hbmFnZXIuZ2V0RGF0YSgpXHJcbiAgICAgICAgLnRoZW4oKHVzZXJMaXN0ID0+IHtcclxuICAgICAgICAgICAgdXNlckxpc3QuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIudXNlck5hbWUgPT09IGlucHV0VXNlck9iamVjdC51c2VyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwidGhpcyB1c2VyIGFscmVhZHkgZXhpc3RzXCIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkYXRhTWFuYWdlci5wb3N0VXNlckRhdGEoaW5wdXRVc2VyT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJhdGlvbkZvcm1CdXR0b24iLCJjb25zdCB3ZWxjb21lUGFnZSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpLmlubmVySFRNTCArPSBcclxuICAgIGBcclxuICAgIDxoMT5XZWxjb21lIFBpc3RhY2hpb3M8aDE+XHJcbiAgICA8YnV0dG9uIGlkPVwid2VsY29tZUJ1dHRvblwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICBgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlbGNvbWVQYWdlIl19
