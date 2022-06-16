// let str = "aabbccdde";
// let str2 = "";
// for(i=0; i<str.length; i++){
//     if(str.charAt(i)==str.charAt(i+1)){
//         str2+=str.charAt(i)
//     }
// }
// for(j=0; j<str.length; j++){
//     if(!str2.includes(str.charAt(j))){
//         console.log(str.charAt(j))
//     }
// }

let str = "aababc";
let cnt = 0;
let cnt1 = 0;
let cnt2 = 0;
for(i=0; i<str.length; i++){
    if(str.charAt(i)<str.charAt(i+1)&&str.charAt(i+1)<str.charAt(i+2)){
        cnt2++
        console.log(1)
    }
    if(str.charAt(i)=="a"){
        cnt++
    }
    else if(str.charAt(i)>str.charAt(i+1)){
        cnt1++
        
    }
        
    

}
console.log(`a=${cnt}`);
console.log(`ab=${cnt1}`);
console.log(`abc=${cnt2}`);

