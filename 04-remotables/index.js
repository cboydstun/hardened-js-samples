// https://docs.agoric.com/guides/js-programming/far.html#far-remotable-and-marshaling

import { Far, passStyleOf } from '@endo/marshal';

const makeCounter = () => {
    let count = 0;
    return Far('counter', {
        incr: () => (count += 1),
        decr: () => (count -= 1),
    });
};

const publicFacet = Far('makeCounter', { makeCounter });
assert(passStyleOf(publicFacet) === 'remotable');