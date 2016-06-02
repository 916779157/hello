/*网上的直接算法*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) { 
  return s.split('').reverse().join('');
};


/*我自己写的便于理解*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) { 
  var stack = [];
  for(var len = s.length,i=len;i>=0;i-- ){
       stack.push(s[i]);}
  return stack.join('');
};