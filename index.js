var i = 0;
var title = 'Harinder Gakhal';
var speed = 50;

// Modidied version of: https://www.w3schools.com/howto/howto_js_typewriter.asp
function typeWriter() {
	if (i < title.length) {
		document.getElementById("Title").innerHTML = title.substring(0, i+1) + "|";
		i++;
		setTimeout(typeWriter, (speed + (Math.floor((Math.random() * 70) + 5))));
	}
	if (document.getElementById("Title").innerHTML == (title + "|")) {
		blinkingCursor()
	}
}

var blink = true
function blinkingCursor() {
	if (blink == true) {
		document.getElementById("Title").innerHTML = title.substring(0, i+1) + "&ensp;";
		blink = false
	}
	else {
		document.getElementById("Title").innerHTML = title.substring(0, i+1) + "|";
		blink = true
	}
	setTimeout(blinkingCursor, 530);
}

typeWriter()
