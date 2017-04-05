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

    return this;
  }

  solve(word) {
    if(word.includes(' ')) {
      var words = word.split(' ');
      for(var i=0; i<words.length; i++) {
        this.process(words[i]);
      }
      return this;
    }

    this.process(word);
    return this;
  }

  process(word) {
    let result = ''; // store consonants of word
    let currentWord = '';
    let vowelLess = '';
    for(var i=0; i<word.length; i++) {
      result += Wennsshein.MAP[word[i]][0];
    }

    console.log("Looking for: ", result);

    for(var x=0; x<this.words.length; x++) {

      currentWord = this.words[x];

      vowelLess = currentWord.replace(/[aeiou]/ig,'');
      if(result == vowelLess) {
        console.log('Here it is: ', currentWord);
      }

    }

    return this;
  }

  populate(file) {
    this.words = fs.readFileSync(file).toString().split("\n");
    //console.log(this.words.length);
  }
}

module.exports = Wennsshein;