const data = [20, 88, 9, 89, 0, 3, 91];
function getMin(arrayData) {
  let minData = arrayData[0];
  for (let i = 1; i < arrayData.length; i++) {
    if (arrayData[i] < minData) {
      minData = arrayData[i];
    }
  }
  console.log(`Min data is: ${minData}`);
}
getMin(data);
