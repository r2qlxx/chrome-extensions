chrome.action.onClicked.addListener(() => {
  chrome.history.deleteAll();
  chrome.browsingData.remove({
    since: 0
  }, {
    "downloads": true
  }, () => { });

});