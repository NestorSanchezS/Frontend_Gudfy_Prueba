import { Button } from "@material-ui/core";
import { stylesCard } from "../utils/Styles";

export const CustomButton = ({ onClick, text }) => {
  const classes = stylesCard();
  return (
    <Button
      className={classes.bCounter}
      variant="contained"
      onClick={onClick}
      style={{ marginLeft: "10px" }}
    >
      {text}
    </Button>
  );
};
