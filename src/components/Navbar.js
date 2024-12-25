import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  navList: {
    display: "flex",
  },
  listItem: {
    color: "tan",
    textDecoration: "none",
    margin: "0 1rem",
    "&:hover": {
      color: "tomato",
    },
  },
  title: {
    color: "tan",
    marginLeft: "1rem",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Experience", listPath: "/experience" },
  { listIcon: <AssignmentInd />, listText: "Skill", listPath: "/skill" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" className={classes.title}>
            Portfolio
          </Typography>
        </div>
        <List className={classes.navList}>
          {menuItems.map((item, i) => (
            <ListItem
              key={i}
              className={classes.listItem}
              component={Link}
              to={item.listPath}
              button
            >
              <ListItemIcon className={classes.listItem}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText primary={item.listText} />
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
