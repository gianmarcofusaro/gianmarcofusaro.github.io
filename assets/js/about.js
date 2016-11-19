	var aboutBar= document.getElementById("aboutBar");
	var openBtn = document.getElementById("openBtn");

	openBtn.addEventListener("click", open);

	function open() {
	aboutBar.classList.add("open");
	};

	var aboutBar= document.getElementById("aboutBar");
	var closeBtn = document.getElementById("closeBtn");
	closeBtn.addEventListener("click", close);
	function close() {
	aboutBar.classList.toggle("open");
	};