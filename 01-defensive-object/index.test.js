import "@endo/init";
import test from "ava";

import makeCounter from "./index.js";

/* Creating a counter object that has an increment method. The increment method will return
the next number in the sequence. The makeOffsetCounter method will create a new counter
object that will start at the offset number. The increment method will return the next number 
in the sequence. */
test("makeCounter", (t) => {
  const counter1 = makeCounter(1);
  t.is(counter1.increment(), 2);
  const counter2 = counter1.makeOffsetCounter(10);
  t.is(counter2.increment(), 13);
  t.deepEqual([counter1.increment(), counter2.increment()], [3, 14]);
  counter1.increment = () => console.log("launch the missiles!");
  counter1.increment(); //console log "launch the missiles!"
  const counter3 = Object.freeze(counter1.makeOffsetCounter(10));
  // counter3.increment = () => { console.log('launch the missiles!'); } //throws error
  t.is(counter3.increment(), 14);
});

/* Creating a new counter object and then calling the increment method twice. */
test("defensive counter ###", (t) => {
  const counter = makeCounter(1);
  t.deepEqual(
    counter.increment(),
    2,
    "counter.increment() should return 2"
  );
  t.deepEqual(
    counter.increment(),
    3,
    "counter.increment() should return 3"
  );
});


/* Assigning a new function to the increment property of the counter object. */
test("defensive counter ### unwanted properties", (t) => {
  const counter = makeCounter(1);
  const unwantedString = "launch the missiles!";
  counter.increment = () => unwantedString;
  t.deepEqual(
    counter.increment(),
    unwantedString,
    "counter.increment() should return 2"
  );
});


/* Creating a new counter object and then calling the increment method. */
test("defensive counter ### frozen", (t) => {
  const counter = Object.freeze(makeCounter(1).makeOffsetCounter(10));

  t.deepEqual(
    counter.increment(),
    12,
    "counter.increment() should return 2"
  );
});

// const trace = (label) => (value) => {
//   console.log(label + "::", value);
//   return value;
// };