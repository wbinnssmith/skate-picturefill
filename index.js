var skate = require('skatejs');
var attribute = require('skatejs-type-attribute');
var picturefill = require('picturefill');

function onCreate(el) {
  picturefill({ elements: [el] });
}

function onModify(el) {
  picturefill({ reevaluate: true, elements: [el] });
}

skate('srcset', {
  extends: 'img',
  type: attribute,
  properties: {
    srcset: skate.property.string({
      set: function (el, change) {
        if (change.oldValue !== change.newValue) {
          onModify(el);
        }
      }
    })
  }
});

module.exports = skate('picture', {
  created: onCreate
});
