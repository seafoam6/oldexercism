'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Pangram = (function () {
  function Pangram(sentence) {
    _classCallCheck(this, Pangram);

    this.sentence = sentence;
  }

  _createClass(Pangram, [{
    key: 'isPangram',
    value: function isPangram() {

      if (!this.sentence) {
        return false;
      }

      var cleaned = this.sentence.replace(/[^A-Za-z]/g, '').toLowerCase();

      var alphabet = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
      };

      Array.from(cleaned).forEach(function (val, index) {
        if (alphabet.hasOwnProperty(val)) {
          alphabet[val]++;
        }
      });

      for (var letter in alphabet) {
        if (alphabet.hasOwnProperty(letter) && alphabet[letter] < 1) {
          console.log(letter);
          return false;
        }
      }

      return true;
    }
  }]);

  return Pangram;
})();

exports['default'] = Pangram;
module.exports = exports['default'];