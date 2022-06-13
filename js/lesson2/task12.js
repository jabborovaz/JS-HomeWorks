let unit = Number(prompt("choose your unit"));
let line = Number(prompt("choose your line"));
switch(unit){
    case 1:
        console.log(line/10);
    break;
    case 2:
        console.log(line*1000);
    break;
    case 3:
        console.log(line);
    break;
    case 4:
        console.log(line/1000);
    break;
    case 5:
        console.log(line/100);
    break;
    default:
        console.log("we have 5 operation")    
};