
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(sender.tab ? `from content: ${sender.tab.url}` : "from extension");
  console.log(message.selected);
  sendResponse({ data: "The data has sucessfully reached background" });
  chrome.runtime.sendMessage(message);
});

export {}