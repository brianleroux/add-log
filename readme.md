# add-log

contrived example demonstrating es6 modules import/export in a node friendly manner

## install

    npm i add-log

### usage

```javascript
    var addlog = require('add-log')
    addlog(1, 2) // 3
```

### building

- `npm run js` builds the src to es5
- `npm test` runs the tests as es6 src themselves importing the es5 generated src
