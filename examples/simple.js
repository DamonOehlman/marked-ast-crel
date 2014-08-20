var marked = require('marked-ast');
var markedCrel = require('..');

function append(el) {
  document.body.appendChild(el);
}

marked.parse('Some **test** [content](http://www.google.com)').map(markedCrel).forEach(append);
