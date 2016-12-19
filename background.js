chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript(null, {file: "app.js"});
  // chrome.tabs.executeScript({code: "clickToHide(true)"});

});