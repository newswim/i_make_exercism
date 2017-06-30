var Bob = function() {};

Bob.prototype.hey = function(input) {
  var response = 'Whatever.';

  if (input.trim() == '') {
    response = 'Fine. Be that way!';
  } else if (this.isYelling(input)) {
    response = 'Whoa, chill out!'
  } else if (this.isQuestion(input)) {
    response = 'Sure.';
  }

  return response
};

Bob.prototype.isQuestion = function(input) {
  return input[input.length-1] === '?'
}

Bob.prototype.isYelling = function(input) {
  return input === input.toUpperCase() && input.toLowerCase() !== input;
}

module.exports = Bob;
