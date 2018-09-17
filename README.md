# universal-user-agent

> Get a user agent string in both browser and node

```js
const getUserAgent = require('universal-user-agent')
const userAgent = getUserAgent()

// userAgent will look like this
// in browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0"
// in node: Node.js/v8.9.4 (macOS High Sierra; x64)
```

## Credits

The Node implementation was originally inspired by [default-user-agent](https://www.npmjs.com/package/default-user-agent).

## License

[ISC](LICENSE.md)
