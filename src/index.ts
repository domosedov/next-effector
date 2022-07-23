import { createStore, createEvent } from "effector";

export const $count = createStore(0);
export const increment = createEvent();

$count.on(increment, (currentCount) => currentCount + 1);
