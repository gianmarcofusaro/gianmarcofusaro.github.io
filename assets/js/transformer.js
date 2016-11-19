var myBtn = document.getElementById("dBtn");
var cont = document.getElementById("dContainer");

myBtn.addEventListener("mouseover", togOn);

myBtn.addEventListener("mouseout", togOff);

function togOn(){
cont.classList.add("d_activeContainer");
cont.classList.remove("d_container");
}

function togOff(){
cont.classList.remove("d_activeContainer");
cont.classList.add("d_container");
}

