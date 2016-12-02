var trigger = document.getElementById("js-scrollableTrigger");

var content = document.getElementById("js-scrollableItem");

var message = document.getElementById("js-ctaMessage");

document.getElementById("js-scrollableTrigger").addEventListener("click", enableScroll);


function enableScroll(){
	content.classList.toggle("active");
	message.classList.toggle("active");	
}
