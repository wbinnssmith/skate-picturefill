var skate = require('skatejs');
var attribute = require('skatejs-type-attribute');

module.exports = require('./');

skate('data-src', {
  extends: 'img',
  type: attribute,
  properties: {
    'data-src': skate.property.string({
      set: function (el, change) {
        var srcVal = el.getAttribute('src');
        if ((change.oldValue !== change.newValue) && (change.newValue !== srcVal)) {
          el.setAttribute('src', change.newValue)
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
        var srcsetVal = el.getAttribute('srcset');
        if ((change.oldValue !== change.newValue) && (change.newValue !== srcsetVal)) {
          el.setAttribute('srcset', change.newValue)
        }
      }
    })
  }
});
