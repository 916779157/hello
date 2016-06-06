/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits){
  for (var i = digits.length - 1; i >= 0; -- i) {
    if (digits[i] <= 8) {
      digits[i] = digits[i] + 1;
        return digits;
    } else {
      if (i !== 0) {
        digits[i] = 0;
      } else {
        digits[0] = 1;
        digits.push(0);
        return digits;
      }
    }   
  }
};