import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  FaPython,
  FaJava,
  FaDatabase,
  FaDocker,
  FaAws,
  FaGit,
  FaJsSquare,
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaLinux,
} from "react-icons/fa";
import { SiPytorch, SiRstudioide, SiTableau , SiMongodb, SiJfrogpipelines ,SiKubernetes} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { GrHadoop } from "react-icons/gr";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },
  sectionTitle: {
    color: "tomato",
    marginBottom: theme.spacing(2),
  },
  skillBox: {
    textAlign: "center",
    padding: theme.spacing(2),
    "&:hover": {
      background: "#f5f5f5",
      borderRadius: theme.spacing(1),
    },
  },
  icon: {
    fontSize: "3rem",
    color: "#4caf50",
  },
  skillName: {
    marginTop: theme.spacing(1),
    color: "tan",
  },
}));

const Skill = () => {
  const classes = useStyles();

  const mainSkills = [
    { icon: <FaPython className={classes.icon} />, name: "Python" },
    { icon: <FaJava className={classes.icon} />, name: "Java" },
    { icon: <FaDatabase className={classes.icon} />, name: "MySQL" },
    { icon: <SiRstudioide className={classes.icon} />, name: "R" },
    { icon: <FaDocker className={classes.icon} />, name: "Docker" },
    { icon: <FaAws className={classes.icon} />, name: "AWS" },
    { icon: <FaGit className={classes.icon} />, name: "Git" },
    { icon: <FaJsSquare className={classes.icon} />, name: "JavaScript" },

  ];

  const complementarySkills = [
    { icon: <FaVuejs className={classes.icon} />, name: "Vue.js" },
    { icon: <FaReact className={classes.icon} />, name: "React.js" },
    { icon: <FaNodeJs className={classes.icon} />, name: "NodeJS" },
    { icon: <FaHtml5 className={classes.icon} />, name: "HTML" },
    { icon: <FaLinux className={classes.icon} />, name: "Linux" },
    { icon: <DiRedis className={classes.icon} />, name: "Redis" },
    { icon: <SiPytorch className={classes.icon} />, name: "PyTorch" },
    { icon: <GrHadoop className={classes.icon} />, name: "HDFS" },
    { icon: <SiKubernetes className={classes.icon} />, name: "Kubernetes" },
    { icon: <SiTableau className={classes.icon} />, name: "Tableau" },
    { icon: <SiMongodb className={classes.icon} />, name: "MongoDB" },
    { icon: <SiJfrogpipelines  className={classes.icon} />, name: "Data Pipelines" },
    
  ];

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.sectionTitle}>
        Main Skills & Tools
      </Typography>
      <Grid container spacing={3}>
        {mainSkills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box className={classes.skillBox}>
              {skill.icon}
              <Typography variant="body1" className={classes.skillName}>
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" className={classes.sectionTitle} style={{ marginTop: "2rem" }}>
        Complementary Skills & Tools
      </Typography>
      <Grid container spacing={3}>
        {complementarySkills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box className={classes.skillBox}>
              {skill.icon}
              <Typography variant="body1" className={classes.skillName}>
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skill;
