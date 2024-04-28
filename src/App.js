import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function App() {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [eligibilityResults, setEligibilityResults] = useState([]);

  const handleInputChange = (event) => {
    setAadhaarNumber(event.target.value);
  };

  const checkEligibility = () => {
    // Placeholder for eligibility check logic
    console.log('Checking eligibility for:', aadhaarNumber);
    // Simulate results
    setEligibilityResults(['Scheme A - Health Benefits', 'Service B - Educational Grants']);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Aadhaar Services Eligibility Checker
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 20 }}>
        <TextField
          label="Enter Aadhaar Number"
          variant="outlined"
          fullWidth
          value={aadhaarNumber}
          onChange={handleInputChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={checkEligibility}>
          Check Eligibility
        </Button>
      </div>
      <List>
        {eligibilityResults.length > 0 ? (
          eligibilityResults.map((result, index) => (
            <ListItem key={index}>
              <ListItemText primary={result} />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="Enter an Aadhaar number to see eligible services and schemes." />
          </ListItem>
        )}
      </List>
    </div>
  );
}

export default App;
