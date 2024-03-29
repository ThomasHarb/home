import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import InsightsIcon from "@mui/icons-material/Insights";
import Photo from "../../../../svg/photoThomas.jpeg";
import Link from "@mui/material/Link";

function Topbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <InsightsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            T.Harbonnier
          </Typography>
          <Typography
            justifyContent={"center"}
            marginLeft={2}
            sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
          >
            Python Developer
          </Typography>
          <Typography
            justifyContent={"center"}
            marginLeft={2}
            sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
          >
            |
          </Typography>
          <Typography
            justifyContent={"center"}
            marginLeft={2}
            sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
          >
            Data Analyst
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <MenuIcon />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#main"
                  color="textSecondary"
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#skills"
                  color="textSecondary"
                >
                  Skills
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#services"
                  color="textSecondary"
                >
                  Services
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#projects"
                  color="textSecondary"
                >
                  Projects
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#about"
                  color="textSecondary"
                >
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#work"
                  color="textSecondary"
                >
                  Career
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="https://thomasharb.github.io/contact/"
                  color="textSecondary"
                >
                  Contact
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <InsightsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            T.Harbonnier
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            marginLeft={2}
          >
            <Link
              underline="none"
              component="a"
              /* href={process.env.PUBLIC_URL + "/"} */
              href="#main"
              color="textSecondary"
            >
              Home
            </Link>
            <Link
              underline="none"
              component="a"
              href="#skills"
              color="textSecondary"
              marginLeft={4}
            >
              Skills
            </Link>
            <Link
              underline="none"
              component="a"
              href="#services"
              color="textSecondary"
              marginLeft={4}
            >
              Services
            </Link>
            <Link
              underline="none"
              component="a"
              href="#projects"
              color="textSecondary"
              marginLeft={4}
            >
              Projects
            </Link>
            <Link
              underline="none"
              component="a"
              href="#about"
              color="textSecondary"
              marginLeft={4}
            >
              About
            </Link>
            <Link
              underline="none"
              component="a"
              href="#work"
              color="textSecondary"
              marginLeft={4}
              marginRight={2}
            >
              Career
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", lg: "flex" },
            }}
            marginRight={2}
          >
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://thomasharb.github.io/contact/"
              size="large"
              sx={{
                minWidth: 150,
              }}
            >
              Contact
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", lg: "flex" },
            }}
          >
            <Tooltip title="T.Harbonnier Python Developer | Data analyst">
              <Avatar alt="Thomas Harbonnier" src={Photo} />
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#main"
                  color="textSecondary"
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#skills"
                  color="textSecondary"
                >
                  Skills
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#services"
                  color="textSecondary"
                >
                  Services
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#projects"
                  color="textSecondary"
                >
                  Projects
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#about"
                  color="textSecondary"
                >
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="#work"
                  color="textSecondary"
                >
                  Work
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="https://thomasharb.github.io/contact/"
                  color="textSecondary"
                >
                  Contact
                </Link>
              </MenuItem>
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Topbar;
