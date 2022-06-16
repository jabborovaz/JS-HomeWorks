let word = "hETReOOPlHHKp";
let newWord = "";
for(i=0; i<word.length; i++){
    if(word.charAt(i)==word.charAt(i).toLowerCase()){
        newWord+=word.charAt(i)
    }
}
console.log(newWord);