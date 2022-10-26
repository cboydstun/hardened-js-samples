import "ses";

/* It freezes the global object. */
lockdown();

let counter = 0;
let userId;

/* Creating an insecure object with two methods. */
const incapable = {
  inc() {
    counter++;
  },
  wallet() {
    userId = 324;
  },
};

/* Freezing the object and its methods. */
const capability = harden({
  inc() {
    counter++;
  },
  wallet() {
    userId = 123;
  },
});

/* Checking if the object and its methods are frozen. */
console.log(Object.isFrozen(incapable));
// false
console.log(Object.isFrozen(incapable.inc));
// false
console.log(Object.isFrozen(incapable.wallet));
// false

// Demonstrate insecurity of the object.
incapable.incr = () => { console.log('launch the missiles!') };
incapable.incr()

console.log(Object.isFrozen(capability));
// true
console.log(Object.isFrozen(capability.inc));
// true
console.log(Object.isFrozen(capability.wallet));
// true

// Demonstrate frozen object.
capability.incr = () => { console.log('launch the missiles!') };
capability.incr()

// to elaborate:
// Alice creates incapable and passes it to Bob (who is supposed to count people in a room) and Mallory.
// Mallory does incapable.incr = () => { console.log('launch the missiles!') };.
// Then Bob does incapable.incr() , thinking he's just doing his job, not realizing he's launching missiles!