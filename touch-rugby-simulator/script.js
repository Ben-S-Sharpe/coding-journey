let selectedPlayer = null;
document.querySelectorAll('g').forEach(function(player) {
    player.addEventListener('mousedown', function(e) {
        selectedPlayer = player;
    });
});

document.addEventListener('mousemove', function(e) {
	if(selectedPlayer !== null){
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
  