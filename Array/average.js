var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);

function betterThanAverage(arr) {
    var sum = arr.reduce((a, b) => a + b) / arr.length;
    var newarr = [];
    for (i=0; i <= arr.length; i++){
    if (arr[i] > sum){
    newarr.push(arr[i]);
    }
    }
    return newarr.length;
}
console.log(result);
