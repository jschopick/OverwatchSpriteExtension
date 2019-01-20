// Zenyatta GIF
let img = document.createElement("img");
img.id = "Zenyatta";
img.src = chrome.extension.getURL("images/Zenyatta.gif");
img.style.position = "fixed";
img.style.right = 0;
img.style.bottom = "20px";
document.body.appendChild(img);
console.log("Experience Tranquility");

let curr = Math.floor(Math.random() * 5);
let prev = curr;

window.addEventListener('load', function load(event) {
    document.getElementById('Zenyatta').onclick = function() {
        // Display Message
        let prevID = "hiddenMessage" + prev;
        let currID = "hiddenMessage" + curr;
        if(document.getElementById(prevID).style.display != 'block') {
            document.getElementById(currID).style.display = 'block';
            setTimeout(function(){ document.getElementById(currID).style.display = "none"; }, 5000);

            // Play Audio Recording
            document.getElementById("audio" + curr).play();
            prev = curr;
            while(prev == curr) {
                curr = Math.floor(Math.random() * 5);
            }
        }
    };
});

// Format Message CSS
let msg = new Array(64);
let i = 0;
while(i < msg.length) {
    msg[i] = document.createElement("img");
    msg[i].id = "hiddenMessage" + i;
    msg[i].style.display = "none";
    msg[i].style.position = "fixed";
    msg[i].style.right = "115px";
    msg[i].style.bottom = "270px";
    msg[i].style.height = "70px";
    document.body.appendChild(msg[i]);
    i++;
}

let audio = new Array(64);
i = 0;
while(i < audio.length) {
    audio[i] = document.createElement("audio");
    audio[i].id = "audio" + i;
    audio[i].autoplay = "false";
    document.body.appendChild(audio[i]);
    i++;
}

// Message Sources
msg[0].src = chrome.extension.getURL("speech-bubbles/I_dreamt_I_was_a_butterfly.png");
msg[1].src = chrome.extension.getURL("speech-bubbles/a_chance_to_focus.png");
msg[2].src = chrome.extension.getURL("speech-bubbles/a_closed_mind_is_already_defeated.png");
msg[3].src = chrome.extension.getURL("speech-bubbles/a_disciplined_mind_is_your_most_dependable_ally.png");
msg[4].src = chrome.extension.getURL("speech-bubbles/a_lesson_in_humility.png");


// Audio Sources
audio[0].src = chrome.extension.getURL("audio-files/Zenyatta_-_I_dreamt_I_was_a_butterfly.ogg");
audio[1].src = chrome.extension.getURL("audio-files/Zenyatta_-_A_chance_to_focus.ogg");
audio[2].src = chrome.extension.getURL("audio-files/Zenyatta_-_A_closed_mind_is_already_defeated.ogg");
audio[3].src = chrome.extension.getURL("audio-files/Zenyatta_-_A_disciplined_mind_is_your_most_dependable_ally.ogg");
audio[4].src = chrome.extension.getURL("audio-files/Zenyatta_-_A_lesson_in_humility.ogg");
