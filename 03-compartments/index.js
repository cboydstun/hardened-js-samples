// https://www.npmjs.com/package/ses
import 'ses';

lockdown();

const c = new Compartment({
    print: harden(console.log),
});

c.evaluate(`
  print('Hello! Hello?');
`);

console.log(c.globalThis === globalThis); // false
console.log(c.globalThis.JSON === JSON); // true

const c1 = new Compartment();
const c2 = new Compartment();
console.log(c1.globalThis === c2.globalThis); // false
console.log(c1.globalThis.JSON === c2.globalThis.JSON); // true

const f1 = new c.globalThis.Function('return globalThis');
f1() === c1.globalThis; // true
const f2 = new c.globalThis.Function('return globalThis');
f2() === c2.globalThis; // true

f1() === f2(); // false
