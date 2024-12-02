/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      return reject(new TypeError('Argument is not an iterable'));
    }

    const results = [];
    let resolvedCount = 0;

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          resolvedCount++;
          if (resolvedCount === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });

    if (promisesArray.length === 0) {
      resolve(results);
    }
  });
};
