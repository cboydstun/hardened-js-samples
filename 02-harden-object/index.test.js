import { capable, incapable } from './index.js';
import test from 'ava';

test('incapable is not frozen', t => {
    t.false(Object.isFrozen(incapable));
    t.false(Object.isFrozen(incapable.inc));
    t.false(Object.isFrozen(incapable.wallet));
});

test('capable is frozen', t => {
    t.true(Object.isFrozen(capable));
    t.true(Object.isFrozen(capable.inc));
    t.true(Object.isFrozen(capable.wallet));
});

test('incapable can be modified', t => {
    incapable.incr = () => { console.log('launch the missiles!') };
    incapable.incr();
    t.pass();
});

test('capable cannot be modified', t => {
    t.throws(() => {
        capable.incr = () => { console.log('launch the missiles!') };
        capable.incr();
    });
});

test('incapable can be used and modified', t => {
    incapable.inc();
    t.pass();
});

test('capable can be used, but not modified', t => {
    capable.inc();
    t.throws(() => {
        capable.incr = () => { console.log('launch the missiles!') };
        capable.incr();
    });

    capable.wallet();
    t.throws(() => {
        capable.incr = () => { console.log('launch the missiles!') };
        capable.incr();
    });
});