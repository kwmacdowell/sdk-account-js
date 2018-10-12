[logo]: https://www.xy.company/img/home/logo_xy.png "XYAccount"

![logo]

# XYAccount JavaScript Client

## Branches

### Master

[![Build Status](https://travis-ci.com/XYOracleNetwork/sdk-account-js.svg?token=A85R2pDnngMDyWoqeLUG&branch=master)](https://travis-ci.com/XYOracleNetwork/sdk-account-js)
[![BCH compliance](https://bettercodehub.com/edge/badge/XYOracleNetwork/sdk-account-js?branch=master&token=da3517ea47ce1e5d4a215cde849d5a3db2147265)](https://bettercodehub.com/results/XYOracleNetwork/sdk-account-js)

### Develop

[![Build Status](https://travis-ci.com/XYOracleNetwork/sdk-account-js.svg?token=A85R2pDnngMDyWoqeLUG&branch=develop)](https://travis-ci.com/XYOracleNetwork/sdk-account-js)
[![BCH compliance](https://bettercodehub.com/edge/badge/XYOracleNetwork/sdk-account-js?branch=develop&token=da3517ea47ce1e5d4a215cde849d5a3db2147265)](https://bettercodehub.com/results/XYOracleNetwork/sdk-account-js) [![Greenkeeper badge](https://badges.greenkeeper.io/XYOracleNetwork/sdk-account-js.svg)](https://greenkeeper.io/)

## Usage

### Server ([NodeJS](https://nodejs.org/en/))

To use XYAccounts in Node JS, simply include the library using import or require

```javascript
const XYAccount = require('./sdk-account-js')
```

```javascript
import XYAccount from './sdk-account-js'
```

### Website ([Browserify](http://browserify.org/))

If you are using the library as an include that will be process during your website build, just add the library.  The configuration for how Browserify should build it is included in the package.json file

```javascript
const XYAccount = require('./sdk-account-js')
```

```javascript
import XYAccount from './sdk-account-js'
```

### Website (Direct Link)

If you are using the library on an existing website and just want to include it, use the public link

```html
<script src="https://account.xyo.network/js/account.js"></script>
<script>
  window.xyAccountLoaded(XYAccount) {

  }
</script>
```

## Dev Process

We use the "Github Flow" methodology.
Please review [Github Flow](https://guides.github.com/introduction/flow/)

When you wish to make changes or add new fetures, please do the following things:

1. Create a new Branch from the Master branch and follow these naming conventions [Naming Conventions](https://github.com/chrisjlee/git-style-guide#short-well-defined-tokens)

Use "grouping" tokens in front of branch names. The groups can be named appropriately to match one's workflow.

```
feature/new-nav
bug/footer-links
feature/hero-section-animation
```

## License

Only for internal XY Company use at this time

## Credits

Made with ❤️
by [XYO](https://xyo.network)