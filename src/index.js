fs = require('fs');
class Wennsshein {
  constructor() {
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
      '9': ['b', 'p'],
    };

    Wennsshein.VOWELS = [
      'a', 'e', 'i', 'o', 'u'
    ];

    return this;
  }

  solve(word) {
    let result = ''; // store consonants of word
    let count = 0;
    let currentWord = '';
    let vowelLess = '';
    for(var i=0; i<word.length; i++) {
      result += Wennsshein.MAP[word[i]][0];
    }

    console.log("Looking for: ", result);

    for(var x=0; x<this.words.length; x++) {

      currentWord = this.words[x];
      count = 0;

      for(var y=0; y<currentWord.length; y++) {

        if(currentWord[y] == result[y]) {
          count++;
        }

        if(this.isVowel(currentWord[y])) {
          count--;
        }

        vowelLess = currentWord.replace(/[aeiou]/ig,'');
        if(result == vowelLess) {
          console.log('Here it is: ', currentWord);
        }

        if(count >= result.length) {
          console.log(currentWord);
        }
      
      } // end for y
    }

    return this;
  }

  isVowel(character) {
    for(var i=0; i<Wennsshein.VOWELS.length; i++) {
      if(character == Wennsshein.VOWELS[i]) {
        return true;
      }
    }
    return false;
  }

  populate(file) {
    this.words = fs.readFileSync(file).toString().split("\n");
    //console.log(this.words.length);
  }
}

module.exports = Wennsshein;