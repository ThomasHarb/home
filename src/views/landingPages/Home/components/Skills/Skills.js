import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { VscTerminalBash } from "react-icons/vsc";
import { FcLinux } from "react-icons/fc";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Skills() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        component={Typography}
        fontWeight={700}
        variant={"h3"}
        gutterBottom
        align={"center"}
      >
        Programming Skills
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent={"center"}>
        {[
          { icon: FaGitAlt, name: "Git" },
          { icon: FaPython, name: "Python" },
          { icon: TbBrandJavascript, name: "JavaScript" },
          { icon: VscTerminalBash, name: "Bash" },
          { icon: FcLinux, name: "Linux" },
          { icon: FaDocker, name: "Docker" },
          { icon: SiMysql, name: "MySQL" },
          { icon: FaReact, name: "ReactJS" },
        ].map(({ icon: Item, name }, i) => (
          <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
            <Box
              height={"100%"}
              width={"100%"}
              alt="..."
              sx={{
                filter:
                  theme.palette.mode === "dark"
                    ? "brightness(0) invert(0.7)"
                    : "none",
              }}
            >
              <Item style={{ fontSize: "4em" }} />
              <Typography>{name}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
