# [Marshaling](https://docs.agoric.com/guides/js-programming/far.html#marshaling-by-copy-or-by-presence)

Recall that the first step in an eventual send is to marshal the method name and structured arguments; that is: to make them into a single string. This is like JSON.stringify (opens new window)but it can handle values such as undefined and BigInts. Also, while many forms of data are copied between vats, remotables are marshalled so that they become remote presences when unmarshaled:

![Marshaling by Counter Presence](https://docs.agoric.com/assets/img/remote-presence-fig.b98ed1a2.svg)

Then another vat can make and use the exported counters:

```js
const counter = E(publicFacet).makeCounter();
const n = await E(counter).incr();
assert(n === 1);
```