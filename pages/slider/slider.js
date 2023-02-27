import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box } from '@mui/material'

export default function Example(props)
{
    const [ apiData, setApiData ] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(response => response.json())
            .then(data => setApiData(data));
    }, []);

    return (
        <Carousel>
            {
                apiData ? apiData.map( (item, i) => <Item key={i} item={item}  /> ) : ""
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper sx={{pt: 8}}>
            {/* <Box component="img" src={props.item.image} sx={{width: 1, height: 350}}></Box> */}
            <Paper sx={{backgroundImage: `url(${props.item.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", py: 20}}>
            <h2>{props.item.name}</h2>
            </Paper>

        </Paper>
    )
}