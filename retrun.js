//factorial
//5! = 5*4*3*2*1
//4! = 4*3*2*1
//0! = 1 [0 factorial is always 1]
//1! = 1 [1 factorial is always 1]

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  //console.log(`The factorial of ${number} is ${result}`);
  return result;
}

function two() {
  const data = factorial(5);
  console.log(data);
}
two();
//factorial(13);
