testcaseInput = ["madam",123,"","empty"];
testcaseOutput = ["yes","no","no","no"];

function checkPalindrome(){

    let answer = "yes";

    for(let j=0; j< testcaseInput.length ; j++){

        let value = testcaseInput[j].toString().trim();
        let str = value.toLowerCase();

        for(let i=0;i < str.length;i++){
            if(str.charAt(i) != str.charAt(str.length - i -1)){
                answer = "no";
                break;
            }
        }
    }
    
}
checkPalindrome();