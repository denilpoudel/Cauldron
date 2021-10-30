import React from 'react'
import "./style.css"
// Text field alterations
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { withStyles, makeStyles } from '@mui/styles';
import { useTheme } from '@emotion/react';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#F7F7F2'
    }
  },

  typography: {
    fontFamily: 'Paytone One',
  },

});

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiFormLabel-root": {
      color: "red" // or black
    }
  },
  input: {
    color: '#F7F7F2'
  },
  cssLabel: {
    color : '#F7F7F2'
  },
}));


const candyOptions = [
    {
      value: 'Calories',
      label: 'Number of Calories',
    },
    {
      value: 'Sugar',
      label: 'Grams of Sugar',
    },
  ];

export default function CandyLimits() {
    const [option, setOptions] = React.useState('Calories');
    const classes = useStyles();
    const classesTheme = useTheme();

    const handleChange = (event) => {
      setOptions(event.target.value)};

    return (
        <div class = "center">
            <h3>What’s your candy limit today?</h3>

            <div classname = "CandyAmount">
                <ThemeProvider theme = {theme}>
                <TextField
                required
                id="CandyAmtLimit"
                label="Amount"
                size = "normal"
                color = "secondary"
                InputLabelProps={{
                  className: classes.cssLabel
                }}
                InputProps={{
                  className: classes.input
                }}
                />
              </ThemeProvider>
            </div>
            
            <br/>

            <div classname = "CandySelect">
            <ThemeProvider theme = {theme}>
                <TextField
                    required
                    id="CandyMeasurement"
                    select
                    label="Units"
                    value={option}
                    onChange={handleChange}
                    size = "normal"
                    color = "secondary"
                    
                    InputProps={{
                      className: classes.input
                    }}
                >
                {candyOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                </ThemeProvider>
            </div>
        </div>
            ) 
}