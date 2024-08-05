chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "https://www.google.com/?gl=us&hl=en&gws_rd=cr&pws=0" });
});