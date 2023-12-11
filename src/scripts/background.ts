// service worker
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id as number},
    func: () => {
      document.body.style.backgroundColor = 'red';
      alert("Hello from my extension");
    }
  })
})


export {}