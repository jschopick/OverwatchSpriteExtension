let toggleZen = document.getElementById('toggleZen');

toggleZen.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.getElementById("Zenyatta").style.display = "none";'});
  });
};