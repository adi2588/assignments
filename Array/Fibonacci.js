function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (i =1; i<= n; i++ ){
    sum = fibArr[i-1] + fibArr[i];
    fibArr.push(sum);
    }
    return fibArr;
}
var result = fibonacciArray(11);
console.log(result); 






// we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
