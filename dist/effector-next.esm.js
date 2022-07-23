import { createStore, createEvent } from 'effector';

var $count = createStore(0, {
  name: "$count",
  sid: "-543v3"
});
var increment = createEvent({
  name: "increment",
  sid: "rujckx"
});
$count.on(increment, function (currentCount) {
  return currentCount + 1;
});

export { $count, increment };
