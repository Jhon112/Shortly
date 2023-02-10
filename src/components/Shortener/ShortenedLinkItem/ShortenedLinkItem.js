import React, { useState } from "react";
import "./shortenedLinkItem.css";

const ShortenedLinkItem = ({ shortenedLink }) => {
  const [copied, setCopied] = useState(false);
  const [originalLink, shortLink] = Object.entries(shortenedLink).flat();

  const handleCopy = (shortLink) => {
    navigator.clipboard.writeText(shortLink);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="shortened-link-item">
      <div className="original-link">{originalLink}</div>
      <div className="shortened-link">{shortLink}</div>
      <button
        className={`copy-link ${copied ? "copied" : ""}`}
        onClick={() => handleCopy(shortLink)}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default ShortenedLinkItem;
