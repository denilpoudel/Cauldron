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
      value: 'Grams of Sugar',
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

            <div classname = "CandySelect">
                <TextField
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
