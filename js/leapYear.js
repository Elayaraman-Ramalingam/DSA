// let year = prompt("Enter the year :") ;

// if ( (( year % 4 == 0 ) && (year % 100 != 0)) || (year % 400 ==00) ){
//     console.log(`${year} is a leap year`)
// } 
// else{
//     console.log(`${year} is not a leap year`);
// }

// function printLeapYear(from,to){
//     for(let year = from ; year <= to ; year++){
//         if ( (( year % 4 == 0 ) && (year % 100 != 0)) || (year % 400 ==00) ){
//             console.log(`${year} is a leap year`)
//         } 
//         else{
//             console.log(`${year} is not a leap year`);
//         }
//     }
// }

// printLeapYear(0,1000);

function printLeapYearOnly(from,to){
    console.log(`The Leap years between ${from} and ${to} are :`)
    for(let year = from ; year <= to ; year++){
        if ( (( year % 4 == 0 ) && (year % 100 != 0)) || (year % 400 ==00) ){
            console.log(`${year}`)
        } 
    }
}

printLeapYearOnly(0,3000);