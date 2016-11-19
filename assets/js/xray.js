var svgElement = document.querySelector('svg');
var maskedElement = document.querySelector('#mask--item');
var circleFeedback = document.querySelector('#circle');
var svgPoint = svgElement.createSVGPoint();

function cursorPoint(e, svg) {
	svgPoint.x = e.clientX - 620;
	svgPoint.y = e.clientY - 180;
	return svgPoint.matrixTransform(svg.getScreenCTM().inverse()); 
}

function update(position) {
	maskedElement.setAttribute('cx', position.x);
	maskedElement.setAttribute('cy', position.y); 
}

window.addEventListener('mousemove', function(e) {
  update(cursorPoint(e, svgElement));
}, false);