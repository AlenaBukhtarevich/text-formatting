import React, { useState } from "react";

const TextFormatting = () => {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    setDisplayText(inputText.toUpperCase()); // Выводим текст в верхнем регистре
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleClick}>Отобразить текст</button>
      <p style={{ color: "blue", fontWeight: "bold" }}>{displayText}</p>{" "}
      {/* Текст будет синего цвета */}
    </div>
  );
};

export default TextFormatting;
