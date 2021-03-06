# marked-ast-crel

Using the AST generated by [marked-ast](https://github.com/pdubroy/marked-ast)
create HTML elements using [crel](https://github.com/KoryNunn/crel). Saves
doing any nasty `innerHTML` like things...


[![NPM](https://nodei.co/npm/marked-ast-crel.png)](https://nodei.co/npm/marked-ast-crel/)

[![experimental](https://img.shields.io/badge/stability-experimental-red.svg)](https://github.com/dominictarr/stability#experimental) 

## Example Usage

Simple example:

```
npm run simple
```

```js
var marked = require('marked-ast');
var markedCrel = require('marked-ast-crel');

function append(el) {
  document.body.appendChild(el);
}

marked.parse('Some **test** [content](http://www.google.com)').map(markedCrel).forEach(append);

```

A little more complex (uses `brfs`):

```
npm run complex
```

```js
var fs = require('fs');
var marked = require('marked-ast');
var hljs = require('highlight.js');
var qsa = require('fdom/qsa');
var crel = require('crel');
var markedCrel = require('marked-ast-crel');
var content = fs.readFileSync(__dirname + '/complex.md', 'utf8');

function append(el) {
  document.body.appendChild(el);
}

document.body.appendChild(crel('link', {
  rel: 'stylesheet',
  href: 'https://highlightjs.org/static/styles/default.css'
}));

marked.parse(content).map(markedCrel).forEach(append);

qsa('pre code').forEach(function(el) {
  hljs.highlightBlock(el);
});


```

## License(s)

### MIT

Copyright (c) 2014 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
