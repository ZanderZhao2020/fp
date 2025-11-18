"use strict";
function play() {
	let player = RufflePlayer.newest().createPlayer();
	document.body.appendChild(player);
	let fileInp = document.getElementById("file");
	player.ruffle().load(fileInp.files.length === 0 ? document.getElementById("selector").value + ".swf" : URL.createObjectURL(fileInp.files[0]));
	document.getElementById("options").remove();
}