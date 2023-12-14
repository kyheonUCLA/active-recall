console.log("content script!!");

const handleMouseup = () => {
  if (window) {
    const selected = window.getSelection()?.toString().trim();
    if (selected) {
      if (selected.length > 0) {
        console.log(`selected text: ${selected}`);
        chrome.runtime.sendMessage({selected}, (response) => {
          console.log(response.data)
        })
      }
    } else {
      console.log("nothing selected");
    }
  }
}
document.addEventListener('mouseup', handleMouseup);


export {}