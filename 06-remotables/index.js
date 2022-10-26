// https://docs.agoric.com/guides/js-programming/far.html#far-remotable-and-marshaling
// import { Far, passStyleOf } from '@endo/marshal';
// const makeCounter = () => {
//     let count = 0;
//     return Far('counter', {
//         incr: () => (count += 1),
//         decr: () => (count -= 1),
//     });
// };
// const publicFacet = Far('makeCounter', { makeCounter });
// assert(passStyleOf(publicFacet) === 'remotable');

// https://www.npmjs.com/package/@endo/marshal
// import '@endo/init';
// import { makeMarshal } from '@endo/marshal';
// const m = makeMarshal();
// const o = harden({a: 1});
// const s = m.serialize(o);
// console.log(s); // { body: '{"a":1}', slots: [] }
// const o2 = m.unserialize(s);
// console.log(o2); // { a: 1 }

