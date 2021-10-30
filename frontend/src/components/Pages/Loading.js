import React from 'react'
import "./style.css"
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Loading() {
    const [redirectNow, setRedirectNow] = useState(false);
    setTimeout(() => setRedirectNow(true), 3000);
    return redirectNow ? (
        <Redirect to="/tracker" />
    ) : (
        <div>
            <div style={{display: 'flex', alignItems: 'left', padding: '15px'}}>
            <Link to="/candylimits" style={{textDecoration: "none"}}>
                    <Button style={{color: "#9370DB", fontSize: "25px",  fontWeight: "normal", fontFamily: "Paytone One", textTransform: "none"}}variant="text" startIcon={<ArrowBackIcon />}>
                            Back to Candy Limit
                    </Button>
            </Link>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}>
                <h4>Preparing your Cauldron...</h4>
            </div>
        </div>
    )
}