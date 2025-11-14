"use strict";
function play() {
	let player = RufflePlayer.newest().createPlayer();
	document.body.appendChild(player);
	player.ruffle().load(document.getElementById("selector").value + ".swf");
	document.getElementById("options").remove();
}