/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  n = Math.abs(n);
  const a = n.toString().split('');
  const sum = a.reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  return sum;
};
