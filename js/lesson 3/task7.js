function fun(str){
    function fun2(str2){
        return str+str2
    }
    return fun2
}
const f1 = fun("")
console.log(f1("pear"));