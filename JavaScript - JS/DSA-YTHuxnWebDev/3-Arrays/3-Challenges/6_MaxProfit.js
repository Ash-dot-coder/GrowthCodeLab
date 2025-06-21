const maxProfit = (prices) => {
  let minPrice = prices[0]; // Assume the first day is the cheapest to buy
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrices = prices[i];
    // console.log(prices[i]);

    // Update minimum price if a lower price is found
    minPrice = Math.min(minPrice, currentPrices);
    // console.log(minPrice);

    // Calculate potential profit for selling today
    const potentialProfit = currentPrices - minPrice;
    // console.log(potentialProfit);

    // Update maxProfit if a higher profit is found
    maxProfit = Math.max(maxProfit, potentialProfit);
    // console.log(maxProfit);
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const prices1 = [1, 8, 3, 9, 2, 3];

const profit = maxProfit(prices);
const profit1 = maxProfit(prices1);

console.log("Maximum profit: ", profit); // 5
console.log("Maximum profit: ", profit1); // 8
