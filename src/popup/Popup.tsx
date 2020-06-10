import React, { useEffect } from "react";
import "./Popup.scss";

export default function Popup() {
  useEffect(() => {
    // Example of how to send a message to eventPage.ts.
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);

  return <div className="popupContainer">In Flancia there is an Agora.</div>;
}
