var btn = document.getElementById("hamburger");
var menuTog = document.getElementById("menuToggle");
var mobileMenu = document.getElementById("mobileMenu")
var footIconOne = document.getElementById("footIcoOne")
var footIconTwo = document.getElementById("footIcoTwo")
var footIconThree = document.getElementById("footIcoThree")

document.getElementById("hamburger").addEventListener("click", hamb);

function hamb() {
    menuTog.classList.toggle("hMenu__container--isActive");
    mobileMenu.classList.toggle("nav_mainNav--isActive");
    footIconOne.classList.toggle("nav_liItem--active");
    footIconTwo.classList.toggle("nav_liItem--active");
    footIconThree.classList.toggle("nav_liItem--active");
}