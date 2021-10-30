import React from 'react'
import "./style.css"
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const useStyles = makeStyles({
    root: {
      padding: '8px',
      height: '100vh',
    },
    paper1: {
      width: '100%',
      height: '100vh',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    paper2: {
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        boxShadow: 'none',
      },
  });
  

export default function Tracker() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
                <Grid item xs={8}>
                    <Paper className = {classes.paper1}>
                        <div>
                            <div style={{display: 'flex', alignItems: 'left', padding: '15px'}}>
                            <Link to="/candylimits" style={{textDecoration: "none"}}>
                                    <Button style={{color: "#9370DB", fontSize: "25px",  fontWeight: "normal", fontFamily: "Paytone One", textTransform: "none"}}variant="text" startIcon={<ArrowBackIcon />}>
                                            Back to Candy Limit
                                    </Button>
                            </Link>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4} style={{backgroundColor: 'white', boxShadow: 'none'}}>
                    <Paper className = {classes.paper2}>
                        <div>
                            <h2>My Cauldron</h2>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}