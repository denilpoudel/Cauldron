import React, {useState, useEffect} from 'react'
import "./style.css"
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RefreshIcon from '@mui/icons-material/Refresh';
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

export default function Tracker(props) {

    const classes = useStyles();
    const [data, setData] = useState([old_data]);
    const [totalCalories, setTotalCalories] = useState(0)
    const [candyAmount, setCandyAmount] = useState(props.location.amount)
    const [percentageFull, setPercentage] = useState(0)
    const [isOverLimit, setOverLimit] = useState(false)

    useEffect(() => {
        var colorRef = ref(db,'Color/Send');
        let olddata = [...data]
        onValue(colorRef, (snapshot) => {
            const candy = snapshot.val();
            olddata.push(candy)
            setData(olddata);
            calculateTotalCalories (olddata)
        })
       
        
      }, []);


    const refresh = (e) => {
        var colorRef = ref(db,'Color/Send');
        let olddata = [...data]
        onValue(colorRef, (snapshot) => {
            const candy = snapshot.val();
            if (data.length < 7){
                olddata.push(candy)
                setData(olddata);
                calculateTotalCalories (olddata)
            }
            else{
                setData(old_data)
            }
            
        });
    }


    const calculateTotalCalories = (data) => {
        const x = data
        const amount = parseInt(candyAmount)
        let totalCalories = 0;
        x.forEach(element => {
            totalCalories += element.Calories
        })

        let percentage = Math.floor((totalCalories/amount)*100)
        setPercentage(percentage)
        console.log(percentage)
        console.log(isOverLimit)
        if (percentage >= 100){
            setOverLimit(true)
        }else{
            setOverLimit(false)
        }
        setTotalCalories(totalCalories)
    }

 

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
                            <Button style={{color: "#DED5EC", fontSize: "25px",  fontWeight: "normal", fontFamily: "Paytone One", textTransform: "none"}}variant="text" startIcon={<RefreshIcon />} onClick = {refresh} > Refresh</Button>
                            </div>
                        </div>
                        <div class = "center">
                            <h1 style={{fontSize: "500%"}}>Your cauldron is {percentageFull}% full.</h1>
                            <h4 style={{fontSize: "500%"}}>{totalCalories}/{candyAmount} calories</h4>
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
                            <h7 style={{paddingLeft: '140%', whiteSpace: 'nowrap'}}> {totalCalories} <br/><br/><br/>
                            <h7 style={{paddingLeft: '140%', whiteSpace: 'nowrap'}}>{candyAmount}</h7></h7>
                            {isOverLimit
                                ?<h4 style={{paddingLeft: '110%', paddingBottom: '10px', whiteSpace: 'nowrap', color: 'red'}}>Over Limit!</h4>
                                :<h4 style={{paddingLeft: '110%', paddingBottom: '10px', whiteSpace: 'nowrap'}}>Under Limit!</h4> }
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}