import React from "react";

import { useState } from "react";

export const useReverseHook = () => {
  const [inputText, setInputText] = useState("");
  const [viewText, setViewText] = useState("");

  function reverseText(text) {
    const words = text.split(" ");
    const invertedWords = words.reverse();
    const result = invertedWords.join(" ");
    setInputText(result);
    setViewText(result);
    return result;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    reverseText(inputText);
    setInputText("");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "reverse") {
      setInputText(value);
    }
  };

  return { inputText, viewText, changeHandler, submitHandler };
};
