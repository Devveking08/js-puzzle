let navButtons = document.querySelectorAll("#buttonHolder img"),
theheadLine = document.querySelector("#headLine h1"),
puzzleBoard = document.querySelector('.puzzle-board');


function changeBGImage(){
	// debugger;
	// object.property ="new value"
	// theheadLine.textContent ="Drag and Drop Controls here";
	// add a class in js
	// theheadLine.classList.add('cyan-headLine')

	// Change the background image in the drop zone

	puzzleBoard.stye.backgroundImage = url("../images/backGround" + this.id + ".jpg");

	

}

navButtons.forEach(button => button.addEventListener('click',changeBGImage));