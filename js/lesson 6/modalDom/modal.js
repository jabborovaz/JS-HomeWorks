let btn = document.querySelector(".btn");
let modal = document.querySelector(".modal");
console.log(modal);
let modalContent = document.querySelector(".modal-content");
console.log(modalContent);
let close = document.querySelector(".close");
console.log(close);

btn.onclick = () =>{
    modal.style.display = "block"
}

close.onclick = () =>{
    modal.style.display = "none"
}