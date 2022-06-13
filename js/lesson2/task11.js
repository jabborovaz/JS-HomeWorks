let arifmOperation = Number(prompt("choose your operation"));
let a = Number(prompt("choose first number"));
let b = Number(prompt("choose first number"));
switch(arifmOperation){
    case 1:
        console.log(a+b);
    break;
    case 2:
        console.log(a-b);
    break;
    case 3:
        console.log(a*b);
    break;
    case 4:
        console.log(a/b);
    break;
    default:
        console.log("we have 4 operation")    
};