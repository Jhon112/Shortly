import React, { useState, useEffect } from "react";
import ShortenerForm from "./ShortenerForm/ShortenerForm";
import ShortenedLinkItem from "./ShortenedLinkItem/ShortenedLinkItem";

import "./shortenerContainer.css";

const ShortenerContainer = () => {
  const [shortenedLinks, setShortenedLinks] = useState(
    () => JSON.parse(localStorage.getItem("shortenedLinks")) || []
  );

  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  return (
    <div className="shortener-section">
      <div className="shortener-container container">
        <ShortenerForm
          shortenedLinks={shortenedLinks}
          setShortenedLinks={setShortenedLinks}
        />

        <div className="shortened-links-list">
          {shortenedLinks.map((shortenedLink, i) => (
            <ShortenedLinkItem
              key={`shortened-link-${i}`}
              shortenedLink={shortenedLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortenerContainer;
