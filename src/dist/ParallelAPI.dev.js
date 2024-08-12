"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import axios from 'axios';
function ParallelApi() {
  // const [users, setUser] = useState([]);
  (0, _react.useEffect)(function () {
    var fetchData = function fetchData(url, delay) {
      var response;
      return regeneratorRuntime.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(new Promise(function (resolve) {
                return setTimeout(resolve, delay);
              }));

            case 2:
              _context.prev = 2;
              _context.next = 5;
              return regeneratorRuntime.awrap(fetch(url));

            case 5:
              response = _context.sent;

              if (response.ok) {
                _context.next = 8;
                break;
              }

              throw new Error("HTTP error! Status: ".concat(response.status));

            case 8:
              return _context.abrupt("return", response.json());

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              throw new Error("Error during API call: ".concat(_context.t0.message));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[2, 11]]);
    };

    var apiEndpoints = [{
      url: 'https://jsonplaceholder.typicode.com/users',
      delay: 5000
    }, // 5 seconds
    {
      url: 'https://jsonplaceholder.typicode.com/todos',
      delay: 3000
    }, // 3 seconds
    {
      url: 'https://jsonplaceholder.typicode.com/users',
      delay: 2000
    } // 2 seconds
    ];

    var performDelayedAPICalls = function performDelayedAPICalls() {
      var results;
      return regeneratorRuntime.async(function performDelayedAPICalls$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(Promise.all(apiEndpoints.map(function (_ref) {
                var url = _ref.url,
                    delay = _ref.delay;
                return fetchData(url, delay);
              })));

            case 3:
              results = _context2.sent;
              // Handle the results of all API calls here
              console.log('User:', results);
              console.log('Todos:', results);
              console.log('User:', results);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              // Handle errors
              console.error(_context2.t0.message);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }; // Call the main function to start delayed API calls


    performDelayedAPICalls();
  }, []); // Empty dependency array ensures useEffect runs only once
  // return (
  //     <>
  //     <div>
  //         {/* {users.map((user) => */}
  //         <div key={users.id}>
  //             <div><img src={users.avatar_url} alt={users.login} width={80}/></div>
  //             <div>{users.name}</div>
  //             <div>{users.login}</div>
  //             <div>{users.location}</div>
  //         </div>
  //         {/* )} */}
  //     </div>
  //     </>
  // );
}

var _default = ParallelApi;
exports["default"] = _default;