
const btnSwitch = document.querySelector(".btn");
const lightBulb = document.getElementById("light-bulb");
const main = document.querySelector("main");



btnSwitch.addEventListener("click", function() {
    console.log(btnSwitch.classList);
    if (btnSwitch.classList.contains("btn-on")) {
        btnSwitch.classList.remove("btn-on");
        lightBulb.src = "./img/yellow_lamp.png";
        btnSwitch.innerHTML = "Spegni";
        
    } 
	else {
        btnSwitch.classList.add("btn-on");
        lightBulb.src = "./img/white_lamp.png";
        btnSwitch.innerHTML = "Accendi";
       
    }
})
