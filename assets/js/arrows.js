window.addEventListener("scroll", function(event) {

    var left = this.scrollX;
    var tog = document.getElementById('downClick');

    if(left > 3000){
    	tog.classList.add('active');
    }
    else{
    	tog.classList.remove('active');
    }
  
}, false);