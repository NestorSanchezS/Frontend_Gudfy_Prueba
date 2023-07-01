import { makeStyles } from "@material-ui/core";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ColorGreen,
  ColorShadow,
  ColorBlack,
  ColorLetterP,
  ColorGreen2,
  ColorBlack2,
} from "./constans";

export const stylesLoading = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "75vh",
  },
  colorCircular: {
    color: ColorGreen,
  },
}));

export const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: ColorLetterP,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: ColorGreen2,
    },
    "&:hover fieldset": {
      borderColor: ColorGreen,
    },
    "&.Mui-focused fieldset": {
      borderColor: ColorGreen,
      borderRadius: "6px",
      borderWidth: 3,
    },
  },
  "& .MuiInputBase-input": {
    color: ColorLetterP,
  },
});

export const stylesTextField = makeStyles(() => ({
  textField: {
    borderColor: ColorGreen,
    fontSize: "100px",
    color: ColorLetterP,
    "&:hover": {
      borderColor: ColorGreen2,
    },
  },
}));

export const stylesCard = makeStyles(() => ({
  root: {
    maxWidth: 385,
  },
  card: {
    backgroundColor: ColorShadow,
  },
  avatarContainer: {
    width: 60,
    height: 60,
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20%",
  },
  title: {
    color: ColorLetterP,
    fontWeight: "bold",
    fontSize: "16px",
  },
  subheader: {
    color: ColorBlack,
  },
  bCounter: {
    backgroundColor: ColorGreen,
    "&:hover": {
      backgroundColor: ColorGreen2,
    },
    color: ColorShadow,
    fontSize: "11px",
    fontWeight: "bold",
  },
  buttonContainer: {
    textAlign: "center",
    marginBottom: "10px",
  },
}));

export const stylesCustomAppBar = makeStyles(() => ({
  buttomCharacters: {
    marginRight: "20px",
    textTransform: "none",
    color: "white",
    fontSize: "1.5rem",
    ontWeight: "bold",
  },
}));
