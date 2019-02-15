(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const dataManager = {
  getData: function () {
    return fetch("http://localhost:3005/Users/").then(res => res.json());
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
    const inputUserObject = {
      userName: userName,
      password: password,
      first_name: first_name,
      last_name: last_name,
      email: email
    };

    _dataManager.default.getData().then(userList => {
      const search = userList.filter(user => user.userName === inputUserObject.userName);
      console.log(search);

      if (search.length) {
        alert("This user name is taken");
      } else {
        _dataManager.default.postUserData(inputUserObject); // document.querySelector("#output").innerHTML += ""

      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9yZWdpc3RyYXRpb24uanMiLCIuLi9zY3JpcHRzL3JlZ2lzdHJhdGlvbkV2ZW50bGlzdGVuZXIuanMiLCIuLi9zY3JpcHRzL3JlZ2lzdHJhdGlvbkZvcm0uanMiLCIuLi9zY3JpcHRzL3N1Ym1pdFJlZ2lzdHJhdGlvbkZvcm0uanMiLCIuLi9zY3JpcHRzL3dlbGNvbWVQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxXQUFXLEdBQUc7QUFDakIsRUFBQSxPQUFPLEVBQUUsWUFBVztBQUNwQixXQUFPLEtBQUssQ0FBQyw4QkFBRCxDQUFMLENBQ04sSUFETSxDQUNELEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSixFQUROLENBQVA7QUFHRixHQUxtQjtBQU1qQixFQUFBLFlBQVksRUFBRSxVQUFTLFVBQVQsRUFBb0I7QUFDakMsV0FBTyxLQUFLLENBQUMsOEJBQUQsRUFBaUM7QUFDekMsTUFBQSxNQUFNLEVBQUUsTUFEaUM7QUFFekMsTUFBQSxPQUFPLEVBQUU7QUFBQyx3QkFBZTtBQUFoQixPQUZnQztBQUk3QyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLFVBQWY7QUFKdUMsS0FBakMsQ0FBTCxDQU1OLElBTk0sQ0FNRCxHQUFHLElBQUksR0FBRyxDQUFDLElBQUosRUFOTixDQUFQO0FBUUE7QUFmZ0IsQ0FBcEI7ZUFrQmUsVzs7Ozs7O0FDbEJmOztBQUNBOztBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7Ozs7OztBQ1BBOzs7O0FBR0EsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzFCLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsR0FBOEMsRUFBOUM7QUFFSztBQUNULENBSkQ7O2VBS2UsZ0I7Ozs7Ozs7Ozs7O0FDUmY7Ozs7QUFHQSxNQUFNLHlCQUF5QixHQUFHLE1BQU07QUFDcEMsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUMsZ0JBQXpDLENBQTBELE9BQTFELEVBQWtFLE1BQU07QUFDcEU7QUFDSCxHQUZEO0FBR0gsQ0FKRDs7ZUFNZSx5Qjs7Ozs7Ozs7Ozs7QUNUZjs7QUFDQTs7OztBQUVBLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTTtBQUMzQixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLElBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBREQ7QUFrQ0E7QUFDSCxDQXBDRDs7ZUF1Q2UsZ0I7Ozs7Ozs7Ozs7O0FDMUNmOzs7O0FBRUEsTUFBTSxzQkFBc0IsR0FBRyxNQUFNO0FBQ2pDLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLE1BQU07QUFDbEUsVUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQTFEO0FBQ0EsVUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQTFEO0FBQ0EsVUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDLEtBQTdEO0FBQ0EsVUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQTNEO0FBQ0EsVUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsS0FBcEQ7QUFFQSxVQUFNLGVBQWUsR0FBRztBQUNwQixNQUFBLFFBQVEsRUFBRSxRQURVO0FBRXBCLE1BQUEsUUFBUSxFQUFFLFFBRlU7QUFHcEIsTUFBQSxVQUFVLEVBQUUsVUFIUTtBQUlwQixNQUFBLFNBQVMsRUFBRSxTQUpTO0FBS3BCLE1BQUEsS0FBSyxFQUFFO0FBTGEsS0FBeEI7O0FBT0EseUJBQVksT0FBWixHQUNLLElBREwsQ0FDVyxRQUFRLElBQUk7QUFDZixZQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBVCxDQUFnQixJQUFJLElBQUksSUFBSSxDQUFDLFFBQUwsS0FBa0IsZUFBZSxDQUFDLFFBQTFELENBQWY7QUFDQSxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWjs7QUFDQSxVQUFJLE1BQU0sQ0FBQyxNQUFYLEVBQW1CO0FBQ2YsUUFBQSxLQUFLLENBQUMseUJBQUQsQ0FBTDtBQUVILE9BSEQsTUFHTztBQUNILDZCQUFZLFlBQVosQ0FBeUIsZUFBekIsRUFERyxDQUdIOztBQUNIO0FBR0osS0FkTDtBQW1CSCxHQWpDRDtBQWtDSCxDQW5DRDs7ZUFxQ2Usc0I7Ozs7Ozs7Ozs7O0FDdkNmLE1BQU0sV0FBVyxHQUFHLE1BQU07QUFDdEIsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxTQUFsQyxJQUNDOzs7S0FERDtBQUtILENBTkQ7O2VBUWUsVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGRhdGFNYW5hZ2VyID0ge1xyXG4gICBnZXREYXRhOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDA1L1VzZXJzL1wiKVxyXG4gICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHJcbn0sXHJcbiAgIHBvc3RVc2VyRGF0YTogZnVuY3Rpb24odXNlck9iamVjdCl7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDUvVXNlcnMvXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlck9iamVjdClcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YU1hbmFnZXIiLCJpbXBvcnQgd2VsY29tZVBhZ2UgZnJvbSBcIi4vd2VsY29tZVBhZ2VcIjtcclxuaW1wb3J0IHJlZ2lzdHJhdGlvbkV2ZW50TGlzdGVuZXIgZnJvbSBcIi4vcmVnaXN0cmF0aW9uRXZlbnRsaXN0ZW5lclwiO1xyXG5pbXBvcnQgcmVnaXN0cmF0aW9uRm9ybUJ1dHRvbiBmcm9tIFwiLi9zdWJtaXRSZWdpc3RyYXRpb25Gb3JtXCI7XHJcblxyXG5cclxuXHJcbndlbGNvbWVQYWdlKClcclxucmVnaXN0cmF0aW9uRXZlbnRMaXN0ZW5lcigpXHJcblxyXG5cclxuIiwiaW1wb3J0IHJlZ2lzdHJhdGlvbkhUTUwgZnJvbSBcIi4vcmVnaXN0cmF0aW9uRm9ybVwiO1xyXG5cclxuXHJcbmNvbnN0IHJlZ2lzdHJhdGlvbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIikuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgXHJcbiAgICAgICAgICByZWdpc3RyYXRpb25IVE1MKClcclxufVxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25Gb3JtIiwiaW1wb3J0IHJlZ2lzdHJhdGlvbkZvcm0gZnJvbSBcIi4vcmVnaXN0cmF0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgcmVnaXN0cmF0aW9uRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VsY29tZUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uRm9ybSgpXHJcbiAgICB9IClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cmF0aW9uRXZlbnRMaXN0ZW5lciIsImltcG9ydCBkYXRhTWFuYWdlciBmcm9tIFwiLi9kYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgcmVnaXN0cmF0aW9uRm9ybUJ1dHRvbiBmcm9tIFwiLi9zdWJtaXRSZWdpc3RyYXRpb25Gb3JtXCI7XHJcblxyXG5jb25zdCByZWdpc3RyYXRpb25IVE1MID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIikuaW5uZXJIVE1MICs9IFxyXG4gICAgYFxyXG4gICAgPGgxPlJlZ2lzdHJhdGlvbiBGb3JtPGgxPlxyXG4gICAgPGRpdj5cclxuICAgIDxmaWVsZHNldD5cclxuICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0VXNlcm5hbWVcIj48L2lucHV0PlxyXG4gICAgPC9maWVsZHNldD5cclxuICAgIFxyXG4gICAgPGZpZWxkc2V0PlxyXG4gICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRQYXNzd29yZFwiPjwvaW5wdXQ+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGZpZWxkc2V0PlxyXG4gICAgPGxhYmVsPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dEZpcnN0TmFtZVwiPjwvaW5wdXQ+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGZpZWxkc2V0PlxyXG4gICAgPGxhYmVsPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0TGFzdE5hbWVcIj48L2lucHV0PlxyXG4gICAgPC9maWVsZHNldD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxmaWVsZHNldD5cclxuICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0RW1haWxcIj48L2lucHV0PlxyXG4gICAgPC9maWVsZHNldD5cclxuXHJcbiAgICA8YnV0dG9uIGlkPVwiZm9ybUJ1dHRvblwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICBgXHJcbiAgICByZWdpc3RyYXRpb25Gb3JtQnV0dG9uKCkgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25IVE1MIiwiaW1wb3J0IGRhdGFNYW5hZ2VyIGZyb20gXCIuL2RhdGFNYW5hZ2VyXCJcclxuXHJcbmNvbnN0IHJlZ2lzdHJhdGlvbkZvcm1CdXR0b24gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1CdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRVc2VybmFtZVwiKS52YWx1ZVxyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dFBhc3N3b3JkXCIpLnZhbHVlXHJcbiAgICAgICAgY29uc3QgZmlyc3RfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRGaXJzdE5hbWVcIikudmFsdWVcclxuICAgICAgICBjb25zdCBsYXN0X25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0TGFzdE5hbWVcIikudmFsdWVcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRFbWFpbFwiKS52YWx1ZVxyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFVzZXJPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VyTmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdF9uYW1lLFxyXG4gICAgICAgICAgICBsYXN0X25hbWU6IGxhc3RfbmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFNYW5hZ2VyLmdldERhdGEoKVxyXG4gICAgICAgICAgICAudGhlbigodXNlckxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoID0gdXNlckxpc3QuZmlsdGVyKHVzZXIgPT4gdXNlci51c2VyTmFtZSA9PT0gaW5wdXRVc2VyT2JqZWN0LnVzZXJOYW1lIClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaClcclxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJUaGlzIHVzZXIgbmFtZSBpcyB0YWtlblwiKVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YU1hbmFnZXIucG9zdFVzZXJEYXRhKGlucHV0VXNlck9iamVjdClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIikuaW5uZXJIVE1MICs9IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICApXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25Gb3JtQnV0dG9uIiwiY29uc3Qgd2VsY29tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKS5pbm5lckhUTUwgKz0gXHJcbiAgICBgXHJcbiAgICA8aDE+V2VsY29tZSBQaXN0YWNoaW9zPGgxPlxyXG4gICAgPGJ1dHRvbiBpZD1cIndlbGNvbWVCdXR0b25cIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgYFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWxjb21lUGFnZSJdfQ==
