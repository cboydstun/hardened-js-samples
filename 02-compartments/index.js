//https://hackmd.io/@ZFlbCaR1Q06UzHk6tcn2dg/rk1yMNeQF#
import "ses";

lockdown();

/**
 * It returns an object with three methods, one of which returns a new counter object
 */
const makeCounter = init => {
/* Creating a variable called value and assigning it the value of init. */
    let value = init;
/* Returning an object with three functions. */
    return {
        increment: () => (value += 1),
        decrement: () => (value -= 1),
        makeOffsetCounter: delta => makeCounter(value + delta),
    };
};

/* Creating a new counter object with the value of 1. */
const compartment1 = makeCounter(1); 
/* Calling the increment function on the compartment1 object. */
console.log(compartment1.increment()); // 2 

const compartment2 = compartment1.makeOffsetCounter(10);
console.log(compartment2.increment()); // 13
/* Calling the increment function on both compartment1 and compartment2 and returning the values. */
console.log([compartment1.increment(), compartment2.increment()]); // [3, 14]

//pervasive mutability
//gives increment unwanted properties
compartment1.increment = () => console.log('launch the missiles!');
compartment1.increment(); //console log "launch the missiles!"

//defensive objects
//frozen compartment
const compartment3 = Object.freeze(compartment1.makeOffsetCounter(10));
// compartment3.increment = () => { console.log('launch the missiles!'); } //throws error
console.log(compartment3.increment()); // 14