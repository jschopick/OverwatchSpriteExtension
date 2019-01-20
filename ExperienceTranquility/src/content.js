console.log("Chrome extension running");

let img = document.createElement("img");
img.src = chrome.extension.getURL("images/Zenyatta.gif");
img.style.position = "fixed";
img.style.right = 0;
img.style.bottom = "20px";
document.body.appendChild(img);
console.log("Experience Tranquility");