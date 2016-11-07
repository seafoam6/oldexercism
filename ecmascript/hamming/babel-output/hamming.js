'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function Hamming() {

  this.compute = function (strand1, strand2) {
    if (strand1.length !== strand2.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    var distance = 0;
    var s = Array.from(strand1);
    Array.from(strand1).forEach(function (val, index) {
      if (val !== strand2[index]) distance++;
    });
    return distance;
  };
}

exports['default'] = Hamming;
module.exports = exports['default'];