/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const uniqueElements = {};
  for (const elem of arr) {
    if (uniqueElements[elem]) {
      uniqueElements[elem]++;
    } else {
      uniqueElements[elem] = 1;
    }
  }
  return Object.keys(uniqueElements).length;
};
