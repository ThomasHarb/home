/* eslint-disable react/no-unescaped-entities */
import React from "react";
/*import { useTheme } from '@mui/material/styles';*/
import Box from "@mui/material/Box";
/*import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';*/
import Typography from "@mui/material/Typography";
/*import TeamWorkingIllustration from 'svg/illustrations/TeamWorking';*/
import { Button } from "@mui/material";
/*import { Button, CardActions, CardContent, CardMedia } from '@mui/material';*/
/*import PythonLogo from '../../../../../svg/Python-Logo-PNG-Picture.png';
import ScienceLogo from '../../../../../svg/datascience.jpeg';
import BioinformaticsLogo from '../../../../../svg/bioinformatics.jpeg';*/
/*import { styled } from '@mui/material/styles';*/

const Seeprojects = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"textSecondary"}
          align={"center"}
        >
          Projects
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={"h3"}
          gutterBottom
          align={"center"}
        >
          Collect, process and analyse data
          <br />
          for all kinds of businesses
          <br />
          to driving global change
        </Box>
        <Typography
          variant={"h6"}
          component={"p"}
          color={"textSecondary"}
          align={"center"}
        >
          My name is Thomas Harbonnnier, French data analyst with a backgroung
          in Biology and Bioinformatics.
          <br />I can work remotely or in situ
        </Typography>
        <Typography
          variant={"h6"}
          component={"p"}
          color={"primary"}
          align={"center"}
        >
          Data analyst
          <br />
          Python Developer
        </Typography>
        <Box marginTop={3} display={"flex"} justifyContent={"center"}>
          <Button
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
          </Button>
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
