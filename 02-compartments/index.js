//https://hackmd.io/@ZFlbCaR1Q06UzHk6tcn2dg/rk1yMNeQF#
import "ses";

lockdown();

const makeCounter = init => {
    let value = init;
    return harden({
        increment: () => (value += 1),
        decrement: () => (value -= 1),
        makeOffsetCounter: delta => makeCounter(value + delta),
    });
};

const c1 = makeCounter(1); c1.increment();
const c2 = c1.makeOffsetCounter(10);
c2.increment();
[c1.increment(), c2.increment()];


//pervasive mutability
//gives increment unwanted properties
c1.increment = () => console.log('launch the missiles!');
//console log "launch the missiles!"
c1.increment();


//defensive objects
//frozen object
const c3 = Object.freeze(c1.makeOffsetCounter(10));
//attempt to add property to frozen object
c3.increment = () => { console.log('launch the missiles!'); }
//returns correct value
c3.increment()