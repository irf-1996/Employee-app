import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Employee App
          </Typography>
          <Button><Link style={{color:'whitesmoke' , textDecoration:"none"}} to ={'/'}>Home</Link></Button>
          <Button ><Link style={{color:'whitesmoke' , textDecoration:"none"}} to ={'/employee'}> Employee Form</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
