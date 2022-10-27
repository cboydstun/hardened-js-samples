# [Remotables](https://docs.agoric.com/guides/js-programming/far.html)

Calls to remote presences must only contain passable arguments and return passable results. There are three kinds of passables:

Remotables: objects with methods that can be called using E() eventual send notation
Pass-by-copy data, such as numbers or hardened structures
Promises for passables
Every object exported from a smart contract, such a publicFacet or creatorFacet, must be passable. All objects used in your contract's external API must be passable. All passables must be hardened.

Consider what might happen if we had a remote item and we did not harden some pass-by-copy data that we passed to it: 

```js
let amount1 = { brand: brand1, value: 10n };
await E(item).setPrice(amount1); // Throws, but let's imagine it doesn't.
amount1.value = 20n;
```

Now amount1 is supposedly both in the local and the remote vat, but the value is 20n in the local vat but 10n in the remote vat. (Worse: the remote vat might be the same as the local vat.) Requiring harden() for pass-by-copy data leads to behavior across vats that is straightforward to reason about.

