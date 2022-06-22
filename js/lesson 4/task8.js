let arr = [0, 0, 0, false, "", 4, 1, false, 2, "", 3];
let numb = arr.filter((elem)=> elem/1 != !isNaN);
console.log(numb);