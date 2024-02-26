/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
/* import TerminalIcon from "@mui/icons-material/Terminal"; */
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import BiotechIcon from "@mui/icons-material/Biotech";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";

const DemoPages = () => {
  return (
    <Box>
      <Box
        component={Typography}
        fontWeight={700}
        variant={"h3"}
        gutterBottom
        align={"center"}
      >
        Career Path
      </Box>
      <Typography
        sx={{
          fontWeight: "medium",
        }}
        gutterBottom
        color={"textSecondary"}
        align={"center"}
      >
        Embark on a fascinating career at the intersection of Data and
        technology as a Bioinformatic Python Developer,
        <br /> leveraging coding skills to analyze complex data.
      </Typography>
      <Timeline position="alternate">
        {/* <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Since Dec 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <TerminalIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Freelance Developer
            </Typography>
            <Typography>Python Dev, Data Analysis, Data science & Web Dev</Typography>
          </TimelineContent>
        </TimelineItem> */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Nov 2020 - Jan 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Pathoquest
            </Typography>
            <Typography>Bioinformatics engineer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Sept 2019 - Sept 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              MSc in Bioinformatics and Data science
            </Typography>
            <Typography>Nantes University</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Jun 2016 - Jun 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <BiotechIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Cytometry expert
            </Typography>
            <Typography>CIPHE Marseille luminy</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Oct 2014 - Apr 2016
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <ScienceIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Research engineer
            </Typography>
            <Typography>
              B Lymphocytes, Autoimmunity and Immunotherapies - UMR 1227
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Sept 2013 - Jun 2014
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              MSc Immunologies
            </Typography>
            <Typography>UPMC Paris VI Sorbonnes University</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default DemoPages;
