/**
 * @param {number} num
 * @return {boolean}
 *//*
ȷ������2�Ĵη�����֮�󣬷���ֻҪ��4�Ĵη�������1֮����Ա�3����
*/
var isPowerOfFour = function(num) {
  if (num <= 0) return false;
  if (num & (num - 1)) return false; 
  if ((num - 1) % 3 == 0) return true; 
  return false;  
};