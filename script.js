// fibonacci iterative solution 
// O(n) linear time complexity. 
function fibonacciOne(num) {
  const array = [0, 1]; // populate with starting point, these will get added to create the next 
  for(let i = 2; i <= num; i++) {
    let a = array[i - 1]; // one place/index behind i
    let b = array[i - 2]; // two places/index behind i
    array.push(a + b); // add those indices together and push them into the array declared above. 
  }
  return array[num];
}
console.log(fibonacciOne(10));





// fibonacci recursive 
function fibonacciTwo(num) {
  if(num < 2) { // if statement to prevent an infinite loop 
    return num;
  }
  // give the input, its does the calculation/adds them, traveling back to 1. (works backwards)
  return fibonacciTwo(num - 1) + fibonacciTwo(num - 2);
}
console.log(fibonacciTwo(15));

