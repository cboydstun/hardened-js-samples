// https://www.npmjs.com/package/@endo/marshal
import '@endo/init';

import { makeMarshal } from '@endo/marshal';
const m = makeMarshal();
const o = harden({a: 1});
const s = m.serialize(o);
console.log(s); // { body: '{"a":1}', slots: [] }
const o2 = m.unserialize(s);
console.log(o2); // { a: 1 }