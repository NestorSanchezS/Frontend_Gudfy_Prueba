import React, { useState } from "react";
import { Button, Grid, Box } from "@mui/material";
import { StyledTextField } from "../utils/Styles";

export const ReverseOrder = () => {
  const [text, setText] = useState("");
  const [viewText, setViewText] = useState("");

  function reverseText(text) {
    const words = text.split(" ");
    const invertedWords = words.reverse();
    const result = invertedWords.join(" ");
    setText(result);
    setViewText(result);
    return result;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    reverseText(text);
    setText("");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "reverse") {
      setText(value);
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
              value={text}
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                disabled={!text.trim()}
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
