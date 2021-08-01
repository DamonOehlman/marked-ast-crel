const fs = require('fs');
const marked = require('marked-ast');
const hljs = require('highlight.js');
const qsa = require('fdom/qsa');
const crel = require('crel');
const markedCrel = require('..');
const content = fs.readFileSync(__dirname + '/complex.md', 'utf8');

const append = el => document.body.appendChild(el);

document.body.appendChild(
  crel('link', {
    rel: 'stylesheet',
    href: 'https://highlightjs.org/static/demo/styles/default.css',
  }),
);

marked.parse(content).map(markedCrel).forEach(append);

qsa('pre code').forEach(function (el) {
  hljs.highlightBlock(el);
});
