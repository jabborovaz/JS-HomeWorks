let information = document.querySelector(".inform");
let photo = document.querySelector(".photo");
let name = document.querySelector(".name");
let prof = document.querySelector(".prof");
let add = document.querySelector(".btn");
let result = document.querySelector(".result");

add.onclick = () =>{
    let img = document.createElement("img");
    img.src.innerText = photo.value;
    result.appendChild(img);
    result.innerHTML = `${img}
                        <h1>${name.value}</h1>
                        <p>${prof.value}</p>`
};


