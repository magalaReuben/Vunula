import React from 'react';
import DrawerAppBar from './components/Nav';
import InputDialog from './components/Input';
import Stack from '@mui/material/Stack';
import  Box  from '@mui/material/Box';


function App() {
  return (
    <div>
      <Box bgcolor={"background.default"} color={"text.primary"}> 
      <DrawerAppBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <InputDialog/>
        <InputDialog/>
      </Stack>
      </Box>
    </div>
  );
}

export default App;
