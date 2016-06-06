/*Best Time to Buy and Sell Stock 
���ʱ�������������Ʊ*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var min = Infinity;
  var res = -Infinity;
  for(var i = 0; i < prices.length; i++){
  if(prices[i] < min){
    min = prices[i];
      }
  if(prices[i] > min && prices[i] - min > res){
    res = prices[i] - min;
      }
    }
  if(isFinite(res)){
    return res;
  }else{
    return 0;
    }
};