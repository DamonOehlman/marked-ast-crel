const test = require('tape');
const { parse } = require('marked-ast');
const render = require('../');

test('a', t => {
  t.plan(2);
  const ast = parse('https://github.com/');
  const output = render(ast)[0];
  t.ok(output, 'got output');
  t.equal(
    output.outerHTML,
    '<p><a href="https://github.com/">https://github.com/</a></p>',
  );
});

test('img', t => {
  t.plan(2);
  const ast = parse(`![](test.png)`);
  const output = render(ast)[0];
  t.ok(output, 'got output');
  t.equal(output.outerHTML, '<p><img src="test.png"></p>');
});
