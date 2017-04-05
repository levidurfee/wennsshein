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

    return this;
  }

  _createClass(Wennsshein, [{
    key: 'solve',
    value: function solve(word) {
      if (word.includes(' ')) {
        var words = word.split(' ');
        for (var i = 0; i < words.length; i++) {
          this.process(words[i]);
        }
        return this;
      }

      this.process(word);
      return this;
    }
  }, {
    key: 'process',
    value: function process(word) {
      var result = ''; // store consonants of word
      var currentWord = '';
      var vowelLess = '';
      for (var i = 0; i < word.length; i++) {
        result += Wennsshein.MAP[word[i]][0];
      }

      console.log("Looking for: ", result);

      for (var x = 0; x < this.words.length; x++) {

        currentWord = this.words[x];

        vowelLess = currentWord.replace(/[aeiou]/ig, '');
        if (result == vowelLess) {
          console.log('Here it is: ', currentWord);
        }
      }

      return this;
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