// Modules
const names = require("./4-firstModule.js");
const greet = require("./5-utils.js");
const data = require("./6-alternate-flavours.js");
require("./7-mind-grenade.js");
console.log(data);
greet(names.john);
greet(names.peter);
