/**
 * Problem: Best Time to Buy and Sell Stock
 * You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * Output: Integer (maximum profit)
 * 
 * @param {number[]} prices
 * @return {number}
 */
var findMaxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
    
    for(let i = 0; i< prices.length; i++){
        if(minPrice > prices[i]){
            minPrice = prices[i];
        }  
        else{
            if(maxProfit < prices[i] - minPrice)
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};
console.log(maxProfit([1, 2, 5, 3, 1, 5, 7, 8, 3]))
