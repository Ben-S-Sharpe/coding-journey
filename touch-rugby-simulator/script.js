let selectedPlayer = null;
let arrowStart = null;
let previewLine = null;
let currentMode = 'drag';
document.querySelectorAll('g').forEach(function(player) {
    player.addEventListener('mousedown', function(e) {
        selectedPlayer = player;
	if(currentMode === 'arrow'){
	arrowStart = {x: e.clientX, y: e.clientY};
	}
    });
});
document.querySelector('svg').addEventListener('mousedown', function(e) {
	if(currentMode === 'arrow'){
	arrowStart = {x: e.clientX, y: e.clientY};
	}
    });

document.addEventListener('mousemove', function(e) {
    if(selectedPlayer !== null && currentMode === 'drag'){
        const svg = document.querySelector('svg');
        const svgRect = svg.getBoundingClientRect();
        const x = e.clientX - svgRect.left;
        const y = e.clientY - svgRect.top;
        selectedPlayer.setAttribute('transform','translate('+ x + ',' + y + ')');
    }
    if(currentMode === 'arrow' && arrowStart !== null){
        const svg = document.querySelector('svg');
        const svgRect = svg.getBoundingClientRect();
        const x = e.clientX - svgRect.left;
        const y = e.clientY - svgRect.top;
        const x1 = arrowStart.x - svgRect.left;
        const y1 = arrowStart.y - svgRect.top;
        if(previewLine){
            svg.removeChild(previewLine);
        }
        previewLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        previewLine.setAttribute('x1', x1);
        previewLine.setAttribute('y1', y1);
        previewLine.setAttribute('x2', x);
        previewLine.setAttribute('y2', y);
        previewLine.setAttribute('stroke', 'white');
        previewLine.setAttribute('stroke-width', '2');
        previewLine.setAttribute('stroke-dasharray', '6,3');
        svg.appendChild(previewLine);
	previewLine.setAttribute('marker-end', 'url(#arrowhead)');
    }
});
document.addEventListener('mouseup', function(e) {
	if(currentMode === 'arrow' && arrowStart !== null){
	const svg =document.querySelector('svg');
	const svgRect = svg.getBoundingClientRect();
	const x2 = e.clientX - svgRect.left;
	const y2 = e.clientY - svgRect.top;
	const x1 = arrowStart.x - svgRect.left;
	const y1 = arrowStart.y - svgRect.top;
	drawArrow(x1, y1 ,x2 ,y2);
	arrowStart = null;
	}
        selectedPlayer = null;

});
document.getElementById('btnDrag').addEventListener('click',function(){
	currentMode = 'drag';
});

document.getElementById('btnArrow').addEventListener('click',function(){
	currentMode = 'arrow';
});
document.getElementById('btnPass').addEventListener('click',function(){
	currentMode = 'pass';
});

function drawArrow(x1, y1, x2, y2){
	const svg = document.querySelector('svg');
	const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	line.setAttribute('x1', x1);
	line.setAttribute('y1', y1);
	line.setAttribute('x2', x2);
	line.setAttribute('y2', y2);
	line.setAttribute('stroke', 'white');
	line.setAttribute('stroke-width', '2');
	line.setAttribute('stroke-dasharray', '6,3');
	line.setAttribute('marker-end', 'url(#arrowhead)');
	svg.appendChild(line);
}