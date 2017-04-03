'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

fs = require('fs');

var Wennsshein = function () {
  function Wennsshein() {
    _classCallCheck(this, Wennsshein);

    Wennsshein.MAP = {
      '0': ['s', 'z', 'c'],
      '1': ['t', 'd'],
      '2': ['n'],
      '3': ['m'],
      '4': ['r'],
      '5': ['l'],
      '6': ['j', 'sh', 'g'],
      '7': ['k'],
      '8': ['f', 'v'],
      '9': ['b', 'p']
    };

    Wennsshein.VOWELS = ['a', 'e', 'i', 'o', 'u'];

    return this;
  }

  _createClass(Wennsshein, [{
    key: 'solve',
    value: function solve(word) {
      var result = ''; // store consonants of word
      var count = 0;
      var currentWord = '';
      var vowelLess = '';
      for (var i = 0; i < word.length; i++) {
        result += Wennsshein.MAP[word[i]][0];
      }

      console.log("Looking for: ", result);

      for (var x = 0; x < this.words.length; x++) {

        currentWord = this.words[x];
        count = 0;

        for (var y = 0; y < currentWord.length; y++) {

          if (currentWord[y] == result[y]) {
            count++;
          }

          if (this.isVowel(currentWord[y])) {
            count--;
          }

          vowelLess = currentWord.replace(/[aeiou]/ig, '');
          if (result == vowelLess) {
            console.log('Here it is: ', currentWord);
          }

          if (count >= result.length) {
            console.log(currentWord);
          }
        } // end for y
      }

      return this;
    }
  }, {
    key: 'isVowel',
    value: function isVowel(character) {
      for (var i = 0; i < Wennsshein.VOWELS.length; i++) {
        if (character == Wennsshein.VOWELS[i]) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'populate',
    value: function populate(file) {
      this.words = fs.readFileSync(file).toString().split("\n");
      //console.log(this.words.length);
    }
  }]);

  return Wennsshein;
}();

module.exports = Wennsshein;