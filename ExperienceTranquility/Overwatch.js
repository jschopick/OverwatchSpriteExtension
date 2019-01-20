function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
    setTimeout(function(){ document.getElementById("hiddenMessage").style.display = "none"; }, 5000);
}

function playAudio() {
    var sound = document.getElementById("audio");
    sound.play();
}

function fadelogoout() {
    //wait(5000);
    
}

