import React from 'react';
import DrawerAppBar from './components/Nav';
import InputDialog from './components/Input';
import Footer from './components/footer';
import Stack from '@mui/material/Stack';
import  Box  from '@mui/material/Box';


function App() {
  return (
    <div>
      <DrawerAppBar/>
      <Box
        bgcolor={"background.default"} 
        color={"text.primary"}
        sx={{
          display: 'grid',
          bgcolor: 'background.paper',
        }}
      >
        <Box
        bgcolor={"background.default"} 
        color={"text.primary"}
        sx={{
          display: 'grid',
          justifyContent: 'space-evenly',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Stack direction="row" spacing={5} justifyContent="space-between">
          <InputDialog/>
          <InputDialog/>
        </Stack> 
        <Box sx={{marginTop: 'calc(40% + 90px)'}}>
        </Box>
      </Box>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
