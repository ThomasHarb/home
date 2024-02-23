/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { VscTerminalBash } from "react-icons/vsc";
import { FcLinux } from "react-icons/fc";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
/*import FondEcran from '../../../../../svg/sci-fi-futuriste-retro-annees-80-paysage-jeu-video-retrowave-vj-neons-vaporwave-vintage-stylise_2509.jpeg';*/

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div>
      <Grid container spacing={4}>
        <Box display="flex" flexDirection="row" marginTop={2}>
          <Grid item container alignItems={"center"} xs={12} md={12}>
            <Box data-aos={isMd ? "fade-right" : "fade-up"}>
              <Box marginBottom={2}>
                <Typography
                  variant="h2"
                  color="textPrimary"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Thomas Harbonnier
                  <br />{" "}
                  <Typography
                    color={"primary"}
                    component={"span"}
                    variant={"inherit"}
                  >
                    Data analyst
                  </Typography>
                  <br />
                  <Typography
                    color={"primary"}
                    component={"span"}
                    variant={"inherit"}
                  >
                    Python Developer.
                  </Typography>
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography
                  variant="h6"
                  component="p"
                  color="textSecondary"
                  sx={{ fontWeight: 400 }}
                >
                  Developer proficient in Python development and data anlysis,
                  ready to empower your project with precision and expertise.
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "stretched", sm: "flex-start" }}
              >
                <Button
                  component={"a"}
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                  href={"https://thomasharb.github.io/contact/"}
                  target={"_blank"}
                >
                  Contact Me
                </Button>
                <Box
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                  width={{ xs: "100%", md: "auto" }}
                >
                  {/* <Button
                    component={"a"}
                    href={"https://thomasharb.github.io/projects/"}
                    variant="outlined"
                    color="primary"
                    size="large"
                    fullWidth={isMd ? false : true}
                  >
                    View Projects
                  </Button> */}
                </Box>
                <Box
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                  width={{ xs: "100%", md: "auto" }}
                ></Box>
              </Box>
            </Box>
          </Grid>
          <Box
            width={"100%"}
            alt="..."
            marginTop={10}
            marginLeft={{ xs: 2, md: 15 }}
            sx={{
              filter:
                theme.palette.mode === "dark"
                  ? "brightness(0) invert(0.7)"
                  : "none",
            }}
            alignItems="center"
          >
            <Grid container spacing={2}>
              <Grid item xs={6} md={6} marginLeft={0}>
                <Box data-aos={isMd ? "fade-right" : "fade-up"}>
                  <Box marginBottom={2}>
                    <div className="icon-container">
                      <Tooltip title="GitHub">
                        <div className="icon-wrapper">
                          <FaGitAlt style={{ fontSize: "4em" }} />
                          <Typography variant="caption">Git</Typography>
                        </div>
                      </Tooltip>
                      <Tooltip title="Python">
                        <div className="icon-wrapper">
                          <FaPython style={{ fontSize: "4em" }} />
                          <Typography variant="caption">Python</Typography>
                        </div>
                      </Tooltip>
                      <Tooltip title="JavaScript">
                        <div className="icon-wrapper">
                          <TbBrandJavascript style={{ fontSize: "4em" }} />
                          <Typography variant="caption">JavaScript</Typography>
                        </div>
                      </Tooltip>
                      <Tooltip title="Bash">
                        <div className="icon-wrapper">
                          <VscTerminalBash style={{ fontSize: "4em" }} />
                          <Typography variant="caption">Bash</Typography>
                        </div>
                      </Tooltip>
                    </div>
                  </Box>
                </Box>
              </Grid>
              {/*             <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
              <Grid item xs={6} md={6}>
                <Box data-aos={isMd ? "fade-left" : "fade-up"}>
                  <Box marginBottom={2}>
                    <div className="icon-containerTwo">
                      <Tooltip title="Linux">
                        <div className="icon-wrapper">
                          <FcLinux style={{ fontSize: "4em" }} />
                          <Typography variant="caption">Linux</Typography>
                        </div>
                      </Tooltip>
                      <Tooltip title="Docker">
                        <div className="icon-wrapper">
                          <FaDocker style={{ fontSize: "4em" }} />
                          <Typography variant="caption">Docker</Typography>
                        </div>
                      </Tooltip>
                      <Tooltip title="MySQL">
                        <div className="icon-wrapper">
                          <SiMysql style={{ fontSize: "4em" }} />
                          <Typography variant="caption">MySQL</Typography>
                        </div>
                      </Tooltip>
                      <Tooltip title="React">
                        <div className="icon-wrapper">
                          <FaReact style={{ fontSize: "4em" }} />
                          <Typography variant="caption">React</Typography>
                        </div>
                      </Tooltip>
                    </div>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Hero;
