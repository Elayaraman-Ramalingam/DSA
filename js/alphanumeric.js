
let str = "a";

if ( /^[a-zA-Z]+$/.test(str)){
    console.log("This is not alphanumeric");
}
else if ( /^[0-9]+$/.test(str)){
    console.log("This is not alphanumeric");
}
else {
    console.log("This is alphanumeric")
}