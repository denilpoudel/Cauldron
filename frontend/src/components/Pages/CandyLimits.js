import React from 'react'
import "./style.css"
// Text field alterations
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { withStyles, makeStyles } from '@mui/styles';
import { useTheme } from '@emotion/react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

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

export default function CandyLimits() {
    const classes = useStyles();

    const [units, setUnits] = React.useState('');
    const handleChange = (event) => {
      setUnits(event.target.value);};

    return (
        <div class = "center">
            <h3>What’s your candy limit today?</h3>

            <div classname = "CandyAmount">
                <ThemeProvider theme = {theme}>
                <TextField
                required
                variant = "filled"
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
            <FormControl fullWidth>
                <InputLabel id="select-units-label" color="secondary" className={classes.cssLabel}>Units *</InputLabel>
                <Select
                  labelId="select-units-label"
                  id="select-units"
                  value={units}
                  label="Units"
                  required
                  width = 'small'
                  color = "secondary"
                  variant = "filled"
                  onChange={handleChange}
                  InputLabelProps={{
                    className: classes.cssLabel
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                >
                  <MenuItem value={1}>Calories</MenuItem>
                  <MenuItem value={2}>Sugar (g)</MenuItem>
                </Select>
            </FormControl>
            </ThemeProvider>
                <br/>
                <br/>

              <div classname = "Submit Button">
                <Link to="/loading" style={{textDecoration: "none"}}>
                <Button style={{backgroundColor: "#cbc3e3", color: "#9370D0", fontSize: "20px",  fontWeight: "bold", fontFamily: "Paytone One", textTransform: "none"}}variant="contained" endIcon={<ArrowForwardIcon />}>
                    Submit
                </Button>
              </Link>
              </div>
            </div>
        </div>
            ) 
}