"use strict";
function play() {
	let player = RufflePlayer.newest().createPlayer();
	document.body.appendChild(player);
	player.ruffle().load(URL.createObjectURL(document.getElementById("file").files[0]));
	document.getElementById("selector").remove();
}