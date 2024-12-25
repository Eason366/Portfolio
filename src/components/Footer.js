import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: "55px",
    position: "fixed",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={<LinkedIn />}
        className={classes.root}
        href="https://www.linkedin.com/in/eason-wang366/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <BottomNavigationAction
        icon={<GitHub />}
        className={classes.root}
        href="https://github.com/Eason366"
        target="_blank"
        rel="noopener noreferrer"
      />
    </BottomNavigation>
  );
};

export default Footer;
