// Zenyatta GIF
let img = document.createElement("img");
img.id = "Zenyatta";
img.src = chrome.extension.getURL("images/Zenyatta.gif");
img.style.position = "fixed";
img.style.right = 0;
img.style.bottom = "20px";
document.body.appendChild(img);
console.log("Experience Tranquility");

window.addEventListener('load', function load(event) {
    document.getElementById('Zenyatta').onclick = function() {
        // Display Message
        document.getElementById("hiddenMessage").style.display = 'block';
        setTimeout(function(){ document.getElementById("hiddenMessage").style.display = "none"; }, 5000);

        // Play Audio Recording
        document.getElementById("audio").play();
    };
});

// Messages
let msg1 = document.createElement("img");
msg1.id = "hiddenMessage";
msg1.src = chrome.extension.getURL("speech-bubbles/I_dreamt_I_was_a_butterfly.png");
msg1.style.display = "none";
msg1.style.position = "fixed";
msg1.style.right = "115px";
msg1.style.bottom = "270px";
msg1.style.height = "70px";
document.body.appendChild(msg1);
console.log("I_dreamt_I_was_a_butterfly");

// Audio
let audio1 = document.createElement("audio");
audio1.id = "audio";
audio1.src = chrome.extension.getURL("audio-files/Zenyatta_-_I_dreamt_I_was_a_butterfly.ogg");
audio1.autoplay = "false";
document.body.appendChild(audio1);