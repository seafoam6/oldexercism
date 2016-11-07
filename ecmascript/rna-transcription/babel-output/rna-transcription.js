'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function rna() {

  this.toRna = function (dna) {

    var rna = [];

    for (var i = 0; i < dna.length; i++) {
      switch (dna[i]) {
        case 'G':
          rna.push('C');
          break;
        case 'C':
          rna.push('G');
          break;
        case 'T':
          rna.push('A');
          break;
        case 'A':
          rna.push('U');
          break;
        default:
          break;
      }
    }
    return rna.join('');
  };
}

exports['default'] = rna;
module.exports = exports['default'];