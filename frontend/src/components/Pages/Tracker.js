import React, {useState, useEffect} from 'react'
import "./style.css"
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { db} from '../Firebase';
import { ref, onValue, get, child} from "firebase/database";



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
  
  const old_data = {
    "Calories": 280,
    "Name": "Hersheys",
    "Sugar": 29
}

export default function Tracker() {

    const classes = useStyles();
    const [data, setData] = useState([old_data]);
    const [totalCalories, setTotalCalories] = useState([0])

    useEffect(() => {
        var colorRef = ref(db,'Color/Send');
        let olddata = [...data]
        onValue(colorRef, (snapshot) => {
            const candy = snapshot.val();
            olddata.push(candy)
            setData(olddata);
            caluclateTotalCalories (olddata)
        });
        
      }, []);


    const refresh = (e) => {
        var colorRef = ref(db,'Color/Send');
        let olddata = [...data]
        onValue(colorRef, (snapshot) => {
            const candy = snapshot.val();
            if (data.length < 7){
                olddata.push(candy)
                setData(olddata);
                caluclateTotalCalories (olddata)
            }
            else{
                setData(old_data)
            }
            
        });
    }


    const caluclateTotalCalories = (data) => {
        const x = data
        let totalCalories = 0;
        x.forEach(element => {
            totalCalories += element.Calories
        })
        setTotalCalories(totalCalories)
    }

    console.log(data)
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
                            <Button onClick = {refresh} > Refresh</Button>
                            </div>
                        </div>
                        <div class = "center">
                            <h1 style={{fontSize: "500%"}}>Your cauldron is 0% full.</h1>
                            <h4 style={{fontSize: "500%"}}>{totalCalories}/2500 calories</h4>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3.5} style={{backgroundColor: 'white', boxShadow: 'none'}}>
                    <Paper className = {classes.paper2}>
                        <div>
                            <h2>My Cauldron</h2>
                        </div>
                        {data.map(items => {
                            return(
                                <div>
                                    <h5 style={{paddingLeft: '5%'}}>{items.Name}
                                    <h6>{data.Calories} {items.Calories}cals ea.</h6>
                                    </h5>
                                </div>
                            )
                        })
                        }
                        <div style={{position: 'absolute', bottom: '0', paddingBottom: '5.5%'}}>
                            <h2 style={{paddingLeft: '25%', whiteSpace: 'nowrap'}}>Total:</h2>
                            <h2 style={{paddingLeft: '25%', whiteSpace: 'nowrap'}}>Goal:</h2>
                        </div>
                        <div style={{position: 'absolute', bottom: '0'}}>
                            <h7 style={{paddingLeft: '140%', whiteSpace: 'nowrap'}}> {totalCalories} <br/><br/><br/><h7 style={{paddingLeft: '140%', whiteSpace: 'nowrap'}}>2500</h7></h7>
                            <h4 style={{paddingLeft: '110%', paddingBottom: '10px', whiteSpace: 'nowrap'}}>Under Limit!</h4>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}