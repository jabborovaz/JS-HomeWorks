let div = document.querySelector(".container");
let plusBtn = document.createElement("button");
plusBtn.innerText = "plus";
// plusBtn.classList.add("plus")
plusBtn.style.backgroundColor = "green";
div.appendChild(plusBtn);
let reset = document.createElement("button");
reset.innerText = "reset";
reset.style.marginLeft = "10px";
reset.style.marginRight = "10px";
reset.style.backgroundColor = "black";
reset.style.color = "white";
div.appendChild(reset);
let minusBtn = document.createElement("button");
minusBtn.innerText = "minus";
minusBtn.style.backgroundColor = "red";
minusBtn.style.color = "white";
div.appendChild(minusBtn);

let result = document.createElement("div");
result.innerHTML = Number(0);
result.style.fontSize = "30px";
result.style.marginLeft = "70px";
result.style.marginTop = "10px";
div.appendChild(result);
// console.log(result.innerHTML);

plusBtn.onclick = () =>{
    let plusOne = Number(result.innerHTML+1);
    result.innerHTML = plusOne;
    result.style.color = "green";
}

reset.onclick = () =>{
    result.innerHTML = 0;
    result.style.color = "black";
}

minusBtn.onclick = () =>{
    let minusOne = Number(result.innerHTML-1);
    result.innerHTML = minusOne;
    result.style.color = "red";
}