import React from 'react'
import {Paper } from '@mui/material'
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <Paper
        bgcolor="text.primary"
        color="white"
        position= 'sticky'
        bottom= "0"
        width = '100%'>
        <Box 
        bgcolor="text.primary"
        color="white"
        position= 'sticky'
        bottom= "0"
        width = '100%'
        >
                <Box textAlign="center" pt={{xs: 3, sm:2}} pb={{xs:3, sm:2}}>
                    <span role={"img"}>Vunula by BlaqCosmos😎🤟</span>
                    &reg; {new Date().getFullYear()}
                </Box>
        </Box>
    </Paper>
  )
}

export default Footer;
