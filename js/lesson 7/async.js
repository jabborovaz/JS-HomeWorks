let openModal = document.querySelector(".addBtn");
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-content");
let inpName = document.querySelector(".inpName");
let inpAge = document.querySelector(".inpAge");
let singleInp = document.querySelector(".single");
let add = document.querySelector(".sendBtn");
let close = document.querySelector(".close");
let tbody = document.querySelector(".tbody");

let editModal = document.querySelector(".editModal");
let editModalContent = document.querySelector(".editModal-content");
let editInpName = document.querySelector(".editInpName");
editInpName.value = inpName.value;
let editInpAge = document.querySelector(".editInpAge");
editInpAge.value = inpAge.value;
let editSingle = document.querySelector(".editSingle");
editSingle.value = singleInp.value;
let editSend = document.querySelector(".editSend");
let editClose = document.querySelector(".editClose");
let editBtn = document.createElement("button");
editBtn.textContent = "edit";
editBtn.onclick = () => {
    editModal.style.display = "block"
}
editClose.onclick = () => {
    editModal.style.display = "none"
}


openModal.onclick = () => {
    modal.style.display = "block";
    inpName.value = "";
    inpAge.value = "";
    singleInp.value = "";
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
            btnDel.onclick = () => {
                deleteUsers(newId)
            }

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
            tr.appendChild(editBtn);
            
            
        });
    } catch (error) {
        console.log(error)
        
    }
}
getUsers();

let postUsers = async (users) =>{
    try {
        let response = await fetch("https://6297444b14e756fe3b2c2b2c.mockapi.io/users",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)

        }
        );
        window.location.reload();
        modal.style.display = "none"
        
    } catch (error) {
        console.log(error);
        
    }
};

add.onclick = () => {
    let users = {
        name: inpName.value,
        age: Number(inpAge.value),
        single: singleInp.value
    }
    postUsers(users)
};

let newId = null;
let deleteUsers = async (id) => {
    try {
        let response = await fetch(
            `https://6297444b14e756fe3b2c2b2c.mockapi.io/users/${id}`,
            {
                method: "DELETE"
            }
        );
        window.location.reload();
        modal.style.display = "none"
        
    } catch (error) {
        console.log(error);
        
    }
};

let putUsers = async(id, editUsers) => {
    try {
        let response = await fetch(
            `https://6297444b14e756fe3b2c2b2c.mockapi.io/users/${id}`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editUsers)
            }
        );
        window.location.reload();
        modal.style.display = "none"

        
    } catch (error) {
        console.log(error)
        
    }

};

editSend.onclick = () => {
    let editUsers = {
        name: editInpName.value,
        age: Number(editInpAge.value),
        single: editSingle.value
    }
    putUsers(editUsers)
}