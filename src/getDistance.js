/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const { X: x1, Y: y1 } = firstPoint;
  const { X: x2, Y: y2 } = secondPoint;

  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  return parseFloat(distance.toFixed(2));
};
