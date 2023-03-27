let value = prompt("enter your text").toString().trim();

// let value = "mathi"

let str = value.toLowerCase();

// 123

// let reverseStr = "";

// for (let i = str.length  ; i >= 0 ; i--){
//     reverseStr += str.charAt(i);
// }
let answer = "yes";

for(let i=0;i < str.length;i++){
    if(str.charAt(i) != str.charAt(str.length - i -1)){
        answer = "no";
        break;
    }
}
console.log(answer);
// if(str == reverseStr){
//     alert(`${value} is a palindrome`);
// }
// else{
//     alert(`${value} is not a palindrome`);
// }

