document.getElementById("open-site").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://stikvid.com/" });
  window.close();
});
