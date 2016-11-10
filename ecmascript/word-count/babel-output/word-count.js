"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function words() {

  this.count = function (phrase) {

    var wordMap = {};

    var lowerCaseWords = phrase.replace(/\n/i, " ").replace(/\s+/, ' ').replace(/\t/i, " ").trim().split(" ").map(function (word) {
      return word.toLowerCase();
    });

    lowerCaseWords.forEach(function (word) {

      if (wordMap.hasOwnProperty(word)) {
        wordMap[word] = wordMap[word] + 1;
      } else {
        wordMap[word] = 1;
      }
    });
    return wordMap;
  };
}

exports["default"] = words;
module.exports = exports["default"];