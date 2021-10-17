var character = 
document.getElementById("character")
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate")
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
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
        alert("Try Again I Dare You");
        ("song1.mp3").trigger('pause');
    }
},10);

function play_audio(task) {
    if(task == 'play'){
         $("song1.mp3").trigger('play');
    }
    if(task == 'stop'){
         $("song1.mp3").trigger('pause');
         $("song1.mp3").prop("currentTime",0);
    }
}

function checkReadyState() {
	if (game.gameOverAudio.readyState === 4 && game.backgroundAudio.readyState === 4) {
		window.clearInterval(game.checkAudio);
		game.start();
	}
}