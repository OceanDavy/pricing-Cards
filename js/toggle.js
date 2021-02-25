function checkTime(){
    let toggle = document.getElementById("checkbox");
    let basicPrice = document.getElementById("basicPrice");
    let professionalPrice = document.getElementById("professionalPrice");
    let masterPrice = document.getElementById("masterPrice");

    if(toggle.checked == true){
        basicPrice.innerHTML = "&dollar;199.99";
        professionalPrice.innerHTML = "&dollar;249.99";
        masterPrice.innerHTML = "&dollar;399.99";
    }
    else{
        basicPrice.innerHTML = "&dollar;19.99";
        professionalPrice.innerHTML = "&dollar;24.99";
        masterPrice.innerHTML = "&dollar;39.99";
    }
}