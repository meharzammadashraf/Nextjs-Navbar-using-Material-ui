import Example from '@/pages/slider/slider'
import { AppBar, Button, Grid, Toolbar, Typography, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'

function Home() {
    const [ apiData, setApiData ] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(response => response.json())
            .then(data => {setApiData(data) 
                console.log("ddddddddd", data)});
    }, []);
    return (
        <>
            <AppBar color=''>
                <Toolbar>
                    <Typography variant='h3' flexGrow={1}>Logo</Typography>
                    <Button variant='text' color='inherit'>About us</Button>
                    <Button variant='text' color='inherit'>Contact us</Button>
                </Toolbar>
            </AppBar>
            {/* <Example /> */}
            {/* <Typography variant="h3">Cards</Typography> */}
            {/* <Grid container spacing={4}>
            {
                    apiData ? apiData.map((e)=>{ return(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Box border={2}>
                            <Box component="img" src={e.image} />
                            <Typography>Name: {e.name}</Typography>
                            <Typography>Profession: {e.profession}</Typography>
                            <Typography>Stack: {e.stack}</Typography>
                            </Box>
                        </Grid>
    )}) : ""
                }
            </Grid> */}
        </>
    )
}

export default Home