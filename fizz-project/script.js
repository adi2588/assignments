for (i= 1; i < 100; i++){
    var a = i % 3;
    var b = i % 5;
    if (a == 0 && b == 0 ){
        console.log("FizzBuzz");
    } 
    else if (b == 0 ){
        console.log("Buzz");
    }
    else if (a == 0){
        console.log("Fizz");
    }
    else{
        console.log(i)
    }
}