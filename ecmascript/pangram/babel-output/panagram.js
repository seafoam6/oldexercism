'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function panagram() {

  this.isPanagram = function (sentence) {

    var cleaned = sentence.replace(/[^A-Za-z]/g, '');

    return cleaned;
  };
}

exports['default'] = panagram;
module.exports = exports['default'];