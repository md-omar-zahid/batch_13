// fibonacci series
//0 1 1 2 3 5 8 12 20 32 52
// input=5 , output => 0 1 1 2 3
// input= 8, output = > 0 1 2 3 5 8 12 20

function fibonacci(len) {
  let series = [0, 1];
  let currentData;
  for (i = 2; i < len; i++) {
    currentData = series[i - 1] + series[i - 2];
    series.push(currentData);
  }
  console.log(`Expected Febonacci series is: ${series}`);
}
fibonacci(8);
