import React, {useState} from 'react'
import "./style.css"
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Redirect, useLocation } from "react-router-dom";

export default function Loading(props) {
    const [redirectNow, setRedirectNow] = useState(false);
    setTimeout(() => setRedirectNow(true), 3000);
    const amount = props.location.amount

  
    return redirectNow ? (
        <Redirect to={{pathname:'/tracker', amount}}/>
    ) : (
        <div>
            <div style={{display: 'flex', alignItems: 'left', padding: '15px'}}>
            <Link to="/candylimits" style={{textDecoration: "none"}}>
                    <Button style={{color: "#9370DB", fontSize: "25px",  fontWeight: "normal", fontFamily: "Paytone One", textTransform: "none"}}variant="text" startIcon={<ArrowBackIcon />}>
                            Back to Candy Limit
                    </Button>
            </Link>
            </div>
            <div class = "center">
                <h4>Preparing your Cauldron...</h4>
            </div>
        </div>
    )
}