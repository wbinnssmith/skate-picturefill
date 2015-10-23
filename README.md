# skate-picturefill

Simply `require('skate-picturefill')` and freely use the `srcset` and `<picture>` APIs.
Skate handles mutation observation so that subsequent updates are reflected by picturefill.

This module also provides deferred image loading. Simply `require('skate-picturefill/lazy')`
instead, and use `data-srcset` and `data-src` in addition to their native counterparts, which should
hold placeholders instead.

## LICENSE
MIT
