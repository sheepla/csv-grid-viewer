
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { open as browserOpen} from "@tauri-apps/api/shell";

const AboutDialog: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="app-info-title">
      <DialogTitle
        id="app-info-title"
        sx={{ textAlign: "center" }}
      >
        CSV Grid Viewer
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="h6">About</Typography>
          <Box sx={{ p: 1 }}>
            <Typography>
              <strong>CSV Grid Viewer</strong> is an application designed to help you view
              and interact with CSV data using a grid interface.
            </Typography>
            <Typography>
              You can filter and search data easily.
            </Typography>
          </Box>

          <Box sx={{ paddingY: 2 }}>
            <Divider orientation="horizontal" />
          </Box>

          <Typography variant="h6">Repository</Typography>
          <Box sx={{ p: 1 }}>
            <Box sx={{ p: 1 }}>
              <Typography>
                If you like this app, I'd love to have you <strong>star</strong> it on GitHub!
              </Typography>
            </Box>

            <Box sx={{ paddingY: 1 }}>
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                onClick={async () => {
                  await browserOpen("https://github.com/sheepla/csv-grid-viewer");
                }}
              >
                See GitHub Repository
              </Button>
            </Box>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "right" }}>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutDialog;
