import React, { useState } from "react";
import "./shortenerForm.css";
import axios from "axios";

const ShortenerForm = ({ shortenedLinks, setShortenedLinks }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) {
      setError("Please add a link");
      return;
    }
    setError(null);
    axios
      .get("/v2/shorten", { params: { url: input } })
      .then((res) => {
        setShortenedLinks([
          ...shortenedLinks,
          {
            [res.data.result.original_link]: res.data.result.full_short_link,
          },
        ]);
        setInput("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="shortener-form" onSubmit={handleSubmit}>
      <div className="shortener-form-input-container">
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={input}
          onChange={handleChange}
          className={error && "alert"}
        />
        <button type="submit">Shorten It!</button>
      </div>
      <div className="alert">{error && error}</div>
    </form>
  );
};

export default ShortenerForm;
