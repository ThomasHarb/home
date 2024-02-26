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
            noWrap
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
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Python Developer | Data Analyst
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href={process.env.PUBLIC_URL + "/"}
                  color="textSecondary"
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="https://thomasharb.github.io/netflix-project/"
                  color="textSecondary"
                >
                  Movies Project
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="https://thomasharb.github.io/fastp-project/"
                  color="textSecondary"
                >
                  Fastp Dashboard Project
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
            marginLeft={8}
          >
            <Link
              underline="none"
              component="a"
              href={process.env.PUBLIC_URL + "/"}
              color="textSecondary"
            >
              Home
            </Link>
            <Link
              underline="none"
              component="a"
              href="https://thomasharb.github.io/netflix-project/"
              color="textSecondary"
              marginLeft={4}
            >
              Movies Project
            </Link>
            <Link
              underline="none"
              component="a"
              href="https://thomasharb.github.io/fastp-project/"
              color="textSecondary"
              marginLeft={4}
            >
              Fastp Dashboard Project
            </Link>
          </Box>
          <Box
            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
            marginRight={4}
          >
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Thomas Harbonnier" src={Photo} />
              </IconButton>
            </Tooltip>
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
              {/*               {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href={process.env.PUBLIC_URL + "/"}
                  color="textSecondary"
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="https://thomasharb.github.io/netflix-project/"
                  color="textSecondary"
                >
                  Movies Project
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  underline="none"
                  component="a"
                  href="https://thomasharb.github.io/fastp-project/"
                  color="textSecondary"
                >
                  Fastp Dashboard Project
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Topbar;
