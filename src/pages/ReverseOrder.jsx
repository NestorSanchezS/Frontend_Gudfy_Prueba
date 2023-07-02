import React, { useState } from "react";
import { Button, Grid, Box } from "@mui/material";
import { StyledTextField } from "../utils/Styles";

export const ReverseOrder = () => {
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
  return (
    <form onSubmit={submitHandler} style={{ marginTop: "40px" }}>
      <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <StyledTextField
              name="reverse"
              label="Texto"
              variant="outlined"
              fullWidth
              value={inputText}
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                disabled={!inputText.trim()}
                sx={{ minWidth: 100 }}
              >
                Revertir texto
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <h1>{viewText}</h1>
    </form>
  );
};
