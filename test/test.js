var test = require('tape');
var skate = require('skatejs');
var PictureElement = require('../');

test('copies data-srcset to srcset on create', function (assert) {
  var srcset =  "examples/images/medium.jpg 375w, examples/images/large.jpg 480w, examples/images/extralarge.jpg 768w";
  var img = skate.create('img', {'data-srcset': srcset});
  assert.equal(img.getAttribute('srcset'), srcset);
});
