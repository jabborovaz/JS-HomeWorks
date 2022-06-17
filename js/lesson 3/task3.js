function countVowels(string, len = string.length){
    let counter = 0;
    if(len == 0) {
        return 0;
    }
    
    if(string[len-1] == 'a' || string[len-1] == 'o' ||  string[len-1] == 'i' || string[len-1] == 'e' ||  string[len-1] == 'u' || string[len-1] == 'y') {
        counter++;
    }
    return counter+countVowels(string, len-1);
}
countVowels("apple");