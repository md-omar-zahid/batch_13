// fibonacci series
//0 1 1 2 3 5 8 12 20 32 52
// input=5 , output => 0 1 1 2 3
// input= 8, output = > 0 1 2 3 5 8 12 20

function fibonacci(min, max) {
  let series = [0, 1];
  let currentData;
  let expectedData = [];
  for (i = 2; i < max; i++) {
    currentData = series[i - 1] + series[i - 2];
    series.push(currentData);
    if (currentData >= min && currentData <= max) {
      expectedData.push(currentData);
    }
  }
  //console.log(`Expected Febonacci series is: ${series}`);
  console.log(`Expectied Sereies between 25 & 80 is: ${expectedData}`);
}
fibonacci(25, 80);
