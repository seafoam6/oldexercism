"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function pangram() {

<<<<<<< HEAD
  this.isPangram = function (sentence) {

    // if (!sentence){
    //   return false;
    // }

    var cleaned = sentence.replace(/[^A-Za-z]/g, '').toLowerCase();

    var alphabet = {
      a: 0,
=======
  this.isPangram = function (term) {

    if (!term) return false;

    var termLower = term.toLowerCase();

    var characterMap = { a: 0,
>>>>>>> 28e802e649a84864ffb8af3eb92f71a32a7f5f81
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

<<<<<<< HEAD
    Array.from(cleaned).forEach(function (val, index) {
      if (alphabet.hasOwnProperty(val)) {
        alphabet[val]++;
      }
    });

    for (var letter in alphabet) {
      if (alphabet.hasOwnProperty(letter) && alphabet[letter] < 1) {
        console.log(letter);
        //return "false";
      }
    }

    return "true";
=======
    var termArray = termLower.split();

    termArray.forEach(function (letter) {
      characterMap[letter]++;
    });

    characterMap.forEach(function (letter) {
      if (characterMap[letter] == 0) {
        return false;
      }
    });
    console.log(characterMap);
    return true;
>>>>>>> 28e802e649a84864ffb8af3eb92f71a32a7f5f81
  };
}

exports["default"] = pangram;
module.exports = exports["default"];