import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  text: {
    color: "white",
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 5), 
    fontSize: "1.2rem",
    lineHeight: 1.6,
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Eason Wang"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Data Analyst",
            "Data Engineering",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>

      <Typography className={classes.text} variant="body1">
        I am a passionate developer with a focus on building efficient, scalable, 
        and visually appealing web applications. With a background in both front-end 
        and back-end development, I have experience in frameworks like React, Vue, 
        and Flask. Additionally, I specialize in data analysis and engineering, 
        leveraging tools like Python, SQL, and AWS to process and visualize data effectively.
      </Typography>
    </Box>
  );
};

export default Header;
