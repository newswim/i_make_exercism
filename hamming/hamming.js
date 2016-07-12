"use strict"
/**
 * Hamming - a function with a compute() method which returns the difference
 *           between two strings of nucleotides and marks the indices where
 *           the differences occur.
 */
var Hamming = function () {}
/**
 *
 * @param {string} nuc1 - comparator string of nucleotides
 * @param {string} nuc2 - ditto.
 *
 */
Hamming.prototype.compute = function (nuc1, nuc2) {
  var splitString1 = nuc1.split(""),
      splitString2 = nuc2.split(""),
      difference   = []

  if (nuc1.length !== nuc2.length)
    throw new Error('DNA strands must be of equal length.')

  if (nuc1 == nuc2) {
    return 0
  } else {
    for (let i = 0; i <= nuc1.length; i++) {
      if (splitString1[i] !== splitString2[i]) {
        difference.push(i)
      }
    }

    return difference.length
  }
}

module.exports = Hamming
