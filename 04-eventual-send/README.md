# [EVENTUAL SEND](https://docs.agoric.com/guides/js-programming/eventual-send.html)

One of the ways [Zoe partitions risk](https://www.youtube.com/watch?v=T6h6TMuVHKQ&t=368s) is by running in its own vat, separate from any smart contract that might use too much compute time or heap space. The smart contracts also run in separate vats.

![Zoe Partitions Risk](https://docs.agoric.com/assets/img/zoe-partitions-risk-slide.f012d7b1.svg)

The E() wrapper works with:
 
- remote presences (local proxies for objects in remote vats)
- local objects (in the same vat)
- promises for remote presences or local objects

In all cases, E(x).method(...args) returns a promise.

