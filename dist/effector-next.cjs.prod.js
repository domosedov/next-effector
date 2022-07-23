'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var effector = require('effector');

var $count = effector.createStore(0, {
  name: "$count",
  sid: "-543v3"
});
var increment = effector.createEvent({
  name: "increment",
  sid: "rujckx"
});
$count.on(increment, function (currentCount) {
  return currentCount + 1;
});

exports.$count = $count;
exports.increment = increment;
