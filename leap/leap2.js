//Leap Year Calculator
//By: Noel Behailu
//Date Created: 7/11/16

var Year = function() {}; //prototype

Year.prototype.isLeap = function(input) {     //start of program
  if (input % 4 == 0 && input % 400 == 0 ) {   //if input is divisible by 4 and 400
    return true;                              //it is a leap year
  } else {                                    //otherwise
    return false;                             //it is not
  }
}
module.exports = Year;
