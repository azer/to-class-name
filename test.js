var test = require("prova");
var toClassName = require("./");

test('to class name', function (t) {
  t.plan(2);
  t.equal(toClassName('hello world'), 'HelloWorld');
  t.equal(toClassName('  => Çığ ö-şü <='), 'CigOSu');
});
