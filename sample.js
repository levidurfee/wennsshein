const Wennsshein = require("./src/index.js");

var w = new Wennsshein()
w.populate('words.txt'); // get list of words
w.solve('1234');
