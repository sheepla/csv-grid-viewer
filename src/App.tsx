
import React  from 'react';
import { Container, CssBaseline, useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
import { deepPurple, indigo } from '@mui/material/colors';
import { ColDef } from 'ag-grid-community';

import CsvUploader from './components/CsvUploader';
import DataGrid from './components/DataGrid';
import Header from './components/Header';

interface CSVRow {
  [key: string]: string | number | boolean;
}

const App: React.FC = () => {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState<boolean>(prefersDarkMode);
  const muiTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: indigo,
          secondary: deepPurple,
        },
        typography: {
          fontSize: 10,
          h1: {
            fontSize: '1.6rem',
          },
          h2: {
            fontSize: '1.4rem',
          },
        }
      }),
    [darkMode]
  );
  const handleDarkModeToggle = () => {
    setDarkMode((isDark) => {
      console.debug("Next dark mode status: ", !isDark);

      return !isDark;
    });
  };


  const [rowData, setRowData] = React.useState<CSVRow[]>([]);
  const [columnDefs, setColumnDefs] = React.useState<ColDef[]>([]);
  const handleDataLoaded = (data: CSVRow[], columns: { headerName: string; field: string }[]) => {
    setRowData(data);
    setColumnDefs(columns.map(column => ({
      headerName: column.headerName,
      field: column.field,
    })));
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline >

        <Header isDarkMode={darkMode} handleToggleDarkMode={handleDarkModeToggle} />
        <Container maxWidth={false}>
          <CsvUploader onDataLoaded={handleDataLoaded} />
          <DataGrid rowData={rowData} columnDefs={columnDefs} isDarkMode={darkMode} />
        </Container>

      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
