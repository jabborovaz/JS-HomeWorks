function fibanachi(n){
    if(n==0){
        return 0
    }

    if(n == 1) {
        return 1
    }
    return fibanachi(n-2)+fibanachi(n-1)
}
console.log(fibanachi(8));