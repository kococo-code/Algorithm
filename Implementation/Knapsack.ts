function KnapSack(profits: number[], weights: number[], capacity: number) {
  function KnapSackRecursive(
    profits: number[],
    weights: number[],
    capacity: number,
    currIndex: number
  ): number {
    if (capacity <= 0 || currIndex >= profits.length) {
      return 0;
    }
    let profit1 = 0;
    if (weights[currIndex] <= capacity) {
      profit1 =
        profits[currIndex] +
        KnapSackRecursive(
          profits,
          weights,
          capacity - weights[currIndex],
          currIndex + 1
        );
    }
    const profit2 = KnapSackRecursive(
      profits,
      weights,
      capacity,
      currIndex + 1
    );
    return Math.max(profit1, profit2);
  }
  return KnapSackRecursive(profits, weights, capacity, 0);
}
var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
const value = KnapSack(profits, weights, 7);
console.log(value);
