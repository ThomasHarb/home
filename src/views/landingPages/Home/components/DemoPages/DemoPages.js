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
      {[
        {
          title: "Pathoquest",
          date: "Nov 2020 - Janv 2024",
          details: "Bioinformatics engineer",
          icon: LaptopMacIcon,
        },
        {
          title: "MSc in Bioinformatics and Data science",
          date: "Sept 2019 - Sept 2020",
          details: "Nantes University",
          icon: SchoolIcon,
        },
        {
          title: "Cytometry expert",
          date: "Jun 2016 - Jun 2019",
          details: "CIPHE Marseille luminy",
          icon: BiotechIcon,
        },
        {
          title: "Research engineer",
          date: "Oct 2014 - Apr 2016",
          details: "B Lymphocytes, Autoimmunity and Immunotherapies - UMR 1227",
          icon: ScienceIcon,
        },
        {
          title: "MSc Immunologies",
          date: "Sept 2013 - Jun 2014",
          details: "UPMC Paris VI Sorbonnes University",
          icon: SchoolIcon,
        },
      ].map(({ icon: Item, date, details, title }, i) => (
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <Item />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {title}
            </Typography>
            <Typography>{details}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Box>
  );
};

export default DemoPages;
