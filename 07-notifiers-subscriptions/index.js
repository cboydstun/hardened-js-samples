// https://docs.agoric.com/guides/js-programming/notifiers.html#notifiers-and-subscriptions
import '@endo/init'
import rawTest from 'ava';
import { wrapTest } from '@endo/ses-ava';

const test = wrapTest(rawTest);
test('something', t => {
    t.is(0, 1)
})

import { makeNotifierKit } from '@agoric/notifier';
import { makeSubscriptionKit } from '@agoric/notifier';
const { updater, notifier } = makeNotifierKit();
const { publication, subscription } = makeSubscriptionKit();

// Paula the publisher says
publication.updateState('a');
publication.updateState('b');
publication.finish('done');

const consume = async subscription => {
    try {
        for await (const val of subscription) {
            console.log('non-final-value', val);
        }
        console.log('the iteration finished');
    } catch (reason) {
        console.log('the iteration failed', reason);
    }
};
consume(subscription);
// eventually prints
// non-final-value a
// non-final-value b
// the iteration finished

const observer = harden({
    updateState: val => console.log('non-final-value', val),
    finish: completion => console.log('finished', completion),
    fail: reason => console.log('failed', reason),
});
observeIteration(subscription, observer);
// eventually prints
// non-final-value a
// non-final-value b
// finished done