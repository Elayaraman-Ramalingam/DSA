// 1. Given 2 numbers it should print if they are equal or not equal,
// let a = 10;
// let b = 20;
// It should either a is equal to b or a is NOT equal to b

function printStatus(a,b){
if ( a == b){
    console.log("It is equal");
}
if ( a != b){
    console.log("it is not equal");
}
}

printStatus(10,20);

// 2. For a given positive integer n, it should print every number from 1 to n except x
// for eg:
// let n = 10;
// let x = 5;
// Your program should print 1 2 3 4 6 7 8 9 10
// (everything from 1 to 10 except 5)

function printExpectX(n,x){
    for(let i=1;i<=n;i++){
        if(i!=x){
            console.log(i);
        }
    }
}

printExpectX(10,7);

// 3. Given an array, print the sum of all even numbers in the array
// let a = [4, 3, 17, 10, 11,12];
// it should print 26

function printEven(myArray){

    let result =0;

    for(let i=0;i<myArray.length;i++){
        if(myArray[i] % 2 == 0){
            result += myArray[i] ;
        } 
    }
    console.log(result);
}

let a = [4, 3, 17, 10, 11,12];

printEven(a);

// 4. Given an array of length n and k (k < n) find the maximum sum of k consecutive numbers.
// for eg:
// let a = [4,5, 10, 11, 1];
// let k = 3;
// The maximum is 26.

let b = [4,5, 10, 11, 1];

let max = 0 ;

let sum = 0 ;

console.log(sum);

let k = 3;

for ( let i = 0 ; i < k ; i++){
    sum += b[i];
}
console.log(sum);