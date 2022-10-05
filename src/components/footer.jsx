import React from 'react'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <footer>
        <Box 
        bgcolor="text.primary"
        color="white"
        >
                <Box textAlign="center" pt={{xs: 3, sm:2}} pb={{xs:3, sm:2}}>
                    Vunula by BlaqCosmos😎🤟
                    &reg; {new Date().getFullYear()}
                </Box>
        </Box>
    </footer>
  )
}

export default Footer;
