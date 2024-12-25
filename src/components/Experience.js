import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Research Assistant
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Stony Brook University
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Collaborated in the development of a database for wearable or portable monitoring devices, constructing ETL pipelines for analysis using Python.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Teaching Assistant
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
           Miami University
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Assisted 63 students with inquiries and challenges related to homework and lab assignments, effectively resolving technical issues across various projects
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Personal Blog Website
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <a href="https://github.com/Eason366/MyBlog" variant="body1" align="center" className={classes.body1}>
              Github
            </a>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Developed a personal blog website using Spring Boot and Vue.js, 
            with the infrastructure hosted on AWS and nginx as the frontend publisher. 
            Designed RESTful APIs and optimized performance by reducing HTTP request 
            latency by 15% through effective caching strategies. 
            Implemented a user management system with authentication and logging using Redis, 
            and leveraged AOP, interceptors, and filters to streamline request handling, significantly 
            enhancing data processing efficiency.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2023
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Exclusive AI Nutritionist
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <a href="https://github.com/Eason366/ChefMate" variant="body1" align="center" className={classes.body1}>
              Github
            </a>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Engineered a machine learning application using the LangChain framework and 
            GPT-3.5 Turbo model to deliver personalized nutrition advice and culinary solutions. 
            Developed the frontend with HTML and CSS and the backend with Python Flask, supported by a MySQL database. 
            Leveraged OpenAI's API and machine learning algorithms, achieving a 95% accuracy rate 
            in nutrition advice and user query analysis. Designed a prototype Android application using Kotlin, 
            emphasizing personalized nutrition advice and seamless user interactions. 
            Presented the project at the USC Data Science Professional Practicum, 
            receiving acclaim for its innovative application of AI in health and wellness.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Data Analyst
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Apexus Technologies
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Formulated and optimized Python scripts to streamline the retrieval of financial data from diverse sources, 
            efficiently managing datasets exceeding 1TB. Applied advanced data visualization techniques 
            using Plotly to enhance data interpretability and insights. Leveraged the Backtrader framework to design and evaluate financial analysis tools, 
            focusing on algorithmic trading strategies with real-time data. 
            Enhanced and optimized multiple algorithmic trading strategies, achieving a 25% improvement in performance.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2024
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Data Engineering
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Lord of the Drinks Inc.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Led the design and implementation of an end-to-end ETL pipeline to scrape data from various social media platforms for analysis and price adjustment, 
            utilizing Python, RDS, and S3. Developed and managed NoSQL and MySQL databases to efficiently store and organize the collected data. 
            Streamlined data homogenization through fuzzy matching, integrating external data with internal company datasets to support pricing and inventory analysis. 
            Optimized processing speed by 200% using the Levenshtein Distance algorithm, resulting in annual cost savings of $3,000.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
