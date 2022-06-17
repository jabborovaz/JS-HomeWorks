function fibanachi(n){
    if(n==0){
        return 0
    }
    return n+fibanachi(n-2)
}
fibanachi(8);