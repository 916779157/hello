/*Best Time to Buy and Sell Stock 
最佳时间买入和卖出股票*/

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