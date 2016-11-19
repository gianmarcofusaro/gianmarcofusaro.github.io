var trigOne = document.getElementById("trigOne");
var targetOne = document.getElementById("targetOne");

var trigTwo = document.getElementById("trigTwo");
var targetTwo = document.getElementById("targetTwo");

var trigThree = document.getElementById("trigThree");
var targetThree = document.getElementById("targetThree");


trigOne.addEventListener("mouseover", showOne);
trigTwo.addEventListener("mouseover", showTwo);
trigThree.addEventListener("mouseover", showThree);

function showOne(){
targetOne.classList.add("picOneShown");
targetTwo.classList.remove("picTwoShown");
targetThree.classList.remove("picThreeShown");
}


function showTwo(){
targetTwo.classList.add("picTwoShown");
targetOne.classList.remove("picOneShown");
targetThree.classList.remove("picThreeShown");
}

function showThree(){
targetTwo.classList.remove("picTwoShown");
targetOne.classList.remove("picOneShown");
targetThree.classList.add("picThreeShown");
}
