let str = "begin";
let str2 = "";
for(i=0; i<str.length; i++){
    if(str.charAt(i)=="a" || str.charAt(i)=="o" 
    || str.charAt(i)=="i" || str.charAt(i)=="e" || str.charAt(i)=="u"
    || str.charAt(i)=="y" ) {
        str2+=str.charAt(i)
    }
}
console.log(str2);