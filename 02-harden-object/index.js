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
const capable = harden({
  inc() {
    counter++;
  },
  wallet() {
    userId = 123;
  },
});

// export incapable and capable
export { incapable, capable };

// Demonstrate frozen object. Throws error.
// capable.incr = () => { console.log('launch the missiles!') };
// capable.incr()

// to elaborate:
// Alice creates incapable and passes it to Bob (who is supposed to count people in a room) and Mallory.
// Mallory does incapable.incr = () => { console.log('launch the missiles!') };.
// Then Bob does incapable.incr() , thinking he's just doing his job, not realizing he's launching missiles!