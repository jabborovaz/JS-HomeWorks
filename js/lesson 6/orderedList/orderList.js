function list (arr){
    let ol = document.createElement("ol");
        let li = document.createElement("li");
        document.body.appendChild(ol);
        ol.appendChild(li);
        for(i=10; i>=1; i--){
            for(j=0; j<arr.length; j++){
                li.innerHTML = `${i} ${arr[j]}`
            }
            
        }
}
list(["Norsen Exposure", "The Sopranos", "Halt & Catch fire", "Battlester Galactica"
, "The shield", "Game of thrones", "Downton abbey", "Six feet under", "LOST",
 "Friday fight lights"]);