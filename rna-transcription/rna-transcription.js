"use strict"
/**
 * DnaTranscriber - function that takes a DNA strand and returns its RNA complement.
 *    Legend: G -> C
 *            C -> G
 *            T -> A
 *            A -> U
 */
var DnaTranscriber = function () {}
/**
 *
 * @param {string} dna - string of nucleotide(s)
 *
 */
DnaTranscriber.prototype.toRna = function (dna) {
  var result = []
  // string length will be 1 unit greater than array index,
  // so we should use '<' rather than '<='
  if (dna.length == 1) {
    return this.switcher.call(this, dna)
  } else {
    for (var i = 0; i < dna.length; i++) {
      var nucleotide = this.switcher.call(this, dna[i])
      result.push(nucleotide)
    }
    return result.join("")
  }
}

DnaTranscriber.prototype.switcher = function (dna) {
  switch (dna) {
    case 'G':
      return 'C'
    case 'C':
      return 'G'
    case 'T':
      return 'A'
    case 'A':
      return 'U'
    default:
      return null
  }
}

module.exports = DnaTranscriber
