# [Notifiers and Subscriptions](https://docs.agoric.com/guides/js-programming/notifiers.html#notifiers-and-subscriptions)

*Notifiers* and *Subscriptions* both let a service notify clients of state changes. Specifically, both are abstractions for producing and consuming asynchronous value sequences. They rely on promises to deliver a stream of messages allowing many clients to receive notifications without the originator having to track a subscription list. An object wanting to publish updates to interested clients makes a notifier or a subscription available to them.

In JavaScript, async iterations are manipulated by `AsyncGenerators`, `AsyncIterables`, and `AsyncIterators`. For an introduction to them, see [here](https://javascript.info/async-iterators-generators).

## Distributed Asynchronous Iteration

An async iteration is an abstract sequence of values. It consists of zero or more non-final values in a fully ordered sequence, revealed asynchronously over time. In other words, the values have a full ordering, and all consumers see the whole sequence, or a subset of it, in the same order.

The sequence may continue indefinitely or terminate in one of two ways:

 - `Finish`: The async iteration successfully completes and reports any JavaScript value as a final completion.
 - `Fail`: The async iteration fails and gives a reported final reason. This should be an error object, but can be any JavaScript value.

`Finish` and `Fail` are final values. To avoid confusion, for iteration values in this doc, "final" and "non-final" just refer to position in an iteration, and not "final" in the sense of the Java keyword or similar.

## NotifierKit and SubscriptionKit

`makeNotifierKit()` makes an `{updater, notifier}` pair, while `makeSubscriptionKit()` makes a similar `{publication, subscription}` pair. Each pair’s first element (`updater` or `publication`) produces the async iteration which is then consumed using each pair’s second element (`notifier` or `subscription`).

The key difference between the two is:

 - `notifiers` are lossy.
 - - While the sequence is ordered, the consumer requests only the current value and so may never see any values that happened between requests.
 - `subscriptions` are lossless.
 - - The consumer will see every value in the sequence.