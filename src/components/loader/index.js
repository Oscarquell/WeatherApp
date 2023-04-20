import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh', position: 'absolute', top: '0', left: '50%' }}>
      <CircularProgress />
    </Box>
  );
}