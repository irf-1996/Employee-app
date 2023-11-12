import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import './Style.css';

const Employee = () => {
  return (
    <div className='employee-form'>
      <Box
        component="form"
        className='boxStyleMui'
        autoComplete="off"
        sx={{
          '& .MuiInputLabel-root.Mui-focused': { color: 'blue' },
          '& .MuiInput-underline:after': { borderBottomColor: 'Blue' },
        }}
      >
        <div className='field'>
          <h2 className="headingStyleMui" style={{ color: "#5f44a3", textAlign: 'center' }}>Employee Form</h2>
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Name"
          />
          <br /><br />
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Designation"
          />
          <br /><br />
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Location"
          /> <br /><br />
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Salary"
          /> <br /><br />
          <Button variant="contained" className='buttonStyleMui' sx={{ backgroundColor: '#5f44a3' }}>Add</Button>
        </div>
      </Box>
    </div>
  );
}

export default Employee;