"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isLeapYear = function isLeapYear(year) {

  var yearDivisibleBy4 = year % 4;
  if (yearDivisibleBy4 != 0) {
    return false;
  }

  var yearDivisibleBy400 = year % 400;
  if (yearDivisibleBy400 == 0) {
    return true;
  }

  var yearDivisibleBy100 = year % 100;
  if (yearDivisibleBy100 == 0) {
    return false;
  }

  return true;
};

exports["default"] = isLeapYear;
module.exports = exports["default"];