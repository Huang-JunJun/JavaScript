const trailingZeroes = (n) => {
  let k = 0
  let sum = 1
  while(k < n){
    k++
    sum = k * sum
  }

  let count = 0
  while(sum % 10 === 0 && sum > 10){
    sum = sum / 10
    count++
  }
  

  return count
}

var trailingZeroes1 = function(n) {
  let ans = 0;
  while (n !== 0) {
      n = Math.floor(n / 5);
      ans += n;
  }
  return ans;
};
console.log(trailingZeroes(10));