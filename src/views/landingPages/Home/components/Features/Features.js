/*import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BioinformaticsLogo from '../../../../../svg/bioinformatics.jpeg';
import NantesLogo from '../../../../../svg/logoUniNates.png';
import CellImage from '../../../../../svg/Cellimagerie.jpeg';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import BiotechIcon from '@mui/icons-material/Biotech';

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CareerStepReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expandedNantesUniv, setExpandedNantesUniv] = React.useState(false);

  const handleExpandClickNantesUniv = () => {
    setExpandedNantesUniv(!expandedNantesUniv);
  };

  const [expandedCytometryCard, setExpandedCytometryCard] = React.useState(false);

  const handleExpandClickCytometryCard = () => {
    setExpandedCytometryCard(!expandedCytometryCard);
  };

  return (
    <Box>
      <Grid container spacing={2} alignitems="stretch" columnSpacing={4}>
        <Grid item xs={2} md={4} style={{ display: 'grid' }}>
          <Card sx={{ maxWidth: 345 }} >
            <CardHeader
              title="Bioinformatic Engineer"
              subheader="Nov 2020 - Nov 2023"
            />
            <CardMedia
              component="img"
              height="350"
              image={BioinformaticsLogo}
              alt="Bioinformatics"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                My role within this company was to ensure the creation, the optimization and the validation of the bioinformatics tools (software, pipelines, ...) 
                to the identification of foreign agents within biological samples sequenced by NGS based 
                on current normative and regulatory (GMP) standards.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Development:</Typography>
                <Typography paragraph>
                  Development or improvement of NGS (Next Generation Sequencing) analysis pipeline in Python (Snakemake).
                </Typography>
                <Typography paragraph>Data Analysis:</Typography>
                <Typography paragraph>
                  Use of computer programming and algorithms to store, analyze, and interpret massive volumes of biological data.
                </Typography>
                <Typography paragraph>Communication:</Typography>
                <Typography paragraph>
                  Deliver and create report to communicate results to client in both English and French.
                </Typography>
                <Typography paragraph>Quality :</Typography>
                <Typography paragraph>
                  Write and communicate documents according to GMP (Good manufacturing product) standard.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={2} md={4} style={{ display: 'grid' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              title="MSc Bioinformatics and Data Sciences"
              subheader="Jun 2019 - Sept 2020"
            />
            <CardMedia
              component="img"
              height="400"
              image={NantesLogo}
              alt="Nantes Logo"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Resumption of study in Bioinformatics/Data sciences 
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expandedNantesUniv}
                onClick={handleExpandClickNantesUniv}
                aria-expanded={expandedNantesUniv}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expandedNantesUniv} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Programmation : </Typography>
                <Typography paragraph>
                  I learned programmation in python and the linux environement by myself. So , I decided to resume my eduction with a 
                  MSc in Bioinformatics, because it seems important for me to vaidate this knowledge with a diploma. The bioinformatics 
                  was also the easiest way for me to go further in programmation while applying it to a field that I knew : biology.
                  <br />
                  Course in C++, python and R. Creation of small projects :
                  <ul>
                    <li>Aligment bases tool in C++</li>
                    <li>Software to download and visualize connection between sRNA (small RNA) and pathology from public databases (KEGG)</li>
                  </ul>
                </Typography>
                <Typography paragraph>Algorithmics : </Typography>
                <Typography paragraph>
                 Algorithmic principles driving advances in bioinformatics.
                </Typography>
                <Typography paragraph>Databases : </Typography>
                <Typography paragraph>
                  Creation and management of databses with SQL and PL/SQL language.
                </Typography>
                <Typography paragraph>Data Sciences : </Typography>
                <Typography paragraph>
                  Creation of small project in machine learning to classify proteins according to their structures.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={2} md={4} style={{ display: 'grid' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              title="Cytometry expert"
              subheader="Nov 2020 - Nov 2023"
            />
            <CardMedia
              component="img"
              height="400"
              image={CellImage}
              alt="Image Cells"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Technical manager of the flow cytometry activity in CIPHE immuno-phenotyping module.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expandedCytometryCard}
                onClick={handleExpandClickCytometryCard}
                aria-expanded={expandedCytometryCard}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expandedCytometryCard} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Missions:</Typography>
                <Typography paragraph>
                  <ul>
                    <li>Functional immuno-phenotyping of murine and human cells during internal or external services</li>
                    <li>Design of flow cytometry panels</li>
                    <li>Management of the stock and Flow Cytometer Maintenance</li>
                    <li>Integration and management of interns</li>
                    <li>Animation during INSERM training (Training in advanced mlitiparametric cytometry) and the AFC</li>
                  </ul>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>


        <Grid item xs={2} md={4} style={{ display: 'grid' }}>
          <Card sx={{ maxWidth: 345 }} >
            <CardHeader
              title="Bioinformatic Engineer"
              subheader="Nov 2020 - Nov 2023"
              color="primary"
            />
            <BiotechIcon />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                My role within this company was to ensure the creation, the optimization and the validation of the bioinformatics tools (software, pipelines, ...) 
                to the identification of foreign agents within biological samples sequenced by NGS based 
                on current normative and regulatory (GMP) standards.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Development:</Typography>
                <Typography paragraph>
                  Development or improvement of NGS (Next Generation Sequencing) analysis pipeline in Python (Snakemake).
                </Typography>
                <Typography paragraph>Data Analysis:</Typography>
                <Typography paragraph>
                  Use of computer programming and algorithms to store, analyze, and interpret massive volumes of biological data.
                </Typography>
                <Typography paragraph>Communication:</Typography>
                <Typography paragraph>
                  Deliver and create report to communicate results to client in both English and French.
                </Typography>
                <Typography paragraph>Quality :</Typography>
                <Typography paragraph>
                  Write and communicate documents according to GMP (Good manufacturing product) standard.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={2} md={4} style={{ display: 'grid' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              title="MSc Bioinformatics and Data Sciences"
              subheader="Jun 2019 - Sept 2020"
            />
            <CardMedia
              component="img"
              height="400"
              image={NantesLogo}
              alt="Nantes Logo"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Resumption of study in Bioinformatics/Data sciences 
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expandedNantesUniv}
                onClick={handleExpandClickNantesUniv}
                aria-expanded={expandedNantesUniv}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expandedNantesUniv} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Programmation : </Typography>
                <Typography paragraph>
                  I learned programmation in python and the linux environement by myself. So , I decided to resume my eduction with a 
                  MSc in Bioinformatics, because it seems important for me to vaidate this knowledge with a diploma. The bioinformatics 
                  was also the easiest way for me to go further in programmation while applying it to a field that I knew : biology.
                  <br />
                  Course in C++, python and R. Creation of small projects :
                  <ul>
                    <li>Aligment bases tool in C++</li>
                    <li>Software to download and visualize connection between sRNA (small RNA) and pathology from public databases (KEGG)</li>
                  </ul>
                </Typography>
                <Typography paragraph>Algorithmics : </Typography>
                <Typography paragraph>
                 Algorithmic principles driving advances in bioinformatics.
                </Typography>
                <Typography paragraph>Databases : </Typography>
                <Typography paragraph>
                  Creation and management of databses with SQL and PL/SQL language.
                </Typography>
                <Typography paragraph>Data Sciences : </Typography>
                <Typography paragraph>
                  Creation of small project in machine learning to classify proteins according to their structures.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}*/

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { colors } from "@mui/material";

const Features = ({ themeMode = "dark" }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  return (
    <div id="about">
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={"h3"}
          gutterBottom
          align={"center"}
        >
          About
        </Box>
        <Typography align={"center"} color="textSecondary" variant={"h6"}>
          Python developer
          <br />
          Data Analyst/Data scientist
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {[
          {
            title: "Python Developer",
            subtitle:
              "Introducing a seasoned Python developer, dedicated to delivering top-tier software solutions with precision and expertise.",
            icon: (
              <svg
                height={42}
                width={42}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  strokeWidth={2}
                />
              </svg>
            ),
            color: colors.blueGrey,
            lessons: [
              "Understanding of front-end technologies",
              "High attention to detail",
              "Excellent communication and problem-solving skills",
              "Proficient understanding of code versioning tools",
            ],
          },
          {
            title: "Data Analyst / Data visualization",
            subtitle:
              "Meet an adept data analyst, proficient in transforming complex data into meaningful insights, guiding data-driven decisions with finesse.",
            icon: (
              <svg
                height={42}
                width={42}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth={2}
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
            ),
            color: colors.lightBlue,
            lessons: [
              "Create scripts to collect and analyze data",
              "Work with Python libraries like Pandas for data manipulation",
              "Create interactive dashboard to use in reports for internal or client use",
              "Analyze statistical data",
            ],
          },
        ].map((item, i) => (
          <Grid item xs={12} key={i}>
            <Grid
              container
              spacing={isMd ? 4 : 2}
              flexDirection={i % 2 === 1 ? "row-reverse" : "row"}
            >
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? "fade-right" : "fade-up"}
              >
                <Box
                  component={Card}
                  display={"flex"}
                  alignItems={"center"}
                  width={"100%"}
                  height={"100%"}
                  bgcolor={item.color[themeMode === "light" ? 50 : 900]}
                  boxShadow={0}
                >
                  <CardContent>
                    <Box
                      component={Avatar}
                      width={60}
                      height={60}
                      marginBottom={6}
                      bgcolor={item.color[themeMode === "light" ? 900 : 50]}
                      boxShadow={4}
                    >
                      <Box color={item.color[themeMode === "light" ? 50 : 900]}>
                        {item.icon}
                      </Box>
                    </Box>
                    <Box
                      component={Typography}
                      variant={"h6"}
                      gutterBottom
                      fontWeight={500}
                    >
                      {item.title}
                    </Box>
                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? "fade-left" : "fade-up"}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  width={"100%"}
                  height={"100%"}
                >
                  <Box marginBottom={2}>
                    <Box
                      component={Typography}
                      variant={"h4"}
                      gutterBottom
                      fontWeight={600}
                    >
                      {item.title}
                    </Box>
                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    {item.lessons.map((lesson, j) => (
                      <Grid item xs={12} key={j}>
                        <Box
                          component={ListItem}
                          disableGutters
                          width={"auto"}
                          padding={0}
                        >
                          <Box
                            component={ListItemAvatar}
                            minWidth={"auto !important"}
                            marginRight={2}
                          >
                            <Box
                              component={Avatar}
                              bgcolor={theme.palette.secondary.main}
                              width={20}
                              height={20}
                            >
                              <svg
                                width={12}
                                height={12}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <ListItemText primary={lesson} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Features.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Features;
