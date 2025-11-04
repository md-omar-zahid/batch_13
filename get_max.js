// find out the max data
// binary search
const data = [20, 88, 9, 89, 0, 3, 91];

function getMax(arrayData) {
  //const data = [20, 88, 9, 89, 0, 3, 91];
  let maxData = arrayData[0];

  for (let i = 1; i < arrayData.length; i++) {
    if (arrayData[i] > maxData) {
      maxData = arrayData[i];
    }
  }
  console.log(`Max data is: ${maxData}`);
}
getMax(data);
