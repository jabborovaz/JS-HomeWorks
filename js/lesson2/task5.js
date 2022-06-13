let num = Number(prompt("choose a number"));
if(num>0 && num%2==0){
    console.log("Положительное четное число!")
}
else if(num<0 && num%2==0){
    console.log("Отрицательное четное число!")
}
else if(num>0 && num%2!=0){
    console.log("Положительное нечетное число!")
}
else if(num<0 && num%2!=0){
    console.log("Отрицательное нечетное число!")
}
else{
    console.log("Нулевое число!")
}