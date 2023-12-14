import React, { FC, useEffect, useState } from "react";

const Test = () => {
  const [msg, setMsg] = useState<any>(null);

  useEffect(() => {
    const handler = (message: any) => {
      setMsg(message.selected);
    };
    chrome.runtime.onMessage.addListener(handler);
    
  }, []);

  return (
    <div className="bg-purple-300">
      {msg !== null ? <p>{JSON.stringify(msg)}</p> : <p>No reponse msg</p>}
    </div>
  )
}

export default Test;