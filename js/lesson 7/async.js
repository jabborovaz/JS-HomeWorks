let openModal = document.querySelector(".addBtn");
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-content");
let inpName = document.querySelector(".inpName");
let inpAge = document.querySelector(".inpAge");
let single = document.querySelector(".single");
let add = document.querySelector(".sendBtn");
let close = document.querySelector(".close");
let tbody = document.querySelector(".tbody");

openModal.onclick = () => {
    modal.style.display = "block";
    inpName.value = "";
    inpAge.value = "";
    single.value = "";
};

close.onclick = () => {
    modal.style.display = "none"
}

let getUsers = async () => {
    try {
        let response = await fetch("https://6297444b14e756fe3b2c2b2c.mockapi.io/users");
        let data = await response.json();
        data.forEach(elem => {
            let tr = document.createElement("tr");
            let tdId = document.createElement("td");
            let tdCreatedAt = document.createElement("td");
            let tdName = document.createElement("td");
            let tdAge = document.createElement("td");
            let tdsingle = document.createElement("td");
            let btnDel = document.createElement("button");
            btnDel.textContent = "delete";

            tdId.innerHTML = elem.id;
            tdCreatedAt.innerHTML = elem.createdAt;
            tdName.innerHTML = elem.name;
            tdAge.innerHTML = elem.age;
            tdsingle.innerHTML = elem.single;

            tbody.appendChild(tr);
            tr.appendChild(tdId);
            tr.appendChild(tdCreatedAt);
            tr.appendChild(tdName);
            tr.appendChild(tdAge);
            tr.appendChild(tdsingle);
            tr.appendChild(btnDel);
            
            
        });
    } catch (error) {
        console.log(error)
        
    }
}
getUsers();