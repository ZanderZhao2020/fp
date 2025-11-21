"use strict";
let selector = document.getElementById("selector");
function play() {
	let player = RufflePlayer.newest().createPlayer();
	document.body.appendChild(player);
	let fileInp = document.getElementById("file");
	if (fileInp.files.length === 0) {
		localStorage.lastGame = selector.value;
		player.ruffle().load(selector.value + ".swf");
	} else {
		player.ruffle().load(URL.createObjectURL(fileInp.files[0]));
	}
	document.getElementById("options").remove();
}
if (localStorage.lastGame !== undefined) {
	selector.value = localStorage.lastGame;
}