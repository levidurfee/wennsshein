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

  basic(word) {
    let result = '';
    for(var i=0; i<word.length; i++) {
      result += Wennsshein.MAP[word[i]][0];
    }
    console.log(result);
  }
}

module.exports = Wennsshein;