// https://www.npmjs.com/package/ses
import 'ses';

lockdown();

const c = new Compartment({
  print: harden(console.log),
});

c.evaluate(`
  print('Hello! Hello?');
`);