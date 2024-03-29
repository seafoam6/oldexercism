"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gigasecond = (function () {
  function Gigasecond(dateInput) {
    _classCallCheck(this, Gigasecond);

    this.dateInput = dateInput;
    this.millionSeconds = 1000000000000;
  }

  _createClass(Gigasecond, [{
    key: "date",
    value: function date() {
      var dateInput = this.dateInput.getTime();
      var endTime = new Date(dateInput + this.millionSeconds);
      return endTime;
    }
  }]);

  return Gigasecond;
})();

exports["default"] = Gigasecond;
module.exports = exports["default"];