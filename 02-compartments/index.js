const makeCounter = init => {
    let value = init;
    return harden({
        increment: () => (value += 1),
        decrement: () => (value -= 1),
        makeOffsetCounter: delta => makeCounter(value + delta),
    });
};

const c3 = Object.freeze(c1.makeOffsetCounter(10));
c3.increment = () => { console.log('launch the missiles!'); }
c3.increment()