import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Photo from "../../../../svg/photoThomas.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
/* import { Typography } from "@mui/material"; */

const Topbar = ({ onSidebarOpen }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          {/*           <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <Typography variant="h6" component="div" color={'textSecondary'}>
              Skills
            </Typography> */}
          {/*<MenuIcon />*/}
          {/* </IconButton> */}
        </Box>
        {!isMobile && (
          <Box
            display={"flex"}
            alignItems="baseline"
            component="a"
            underline="none"
            href={process.env.PUBLIC_URL + "/"}
            title="THarbonnier"
            height={{ xs: 28, md: 32 }}
            width={45}
          >
            <Avatar alt="Thomas Harbonnier" src={Photo} />
          </Box>
        )}
      </Box>
      <Box display="flex" flexGrow={1} marginLeft={2}>
        {isMobile && (
          <Typography>
            <h5>
              Thomas Harbonnier <br />
              Python Developer
              <br />| Data Analyst
            </h5>
          </Typography>
        )}
        {!isMobile && (
          <Typography justifyContent={"center"}>
            Thomas Harbonnier
            <br />
            Python Developer | Data Analyst
          </Typography>
        )}
      </Box>
      <Box display="flex" alignItems={"center"}>
        <Box>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() => window.open("https://www.Linkedin.com")}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box marginX={2}>
          <IconButton
            aria-label="Github.com"
            onClick={() => window.open("https://github.com")}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          sx={{ display: { xs: "flex", md: "flex" }, flexWrap: "wrap" }}
          alignItems={"center"}
        >
          <Box flexGrow={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href={process.env.PUBLIC_URL + "/"}
              color="textPrimary"
            >
              Home
            </Link>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://thomasharb.github.io/contact/"
              size="large"
            >
              Contact me
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
