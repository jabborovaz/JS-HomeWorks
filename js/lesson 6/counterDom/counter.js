let div = document.querySelector(".container");
let plusBtn = document.createElement("button");
plusBtn.innerText = "plus";
plusBtn.classList.add("plus")
div.appendChild(plusBtn);
let reset = document.createElement("button");
reset.innerText = "reset";
reset.classList.add("reset");
div.appendChild(reset);
let minusBtn = document.createElement("button");
minusBtn.innerText = "minus";
minusBtn.classList.add("minus")
div.appendChild(minusBtn);

let result = document.createElement("div");
result.innerHTML = Number(0);
result.classList.add("result")
div.appendChild(result);

plusBtn.onclick = () => {
    let plusOne = Number(result.innerHTML);
    result.innerHTML = ++plusOne;
    if (result.innerHTML > 0) {
        result.style.color = "green";
    }
    else if (result.innerHTML == 0) {
        result.style.color = "black"
    }
}

reset.onclick = () => {
    result.innerHTML = 0;
    result.style.color = "black";
}


minusBtn.onclick = () => {
    let minusOne = Number(result.innerHTML - 1);
    result.innerHTML = minusOne;
    if (result.innerHTML < 0) {
        result.style.color = "red"
    }
    else if (result.innerHTML == 0) {
        result.style.color = "black"
    }

}