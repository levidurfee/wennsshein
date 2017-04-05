const Wennsshein = require("./src/index.js");

var w = new Wennsshein()
w.populate('./dictionaries/10k.txt'); // get list of words
w.solve('12 34');

w.solve('80 05 55 12 34');

// Possible for 1234: teen mario
