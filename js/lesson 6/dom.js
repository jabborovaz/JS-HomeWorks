let redBox = document.querySelector(".red-box");
let textInp = document.querySelector(".text-form");
let btn = document.querySelector(".btn");
let table = document.createElement("table");
let thead = document.createElement("thead");
let td = document.createElement("td");
let tr = document.createElement("tr");
redBox.append(table);
table.append(thead);
thead.innerText = "this table";
table.append(td);
td.innerText = "name";
td.append(tr);
tr.classList.add("table-radius");
console.log(tr)
tr.innerText = "John";

// btn.onclick = ()=>{
//     redBox.style.backgroundColor = "red";
//     let newBtn = document.createElement("button");
//     newBtn.innerText = "back";
//     redBox.append(newBtn);
//     newBtn.onclick = () =>{
//         redBox.style.backgroundColor = "aqua";
//     }
// };

btn.onclick = () =>{
    let nam = textInp.value;
    alert(`hello ${nam}`)
};