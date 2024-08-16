import React from 'react';
import { Box, Button, Container, Divider, IconButton, Paper, TextField, Tooltip } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions } from 'ag-grid-community';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ClearIcon from '@mui/icons-material/Clear';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.min.css';

interface DataGridProps {
  rowData: Record<string, string | number | boolean>[];
  columnDefs: ColDef[];
  isDarkMode: boolean;
}

//const DataGridTooBar: React.FC = () => {
//  return (
//    <Paper sx={{ padding: 2, marginBottom: 2 }}>
//      <Box sx={{ display: 'flex', alignItems: 'center' }}>
//        <Tooltip title="Quick Filter: Allows to search all records">
//          <TextField
//            label="Filter..."
//            variant="outlined"
//            //value={}
//            //onChange={handleFilterChange}
//            size="small"
//          />
//        </Tooltip>
//
//        <Box sx={{ paddingX: 1 }}>
//
//          <Tooltip title="Clear Filter">
//            <IconButton>
//              <ClearIcon />
//            </IconButton>
//          </Tooltip>
//        </Box>
//
//        <Box sx={{ paddingX: 1 }}>
//          <Tooltip title="Open Filter Menu">
//            <FilterAltIcon />
//          </Tooltip>
//        </Box>
//
//        <Box sx={{ paddingX: 1 }}>
//          <Tooltip title="Auto Size Columns">
//            <IconButton>
//              <ViewWeekIcon />
//            </IconButton>
//          </Tooltip>
//        </Box>
//
//        <Divider orientation="vertical" />
//
//        <Box sx={{ paddingX: 1 }}>
//          <Tooltip title="Export to CSV">
//            <IconButton>
//              <FileDownloadIcon />
//            </IconButton>
//          </Tooltip>
//          </Box>
//      </Box>
//
//    </Paper >
//  )
//}

const DataGrid: React.FC<DataGridProps> = ({ rowData, columnDefs, isDarkMode }) => {
  const defaultColDef: ColDef = {
    filter: 'agTextColumnFilter',
    floatingFilter: true,
  };

  const gridOptions: GridOptions = {
    defaultColDef,
    paginationPageSize: 20,
    paginationPageSizeSelector: [20, 50, 100, 500, 1000, 5000],
  };

  const dataGridThemeClassName = isDarkMode ? "ag-theme-balham-dark" : "ag-theme-balham";

  return (
    <Container maxWidth={false}>
      <Box className={dataGridThemeClassName} sx={{ height: 400, width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          domLayout='autoHeight'
          pagination={true}
          gridOptions={gridOptions}
        />
      </Box>
    </Container>
  );
};

export default DataGrid;
