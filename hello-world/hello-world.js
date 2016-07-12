// @HelloWorld - A function that greets the person calling,
// or defaults to 'Hello, World!' if no input is provided.
var HelloWorld = function() {};
/**
  * @param {string} input - name of the person calling the function
*/
HelloWorld.prototype.hello = function(input) {
  if (!input)
    return 'Hello, World!'
  return 'Hello, ' + input + '!'
};

module.exports = HelloWorld;
