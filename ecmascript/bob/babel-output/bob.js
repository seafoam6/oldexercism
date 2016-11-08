//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);
  }

  _createClass(Bob, [{
    key: "hey",
    value: function hey(message) {

      var uppercase = 0;
      var lowercase = 0;

      // test if all caps // ANGRY
      Array.from(message).forEach(function (val, index) {
        if (val.toUpperCase() !== val.toLowerCase() && val.toUpperCase() === val && isNaN(val)) {
          uppercase++;
        } else if (val.toLowerCase() !== val.toUpperCase() && val.toLowerCase() === val && isNaN(val)) {
          lowercase++;
        }
      });
      if (uppercase > lowercase && !message.includes('\xfc')) {
        return "Whoa, chill out!";
      }

      //test if asking a question not angry
      if (message.slice(-1) === "?") {
        return "Sure.";
      }

      if (message.trim() == '') {
        return "Fine. Be that way!";
      }

      // default return
      return "Whatever.";
    }
  }]);

  return Bob;
})();

exports["default"] = Bob;
module.exports = exports["default"];