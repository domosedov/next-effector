import { createStore, createEvent } from 'effector';

const $count = createStore(0);
const increment = createEvent();

$count.on(increment, (currentCount) => currentCount + 1);

export { $count, increment };
