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
console.log(Object.isFrozen(capability));
// true
console.log(Object.isFrozen(capability.inc));
// true
console.log(Object.isFrozen(capability.wallet));
// true
