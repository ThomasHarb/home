import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaPython } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { VscTerminalBash } from "react-icons/vsc";
import { FcLinux } from "react-icons/fc";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const SidebarNav = ({ onClose }) => {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        onClick={() => onClose()}
        marginBottom={1}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2} marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"textSecondary"}
          align={"center"}
        >
          RESUME
        </Typography>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box>
          <Box marginBottom={16}>
            <Typography
              variant="caption"
              color={"primary"}
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: 1,
                display: "block",
              }}
            >
              Skills
            </Typography>
            <Grid
              container
              spacing={1}
              alignContent="center"
              justifyContent="center"
            >
              <Grid item xs={6} display="flex" alignItems="center">
                <Typography
                  variant="body6"
                  component={"a"}
                  underline={"none"}
                  width={20}
                >
                  Linux
                </Typography>
                <FcLinux style={{ fontSize: "4em", marginLeft: "1em" }} />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              alignContent="center"
              justifyContent="center"
            >
              <Grid item xs={6} display="flex" alignItems="center">
                <Typography
                  variant="body6"
                  component={"a"}
                  underline={"none"}
                  width={20}
                >
                  Python
                </Typography>
                <FaPython style={{ fontSize: "4em", marginLeft: "1em" }} />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              alignContent="center"
              justifyContent="center"
            >
              <Grid item xs={6} display="flex" alignItems="center">
                <Typography
                  variant="body6"
                  component={"a"}
                  underline={"none"}
                  width={20}
                >
                  Bash
                </Typography>
                <VscTerminalBash
                  style={{ fontSize: "4em", marginLeft: "1em" }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              alignContent="center"
              justifyContent="center"
            >
              <Grid item xs={6} display="flex" alignItems="center">
                <Typography
                  variant="body6"
                  component={"a"}
                  underline={"none"}
                  width={20}
                >
                  C++
                </Typography>
                <TbBrandCpp style={{ fontSize: "4em", marginLeft: "1em" }} />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              alignContent="center"
              justifyContent="center"
            >
              <Grid item xs={6} display="flex" alignItems="center">
                <Typography
                  variant="body6"
                  component={"a"}
                  underline={"none"}
                  width={20}
                >
                  Git
                </Typography>
                <GitHubIcon style={{ fontSize: "4em", marginLeft: "1em" }} />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              alignContent="center"
              justifyContent="center"
            >
              <Grid item xs={6} display="flex" alignItems="center">
                <Typography
                  variant="body6"
                  component={"a"}
                  underline={"none"}
                  width={20}
                >
                  Docker
                </Typography>
                <FaDocker style={{ fontSize: "4em", marginLeft: "1em" }} />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              alignContent="center"
              justifyContent="center"
            >
              <Grid item xs={6} display="flex" alignItems="center">
                <Typography
                  variant="body6"
                  component={"a"}
                  underline={"none"}
                  width={20}
                >
                  MySQL
                </Typography>
                <SiMysql style={{ fontSize: "4em", marginLeft: "1em" }} />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              alignContent="center"
              justifyContent="center"
            >
              <Grid item xs={6} display="flex" alignItems="center">
                <Typography
                  variant="body6"
                  component={"a"}
                  underline={"none"}
                  width={20}
                >
                  React
                </Typography>
                <FaReact style={{ fontSize: "4em", marginLeft: "1em" }} />
              </Grid>
            </Grid>
          </Box>
          <Box marginBottom={16}>
            <Typography
              variant="caption"
              color={"primary"}
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: 1,
                display: "block",
              }}
            >
              Language
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  component={"a"}
                  underline={"none"}
                  onClick={() => onClose()}
                >
                  French (native Speaker)
                </Typography>
                <BorderLinearProgress variant="determinate" value={100} />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  component={"a"}
                  underline={"none"}
                  onClick={() => onClose()}
                >
                  English (TOEIC : 920)
                </Typography>
                <BorderLinearProgress variant="determinate" value={93} />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  component={"a"}
                  underline={"none"}
                  onClick={() => onClose()}
                >
                  Spanish
                </Typography>
                <BorderLinearProgress variant="determinate" value={60} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href="/page-customers"
          >
            See Projects
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="/page-contact"
          >
            Contact me
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
