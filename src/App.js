import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  const [inputText, setInputText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    if (text.trim() === "") {
      setSuggestion(""); // Reset suggestion for empty input
      return;
    }

    const words = text.split(/\s+/); // Split text by whitespace
    const firstMistake = words.find(
      (word) =>
        customDictionary[word.toLowerCase()] !== undefined // Case-insensitive check
    );

    if (firstMistake) {
      const correctedWord = customDictionary[firstMistake.toLowerCase()];
      setSuggestion(`Did you mean: ${correctedWord}?`);
    } else {
      setSuggestion(""); // No mistakes found
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        rows="5"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          marginTop: "10px",
          fontSize: "16px",
          color: suggestion ? "red" : "black",
        }}
      >
        {suggestion}
      </div>
    </div>
  );
};

export default XSpellCheck;
