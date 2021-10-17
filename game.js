var character = 
document.getElementById("character")
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate")
    character.classList.add("animate");
    score.innerHTML.addtext("100")
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
    Math.addtext("10")
}

function slide(){
    if(character.classList != "animate2")
    character.classList.add("animate2");
    setTimeout(function(){
        character.classList.remove("animate2");
    },500)
}

var checkdead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Refresh The Page To Start Again ");
    }
},10);

function checkReadyState() {
	if (game.gameOverAudio.readyState === 4 && game.backgroundAudio.readyState === 4) {
		window.clearInterval(game.checkAudio);
		game.start();
	}
}

var score = document.getElementById("score")

