let arr = [5, 10, true, "123", "13", "5"];
let numb = arr.filter((elem)=> typeof elem === "number")
let sum = numb.reduce((acam, cur)=> acam+cur);
console.log(sum);