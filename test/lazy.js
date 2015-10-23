var test = require('tape');

require('webcomponents.js/webcomponents-lite');
var skate = require('skatejs');
var PictureElement = require('../lazy');

test('copies data-srcset to srcset on create', function (t) {
  t.plan(1);
  var srcset =  "examples/images/medium.jpg 375w, examples/images/large.jpg 480w, examples/images/extralarge.jpg 768w";
  var img = skate.create('data-srcset', { 'data-srcset': srcset } );
  t.equal(img.getAttribute('srcset'), srcset);
});

test('copies data-src to src on create', function (t) {
  t.plan(1);
  var src =  "examples/images/medium.jpg";
  var img = skate.create('data-src', { 'data-src': src } );
  t.equal(img.getAttribute('src'), src);
});
