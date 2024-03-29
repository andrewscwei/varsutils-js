/**
 * VARS
 * (c) Andrew Wei
 *
 * This software is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

/**
 * Gets the key of a given value in a given object.
 *
 * @param {Object} object - Target object.
 * @param {Value}  value  - Target value.
 *
 * @alias module:vars~objects.keyOfValue
 */
function keyOfValue(object, value) {
  if (!object || !value) return null;
  if (typeof object !== 'object') return null;

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      if (object[property] === value) {
        return property;
      }
    }
  }

  return null;
}

module.exports = keyOfValue;
