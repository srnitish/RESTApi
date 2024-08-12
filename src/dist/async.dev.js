"use strict";

function getData() {
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", 'Hello');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

var dataPromise = getData();
console.log(dataPromise); // dataPromise.then((res) => console.log(res));