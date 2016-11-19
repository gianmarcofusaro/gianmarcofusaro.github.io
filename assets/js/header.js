
var x = document.getElementsByClassName("nav_link").length;

var i = x;

console.log(i);

i.addEventListener("click", tog);

for (i = 0; i < x.length; i++) {
    x.classList.add("nav_link--isActive");
}
 

 

