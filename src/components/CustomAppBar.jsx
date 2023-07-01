import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { ColorGreen } from "../utils/constans";
import { stylesCustomAppBar } from "../utils/Styles";
import { useLocation } from "react-router-dom";

const CustomAppBar = ({ children }) => {
  const classes = stylesCustomAppBar();
  const location = useLocation();
  return (
    <>
      <AppBar style={{ backgroundColor: ColorGreen }}>
        <Toolbar>
          <Button component={Link} to="/" className={classes.buttomCharacters}>
            Count
          </Button>
          <Button
            component={Link}
            to="/task"
            className={classes.buttomCharacters}
          >
            Task
          </Button>
          {/* {location.pathname === "/task" && (
            <div style={{ marginLeft: "auto" }}>
              <p>Icon</p>
            </div>
          )} */}
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default CustomAppBar;
