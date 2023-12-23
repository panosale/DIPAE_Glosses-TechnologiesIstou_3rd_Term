function ClearFields() {
	document.getElementById("windowColor").value = "";
	document.body.style.backgroundColor = "white";
}
function ChangeColor() {
	document.body.style.backgroundColor = document.getElementById("windowColor").value;
}
