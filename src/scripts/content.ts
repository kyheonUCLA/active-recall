console.log("content script!!");


const getSelectionData = () => {
  const selection = window.getSelection();
  const parentNode = selection?.anchorNode?.parentNode;
  const text = selection?.toString().trim();
  if ((text && text.length > 0) && parentNode) {
    return {
      text: text, 
      context: parentNode.textContent,
    }
  } else {
    return null
  }
}



const handleMouseup = () => {
  const highlighted = getSelectionData();
  if (highlighted) {
    chrome.runtime.sendMessage(highlighted, (response) => {
      console.log(response.data.completion)
    });
  }
}


document.addEventListener('mouseup', handleMouseup);


export {}