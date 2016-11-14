var fs = require('fs');
var marked = require('marked-ast');
var hljs = require('highlight.js');
var qsa = require('fdom/qsa');
var crel = require('crel');
var markedCrel = require('..');
var content = fs.readFileSync(__dirname + '/complex.md', 'utf8');

function append(el) {
  document.body.appendChild(el);
}

document.body.appendChild(crel('link', {
  rel: 'stylesheet',
  href: 'https://highlightjs.org/static/demo/styles/default.css'
}));

marked.parse(content).map(markedCrel).forEach(append);

qsa('pre code').forEach(function(el) {
  hljs.highlightBlock(el);
});

