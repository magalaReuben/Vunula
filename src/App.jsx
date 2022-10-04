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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          height: 100,
          borderRadius: 1,
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <InputDialog/>
        <InputDialog/>
      </Stack>
      </Box>
      
      </Box>
    </div>
  );
}

export default App;
