/**
 * @param {number} n
 * @return {boolean}
 */
 /*3^x=n
log(3^x) = log(n)
x log(3) = log(n)
x = log(n) / log(3)*/
/*
res = Math.log(n)/Math.log(3); 
*/
var isPowerOfThree = function(n) {
  if (n <= 0) return false;
  if (n == 1 ) return true;
  res = Math.log(n)/Math.log(3); 
  var s = Math.ceil(res);
  var d = Math.floor(res);
  if( Math.pow(3,s) == n || Math.pow(3,s) == n ) {
    return true;
  }
  return false;
};