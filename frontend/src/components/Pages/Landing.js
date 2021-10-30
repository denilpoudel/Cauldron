import React from 'react'
import "./style.css"
//Button alterations
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Landing() {
    return (
        <div class = "center">
            <h1>Cauldron</h1>
            <h2>No tricks, only treats.</h2>
            <Link to="/candylimits">
                <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                    Start Tracking
                </Button>
            </Link>
        </div>
    )
}