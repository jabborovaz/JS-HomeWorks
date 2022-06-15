// let world = "world";
// let worldMass = world.split("");
// let naoborot = worldMass.reverse();
// console.log(naoborot.join(""));

let str = "world";
let str2 = "";
for(i=str.length-1; i>=0; i--){
    str2+=str.charAt(i)
}
console.log(str2);