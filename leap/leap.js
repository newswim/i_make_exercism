// Leap Year Determining Machine
// By: Dan Minshew
// Date Created: 7/11/16
"use strict"
// @Leap - A function which determines whether or not a year is a leap year.
//         the conditions are:
//            - on every year that is evenly divisible by 4
//              - except every year that is evenly divisible by 100
//                - unless the year is also evenly divisible by 400

/**
 * Determines whether or not a year is a leap year.
 *
 * @param {number} year - valid numeric year.
 *
*/
var Year = function (year) {
  this.year = year
}

Year.prototype.isLeap = function () {
  if (this.year % 4   === 0 &&
      this.year % 100 !== 0 ||
      this.year % 400 === 0       ) {
    return true
  } else {
    return false
  }
  return null
}
module.exports = Year
