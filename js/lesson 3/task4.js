function countVowels(string, len = string.length){
    let newString = "";
    if(len == 0) {
        return "";
    }
        newString+=string[len-1];
    
    return newString+countVowels(string, len-1);
}
countVowels("hello");