var fs = require('fs');
var marked = require('marked-ast');
var crel = require('..');
var content = fs.readFileSync(__dirname + '/complex.md', 'utf8');

function append(el) {
  document.body.appendChild(el);
}

marked.parse(content).map(crel).forEach(append);
