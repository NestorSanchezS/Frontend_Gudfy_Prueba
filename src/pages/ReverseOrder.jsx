import React, { useState } from "react";
import { Button, Grid, Box } from "@mui/material";
import { StyledTextField, stylesCard } from "../utils/Styles";
import { useReverseHook } from "../hooks/useReverseHook";

export const ReverseOrder = () => {
  const { inputText, viewText, changeHandler, submitHandler } =
    useReverseHook();
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
