var i = 0;
var title = 'Harinder Gakhal';
var speed = 70;

// Modidied version of: https://www.w3schools.com/howto/howto_js_typewriter.asp
function typeWriter() {
	if (i < title.length) {
		document.getElementById("Title").innerHTML += title.charAt(i);
		i++;
		setTimeout(typeWriter, (speed + (Math.floor((Math.random() * 70) + 5))));
	}
}

typeWriter()
