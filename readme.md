<div align="center">
    <p>
        <a href="https://github.com/ihpihpihp/wayt.js"><img src="./logo.png" width="546" alt="wayt.js"/></a>
    </p>
</div>

## About

This is a simple ```Node.js``` module.

Use ```wayt.js``` to make code wait for n milliseconds without ```setTimeout```.

## Installation

Install using ```npm```:

```sh-session
npm install wayt.js
```

## Usage

Require:

```js
const wayt = require('wayt.js');
```

Syntax:

```js
wayt(n);
```

## Examples

Use ```wayt.js```:

```js
const wayt = require('wayt.js');

function main() {
    wayt(3000);
    console.log('Hello');
    wayt(3000);
    console.log('World');
};

return main();
```

Use ```setTimeout```:

```js
function main() {
    setTimeout(() => {
        console.log('Hello');
        setTimeout(() => {
            console.log('World');
        }, 3000);
    }, 3000);
};

return main();
```

## Outputs

Use ```wayt.js```:

```sh-session
Hello
World
```

Use ```setTimeout```:

```sh-session
Hello
World
```

## Links

- [Node.js](https://nodejs.org) (Website)
- [npm](https://npmjs.com) (Website)
- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) (Mozilla API)
