
import React from 'react';
import Papa from 'papaparse';
import { Button, Typography, Paper, Box, Tooltip } from '@mui/material';

interface CSVRow {
  [key: string]: string | number | boolean;
}

interface CSVUploaderProps {
  onDataLoaded: (
    data: CSVRow[],
    columns: { headerName: string; field: string }[]
  ) => void;
}

const CsvUploader: React.FC<CSVUploaderProps> = ({ onDataLoaded }) => {
  const [fileName, setFileName] = React.useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {

      setFileName(file.name);

      Papa.parse<CSVRow>(file, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          const data = result.data;

          if (data.length > 0) {
            const columns = Object.keys(data[0]).map((key) => ({
              headerName: key,
              field: key,
            }));
            onDataLoaded(data, columns);
          }
        },
      });
    }
  };

  return (
    <Paper elevation={3} sx={{ m: 3 }}>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        id="upload-button"
      />

      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Tooltip title="Upload a File from Local Storage">
          <label htmlFor="upload-button">
            <Button variant="contained" component="span" size="small">
              Select a file
            </Button>
          </label>
        </Tooltip>

        {fileName ? (
          <Typography variant="subtitle1" sx={{ marginX: 2 }}>
            Uploaded: {fileName}
          </Typography>
        ) : (
          <Typography variant="subtitle1" sx={{ marginX: 2 }}>
            No file selected
          </Typography>

        )}

      </Box>
    </Paper>
  );
};

export default CsvUploader;
