const data = [20, 88, 9, 89, 0, 3, 91];
// get max data
function getMax(arrayData) {
  let maxData = arrayData[0];
  for (let i = 1; i < arrayData.length; i++) {
    if (arrayData[i] > maxData) {
      maxData = arrayData[i];
    }
  }
  console.log(`Max data is: ${maxData}`);
}
// getMin data

function getMin(arrayData) {
  let minData = arrayData[0];
  for (let i = 1; i < arrayData.length; i++) {
    if (arrayData[i] < minData) {
      minData = arrayData[i];
    }
  }
  console.log(`Min data is: ${minData}`);
}

function getMaxMin(type, val) {
  let result;
  if (type == "max") {
    result = getMax(val);
  } else if (type == "min") {
    result = getMin(val);
  } else {
    console.log("check aging");
  }
}

getMaxMin("max", data);
getMin("min", data);
