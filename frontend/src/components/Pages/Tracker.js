import React from 'react'
import "./style.css"
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
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
            <Grid container spacing={0}>
                <Grid item xs={8.5}>
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
                        <div class = "center">
                            <h1 style={{fontSize: "500%"}}>Your cauldron is 0% full.</h1>
                            <h4 style={{fontSize: "500%"}}>0/2500 calories</h4>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3.5} style={{backgroundColor: 'white', boxShadow: 'none'}}>
                    <Paper className = {classes.paper2}>
                        <div>
                            <h2>My Cauldron</h2>
                        </div>
                        <div>
                            <h5 style={{paddingLeft: '5%'}}>Twix
                            <h6>286 cals ea.</h6> <br/>
                            <h7 style={{paddingLeft: '50%', whiteSpace: 'nowrap'}}>286 cals</h7>
                            </h5>
                        </div>
                        <div style={{position: 'absolute', bottom: '0', paddingBottom: '5.5%'}}>
                            <h2 style={{paddingLeft: '25%', whiteSpace: 'nowrap'}}>Total:</h2>
                            <h2 style={{paddingLeft: '25%', whiteSpace: 'nowrap'}}>Goal:</h2>
                        </div>
                        <div style={{position: 'absolute', bottom: '0'}}>
                            <h7 style={{paddingLeft: '140%', whiteSpace: 'nowrap'}}>0 <br/><br/><br/><h7 style={{paddingLeft: '140%', whiteSpace: 'nowrap'}}>2500</h7></h7>
                            <h4 style={{paddingLeft: '110%', paddingBottom: '10px', whiteSpace: 'nowrap'}}>Under Limit!</h4>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}