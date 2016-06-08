/**
 * @param {number} n
 * @return {boolean}
 */
  /*n & (n - 1)可以用来判断一个数是否为2的次方数 
*/
var isPowerOfTwo = function(n) {
  if( n > 0 && ((n & (n - 1)) == 0 )){
    return true;
  }
  return false;
};