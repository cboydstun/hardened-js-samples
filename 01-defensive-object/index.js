import "@endo/init";
import test from "ava";

//https://hackmd.io/@ZFlbCaR1Q06UzHk6tcn2dg/rk1yMNeQF#
//  It returns an object with three methods, one of which returns a new counter object
const makeCounter = (init) => {
  /* Creating a variable called value and assigning it the value of init. */
  let value = init;
  /* Returning an object with three functions. */
  return {
    increment: () => (value += 1),
    decrement: () => (value -= 1),
    makeOffsetCounter: (delta) => makeCounter(value + delta),
  };
};

const trace = (label) => (value) => {
  console.log(label + "::", value);
  return value;
};

// complete the test so that it's passing
test("defensive counter ###", (assert) => {
  const counter = makeCounter(1);
  assert.deepEqual(
    counter.increment(),
    2,
    "counter.increment() should return 2"
  );
  assert.deepEqual(
    counter.increment(),
    3,
    "counter.increment() should return 3"
  );
});

test("defensive counter ### unwanted properties", (assert) => {
  const counter = makeCounter(1);
  const unwantedString = "launch the missiles!";
  counter.increment = () => unwantedString;
  assert.deepEqual(
    counter.increment(),
    unwantedString,
    "counter.increment() should return 2"
  );
});

test("defensive counter ### frozen", (assert) => {
  const counter = Object.freeze(makeCounter(1).makeOffsetCounter(10));

  assert.deepEqual(
    counter.increment(),
    12,
    "counter.increment() should return 2"
  );
});

// /* Creating a new counter object with the value of 1. */
// const counter1 = makeCounter(1);
// /* Calling the increment function on the counter1 object. */
// console.log(counter1.increment()); // 2

// const counter2 = counter1.makeOffsetCounter(10);
// console.log(counter2.increment()); // 13
// /* Calling the increment function on both counter1 and counter2 and returning the values. */
// console.log([counter1.increment(), counter2.increment()]); // [3, 14]

// //pervasive mutability
// //gives increment unwanted properties
// counter1.increment = () => console.log('launch the missiles!');
// counter1.increment(); //console log "launch the missiles!"

// //defensive objects
// //frozen counter
// const counter3 = Object.freeze(counter1.makeOffsetCounter(10));
// // counter3.increment = () => { console.log('launch the missiles!'); } //throws error
// console.log(counter3.increment()); // 14
