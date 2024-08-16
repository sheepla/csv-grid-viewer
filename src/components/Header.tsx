import React from "react";
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

function Header({
  isDarkMode,
  handleToggleDarkMode,
}: {
  isDarkMode: boolean;
  handleToggleDarkMode: () => void;
}) {
  return (
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
