import React , {useState} from 'react'
import "./style.css"
// Text field alterations
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#F7F7F2'
    }
  },

  typography: {
    fontFamily: 'Paytone One',
  },

  select: {
    '&:after': {
      color: '#F7F7F2',
  }}

});

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiFormLabel-root": {
      color: "red" // or black
    }
  },
  input: {
    color: '#F7F7F2',
    "& .MuiSelect-select:focus": {
      color: '#F7F7F2'
    }
  },
  cssLabel: {
    color : '#F7F7F2'
  },
}));

export default function CandyLimits() {

    const [option, setOptions] = useState('Calories');
    const [amount, setAmount] = useState(0)

    const classes = useStyles();

    const handleAmount = (e) =>{
      setAmount(e.target.value)
    }
    
    return (
        <div class = "center">
            <h3>What’s your candy limit today?</h3>

            <div classname = "CandyAmount">
                <ThemeProvider theme = {theme}>
                <TextField
                required
                variant = "filled"
                id="CandyAmtLimit"
                label="Number of Calories"
                width = "900px"
                color = "secondary"
                defaultValue = "0"
                value={amount}
                onChange = {handleAmount}
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
                <br/>

              <div classname = "Submit Button">
                <Link to="/loading" style={{textDecoration: "none"}}>
                <Button style={{backgroundColor: "#cbc3e3", color: "#9370D0", fontSize: "20px",  fontWeight: "bold", fontFamily: "Paytone One", textTransform: "none"}}variant="contained" endIcon={<ArrowForwardIcon />}>
                    Submit
                </Button>
              </Link>
              </div>
            </div>
            ) 
}