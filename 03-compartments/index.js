// https://www.npmjs.com/package/ses
import 'ses';

lockdown();

/* Creating a new compartment with a hardened console.log function. */
const c = new Compartment({
    print: harden(console.log),
});

/* Evaluating the code in the compartment. */
c.evaluate(`
  print('Hello! Hello?');
`);

/* Comparing the globalThis of the compartment to the globalThis of the main program. */
console.log(c.globalThis === globalThis); // false
console.log(c.globalThis.JSON === JSON); // true

/* Creating two compartments and comparing their globalThis. */
const c1 = new Compartment();
const c2 = new Compartment();
console.log(c1.globalThis === c2.globalThis); // false
console.log(c1.globalThis.JSON === c2.globalThis.JSON); // true

/* Creating two functions in two different compartments and comparing them. */
const f1 = new c.globalThis.Function('return globalThis');
f1() === c1.globalThis; // true
const f2 = new c.globalThis.Function('return globalThis');
f2() === c2.globalThis; // true

f1() === f2(); // false