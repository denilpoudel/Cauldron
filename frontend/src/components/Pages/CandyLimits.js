import React from 'react'
import "./style.css"
// Text field alterations
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

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

    const handleChange = (event) => {
      setOptions(event.target.value)};

    return (
        <div class = "center">
            <h3>What’s your candy limit today?</h3>

            <div classname = "CandyAmount">
`            <TextField
              required
              id="CandyAmtLimit"
              label="Amount"
              defaultValue="2500"
              />
            </div>
            

            <div classname = "CandySelect">
                <TextField
                    required
                    id="CandyMeasurement"
                    select
                    label="Units"
                    value={option}
                    onChange={handleChange}
                >
                {candyOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </div>
        </div>
            ) 
}
