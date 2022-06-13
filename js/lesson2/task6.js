let chislo = Number(prompt(("choose number from 1 to 999")));
if(chislo>=1 && chislo<=999 && chislo<=9 && chislo%2==0){
    console.log("Четное однозначное число")
}
else if(chislo>=1 && chislo<=999 && chislo<=9 && chislo%2!=0){
    console.log("Нечетное однозначное число")
}
else if(chislo>=10 && chislo<=999 && chislo<=99 && chislo%2!=0){
    console.log("Нечетное двухзначное число")
}
else if(chislo>=10 && chislo<=999 && chislo<=99 && chislo%2==0){
    console.log("Четное двухзначное число")
}
else if(chislo>=100 && chislo<=999 && chislo%2!=0){
    console.log("Нечетное трехзначное число")
}
else if(chislo>=100 && chislo<=999 && chislo%2==0){
    console.log("Четное трехзначное число")
}
else{
    console.log("Выберите число не больше 999")
};