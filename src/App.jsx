import React from 'react';
import DrawerAppBar from './components/Nav';
import  Box  from '@mui/material/Box';


function App() {
  return (
    <div>
      <Box bgcolor={"background.default"} color={"text.primary"}> 
      <DrawerAppBar/>
      Hello world
      </Box>
    </div>
  );
}

export default App;
