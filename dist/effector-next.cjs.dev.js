'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var effector = require('effector');

const $count = effector.createStore(0);
const increment = effector.createEvent();

$count.on(increment, (currentCount) => currentCount + 1);

exports.$count = $count;
exports.increment = increment;
