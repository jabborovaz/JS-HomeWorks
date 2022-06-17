function evenOrOdd(n){
    if(n%2==0){
        return n/2
    }
    else if(n%2!=0){
        return (n*3)+1
    }
    return evenOrOdd(n)
}
evenOrOdd(20);