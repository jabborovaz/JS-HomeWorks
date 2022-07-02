function createTable(arr, arr1){
    let newTable = document.createElement("table");
    let tableHead = document.createElement("thead");
    let theadTr = document.createElement("tr");
    let tableBody = document.createElement("tbody");
    document.body.appendChild(newTable);
    newTable.appendChild(tableHead);
    tableHead.appendChild(theadTr);
    newTable.appendChild(tableBody);
    arr.forEach(elem => {
        let th = document.createElement("th");
        th.innerHTML = elem;
        theadTr.appendChild(th)
    });

    arr1.forEach(elem =>{
        let tr = document.createElement("tr")
        tr.innerHTML = `<td>${elem.rank}</td>
                        <td>${elem.name}</td>
                        <td>${elem.points}</td>
                        <td>${elem.team}</td>`
        
        tableBody.appendChild(tr);
    })
}
createTable(["Rank", "Name", "Points", "Team"],[{
    rank:1,
    name:"John",
    points: 90,
    team: "barsa"

},
{
    rank:2,
    name:"Bob",
    points: 80,
    team: "real"

},
{
    rank:3,
    name:"Doe",
    points: 85,
    team: "liver"

}]);

