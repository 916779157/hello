/**
 * @param {number} n
 * @return {boolean}
 */
  /*n & (n - 1)���������ж�һ�����Ƿ�Ϊ2�Ĵη��� 
*/
var isPowerOfTwo = function(n) {
  if( n > 0 && ((n & (n - 1)) == 0 )){
    return true;
  }
  return false;
};