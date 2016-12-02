$.fn.isOnScreen = function(o){
	
	var win = $(window);
	var _offset;
	// var _header = $('.header')
	// var breadcrumbs = $('.breadcrumbs')
	_offset = typeof o !== "undefined" && o !== null ? o : 0;
	
	// _header_height = _header.length === 1 ? _header.height() : 0;
	// breadcrumbs_height = breadcrumbs.length === 1 ? breadcrumbs.height() : 0;

	var viewport = {
		// top : win.scrollTop() + _header_height + breadcrumbs_height -_offset,
		top : win.scrollTop() - _offset,
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();
	
	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();
	
	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	
};


$(document).ready(function() {
   $("section").addClass(".active")
});




$.fn.toggleHTML = function(a, b) {
    this.html(function(_, html){
        return html === a  ? b : a;
    })
}

$('#js-ctaMessage').click(function(){
    $('.el').toggleHTML('Click to active scrollable', 'Scroll is active click to disable');
});