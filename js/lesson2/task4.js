let year = Number(prompt("choose year:"));
if(year%4==0){
    console.log("This year has 366 days!")
}
else if(year%100==0 && year%400!=0){
    console.log("This year has 365 days!")
}
else{
    console.log("This year has 365 days!")
};