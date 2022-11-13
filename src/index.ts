function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let day = 0; day < prices.length - 1; day++) {
    if (prices[day] < prices[day + 1]) {
      profit += prices[day + 1] - prices[day];
    }
  }

  return profit;
}

console.log(maxProfit([1, 2, 3, 4, 5]));
