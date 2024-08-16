
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import InfoIcon from "@mui/icons-material/Info";
import AboutDialog from "./AboutDialog";

function Header({
  isDarkMode,
  handleToggleDarkMode,
}: {
  isDarkMode: boolean;
  handleToggleDarkMode: () => void;
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1 }}>
            CSV Grid Viewer
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isDarkMode ? (
              <DarkModeIcon sx={{ m: 1 }} />
            ) : (
              <LightModeIcon sx={{ m: 1 }} />
            )}

            <Tooltip title="Switch Dark Mode" arrow>
              <Switch
                checked={isDarkMode}
                onChange={handleToggleDarkMode}
                inputProps={{ "aria-label": "toggle dark mode" }}
              />
            </Tooltip>

            <Tooltip title="About this App" arrow>
              <IconButton color="inherit" onClick={handleClickOpen}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <AboutDialog open={open} onClose={handleClose} />
    </>
  );
}

export default Header;
