window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	listenerFunction();
};

// The listener function here
function listenerFunction(){
	document.querySelector("#theGreen").addEventListener("click", () =>{
		alert("woohoo!");
	});
}