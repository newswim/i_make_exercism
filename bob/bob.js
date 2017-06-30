"use strict"
/**
 * Bob - an impossible person.
 *   Bob answers 'Sure.' if you ask him a question.
 *   He answers 'Whoa, chill out!' if you yell at him.
 *   He says 'Fine. Be that way!' if you address him without actually saying
 *   anything.
 *   He answers 'Whatever.' to anything else.
 *
 */
var Bob = function() {};
/**
 *
 * @param {string} phrase - whatever you want to tell Bob.
 *
 */
Bob.prototype.hey = function(phrase) {
  if (phrase.toUpperCase() == phrase && phrase.match(/[A-Z]/)) {
    return 'Whoa, chill out!'
  } else if (phrase.slice(-1) == '?') {
    return 'Sure.'
  } else if (phrase == '' || phrase.match(/\s+\s/)) {
    return 'Fine. Be that way!'
  }
  return 'Whatever.'
};

module.exports = Bob;
