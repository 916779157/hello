/*Best Time to Buy and Sell Stock Ⅱ
最佳时间买入和卖出股票让、Ⅱ
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices){
  var profit = 0;
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      profit += prices[i] - prices[i - 1];
    }
  }  
  return profit;
};