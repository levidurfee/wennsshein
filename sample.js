const Wennsshein = require("./src/index.js");

var w = new Wennsshein()
w.populate('./dictionaries/10k.txt'); // get list of words
w.solve('12');
