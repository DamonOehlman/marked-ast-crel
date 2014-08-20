var marked = require('marked-ast');
var crel = require('..');

function append(el) {
  document.body.appendChild(el);
}

marked.parse('Some **test** [content](http://www.google.com)').map(crel).forEach(append);
