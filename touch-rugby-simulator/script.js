let selectedPlayer = null;
let currentMode = 'drag';
document.querySelectorAll('g').forEach(function(player) {
    player.addEventListener('mousedown', function(e) {
        selectedPlayer = player;
    });
});

document.addEventListener('mousemove', function(e) {
	if(selectedPlayer !== null && currentMode === 'drag'){
	const svg = document.querySelector('svg');
	const svgRect = svg.getBoundingClientRect();
	const x= e.clientX - svgRect.left;
	const y =e.clientY - svgRect.top;
	selectedPlayer.setAttribute('transform','translate('+ x + ',' + y + ')');
}

});
document.addEventListener('mouseup', function(e) {
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