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
        console.log('set called', arguments)
        if (change.oldValue !== change.newValue) {
          onModify(el);
        }
      }
    })
  }
});

skate('data-srcset', {
  extends: 'img',
  type: attribute,
  properties: {
    'data-srcset': skate.property.string({
      set: function (el, change) {
        console.log('set called', arguments)
        var srcsetVal = el.getAttribute('srcset');
        if ((change.oldValue !== change.newValue) && (change.newValue !== srcsetVal)) {
          el.setAttribute('srcset', change.newValue)
        }
      }
    })
  }
});

module.exports = skate('picture', {
  created: onCreate
});
