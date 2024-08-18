import React from 'react';
import { Box, Container } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.min.css';

interface DataGridProps {
  rowData: Record<string, string | number | boolean>[];
  columnDefs: ColDef[];
  isDarkMode: boolean;
}

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
