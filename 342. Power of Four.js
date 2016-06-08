/**
 * @param {number} num
 * @return {boolean}
 *//*
确定其是2的次方数了之后，发现只要是4的次方数，减1之后可以被3整除
*/
var isPowerOfFour = function(num) {
  if (num <= 0) return false;
  if (num & (num - 1)) return false; 
  if ((num - 1) % 3 == 0) return true; 
  return false;  
};