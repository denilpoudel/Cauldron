import React from 'react'
import "./style.css"
//Button alterations
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Landing() {
    return (
        <div class = "center">
            <h1>Cauldron</h1>
            <h2>No tricks, only treats.</h2>
            <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                Start Tracking
            </Button>
        </div>
    )
}