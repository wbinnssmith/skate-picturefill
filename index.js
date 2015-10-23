var skate = require('skatejs');
var attribute = require('skatejs-type-attribute');
var picturefill = require('picturefill');

function onCreate(el) {
  console.log('creating')
  picturefill({ elements: [el] });
}

function onModify(el) {
  alert('modified', el.id);
  picturefill({ reevaluate: true, elements: [el] });
}

skate('picture', {
  created: onCreate
});

skate('srcset', {
  extends: 'img',
  type: attribute,
  properties: {
    srcset: skate.property.string({
      set: function (el, change) {
        console.log('setting', change)
        if (change.oldValue !== change.newValue) {
          onModify(el);
        }
      }
    }),

    'data-srcset': skate.property.string({
      set: function (el, change) {
        var srcsetVal = el.getAttribute('srcset');
        if ((change.oldValue !== change.newValue) && (change.newValue !== srcsetVal)) {
          el.setAttribute('srcset', change.newValue)
        }
      }
    })
  }
});
