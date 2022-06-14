let n = Number(prompt("type price of 1 kg"));
for(i=10; i<=20; i++){
    if(i%2==0){
    console.log(`${i/10}kg=${n*(i/10)}`);
}
}