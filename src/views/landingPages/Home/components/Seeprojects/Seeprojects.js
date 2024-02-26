import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
/* import { LuBrainCircuit } from "react-icons/lu"; */
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { FaChartArea } from "react-icons/fa";
import Grid from "@mui/material/Grid";
import { TbBrandJavascript } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";

const Seeprojects = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={"h3"}
          gutterBottom
          align={"center"}
        >
          Projects
        </Box>
        <Typography
          sx={{
            fontWeight: "medium",
          }}
          gutterBottom
          color={"textSecondary"}
          align={"center"}
          marginTop={2}
        >
          Collect, process and analyse data for all kinds of businesses
          <br />
          to driving global change
        </Typography>
        <Typography
          variant={"h6"}
          component={"p"}
          color={"textSecondary"}
          align={"center"}
          marginTop={4}
        >
          My name is Thomas Harbonnnier, French data analyst with a backgroung
          in Biology and Bioinformatics.
          <br />I can work remotely or on site
        </Typography>
        <Typography
          variant={"h6"}
          component={"p"}
          color={"primary"}
          align={"center"}
          marginTop={2}
        >
          Data analyst
          <br />
          Python Developer
        </Typography>
        <Box marginTop={3} display={"flex"} justifyContent={"center"}>
          {/* <Button
            component={"a"}
            href={"https://thomasharb.github.io/projects/"}
            target={"_blank"}
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            See projects
          </Button> */}
          <Grid
            container
            spacing={2}
            alignItems="stretch"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              justifyContent="center"
              style={{ display: "flex", alignContent: "center" }}
            >
              <Card
                sx={{
                  maxWidth: 343,
                  borderRadius: "20px",
                  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                  transition: "0.3s",
                }}
              >
                <Box sx={{ minWidth: 256 }}>
                  <Box
                    sx={{
                      padding: `4px 24px 0`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Avatar
                      alt={"brand logo"}
                      sx={(theme) => ({
                        width: 48,
                        height: 48,
                        transform: "translateY(50%)",
                        "& > img": {
                          margin: 0,
                          backgroundColor: "common.white",
                        },
                        [theme.breakpoints.up("sm")]: {
                          width: 60,
                          height: 60,
                        },
                      })}
                    >
                      <FaChartArea />
                    </Avatar>
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontSize: 14,
                        color: "grey.500",
                        letterSpacing: "1px",
                      }}
                    >
                      Project
                    </Typography>
                  </Box>
                  <Box
                    component="hr"
                    sx={(theme) => ({
                      backgroundColor: "grey.200",
                      marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                      [theme.breakpoints.up("sm")]: {
                        marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                      },
                    })}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Data Analysis of all movies on Netflix
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    color="text.secondary"
                  >
                    Analysis or all movies on Netflix. The dataset has been
                    downloaded from Kaggle. The data will be processed in Python
                    then integrated in a MySQL database. The data will be then
                    display in PowerBI.
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <br />
                    Languages and softwares used
                  </Typography>
                  <Typography variant="body2">
                    Python - MySQL - PowerBi - Tableau - excel - Javascript
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <br />
                    Data Manipulation - Data Visualization
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href="https://thomasharb.github.io/netflix-project/"
                  >
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ display: "flex" }}
              justifyContent="center"
            >
              <Card
                sx={{
                  maxWidth: 343,
                  borderRadius: "20px",
                  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                  transition: "0.3s",
                }}
              >
                <Box sx={{ minWidth: 256 }}>
                  <Box
                    sx={{
                      padding: `4px 24px 0`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Avatar
                      alt={"brand logo"}
                      sx={(theme) => ({
                        width: 48,
                        height: 48,
                        transform: "translateY(50%)",
                        "& > img": {
                          margin: 0,
                          backgroundColor: "common.white",
                        },
                        [theme.breakpoints.up("sm")]: {
                          width: 60,
                          height: 60,
                        },
                      })}
                    >
                      <MdSpaceDashboard />
                    </Avatar>
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontSize: 14,
                        color: "grey.500",
                        letterSpacing: "1px",
                      }}
                    >
                      Project
                    </Typography>
                  </Box>
                  <Box
                    component="hr"
                    sx={(theme) => ({
                      backgroundColor: "grey.200",
                      marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                      [theme.breakpoints.up("sm")]: {
                        marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                      },
                    })}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Bioinformatic Dashboard for FastP tool
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    color="text.secondary"
                    textAlign="justify"
                  >
                    FastP tool is a bioinformatic tool used to chech the
                    integrity and the quality of sequences ( aka read ). The
                    output of this tool is a json file that can be difficult to
                    read for people that are not used to this kind of data. This
                    dashboard provide a interactive to read those data with
                    histogram and tables. All the dashboard has been created
                    with Javascript.
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <br />
                    Languages and softwares used
                  </Typography>
                  <Typography variant="body2">
                    Javascript - React - Material UI
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <br />
                    Data Visualization
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href="https://thomasharb.github.io/fastp-project/"
                  >
                    Learn more
                  </Button>
                </CardActions>
              </Card>
              {/* <Card
                sx={{
                  maxWidth: 343,
                  borderRadius: "20px",
                  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                  transition: "0.3s",
                }}
              >
                <Box sx={{ minWidth: 256 }}>
                  <Box
                    sx={{
                      padding: `4px 24px 0`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Avatar
                      alt={"brand logo"}
                      sx={(theme) => ({
                        width: 48,
                        height: 48,
                        transform: "translateY(50%)",
                        "& > img": {
                          margin: 0,
                          backgroundColor: "common.white",
                        },
                        [theme.breakpoints.up("sm")]: {
                          width: 60,
                          height: 60,
                        },
                      })}
                    >
                      <LuBrainCircuit />
                    </Avatar>
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontSize: 14,
                        color: "grey.500",
                        letterSpacing: "1px",
                      }}
                    >
                      Project
                    </Typography>
                  </Box>
                  <Box
                    component="hr"
                    sx={(theme) => ({
                      backgroundColor: "grey.200",
                      marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                      [theme.breakpoints.up("sm")]: {
                        marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                      },
                    })}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Store management system and Recipe creator assistant
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    color="text.secondary"
                    textAlign="justify"
                  >
                    The purpose of this application is to help mangement of
                    food. A python script reads the receipt or bar-codes from
                    food element, and store them in MySQL Database. Then another
                    Python script helps me to find recipe according to all
                    elements store in the databases.
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <br />
                    Languages and softwares used
                  </Typography>
                  <Typography variant="body2">Python - MySQL</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/">
                    Learn more
                  </Button>
                </CardActions>
              </Card> */}
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ display: "flex" }}
              justifyContent="center"
            >
              <Card
                sx={{
                  maxWidth: 343,
                  borderRadius: "20px",
                  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                  transition: "0.3s",
                }}
              >
                <Box sx={{ minWidth: 256 }}>
                  <Box
                    sx={{
                      padding: `4px 24px 0`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Avatar
                      alt={"brand logo"}
                      sx={(theme) => ({
                        width: 48,
                        height: 48,
                        transform: "translateY(50%)",
                        "& > img": {
                          margin: 0,
                          backgroundColor: "common.white",
                        },
                        [theme.breakpoints.up("sm")]: {
                          width: 60,
                          height: 60,
                        },
                      })}
                    >
                      <TbBrandJavascript />
                    </Avatar>
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontSize: 14,
                        color: "grey.500",
                        letterSpacing: "1px",
                      }}
                    >
                      Project
                    </Typography>
                  </Box>
                  <Box
                    component="hr"
                    sx={(theme) => ({
                      backgroundColor: "grey.200",
                      marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                      [theme.breakpoints.up("sm")]: {
                        marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                      },
                    })}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Data Analyst Portfolio
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    color="text.secondary"
                    textAlign="justify"
                  >
                    Create this portfolio to be able to outline my career
                    highlights, notable achievements, unique skills, as well as
                    endorsements. It was the unique way to learn react and
                    express js frameworks while developing a full-featured
                    application from scratch. It should be easy for anyone to
                    view and understand what I can do as a data analyst.
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <br />
                    Languages and softwares used
                  </Typography>
                  <Typography variant="body2">
                    React - Material UI - Javascript
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginBottom={4}
      ></Box>
    </Box>
  );
};

export default Seeprojects;
