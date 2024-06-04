import * as React from 'react';
import {useState} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function OrdersSelect() {
    const [age, setAge] = useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl  fullWidth >
                <InputLabel id="demo-simple-select-label" style={{color:'white'}}>Ресторан</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="ресторан"
                    onChange={handleChange}
                    style={{color:'white',marginBottom:'20px'}}
                >
                    <MenuItem className='orders__select' value={10}>restoran1</MenuItem>
                    <MenuItem className='orders__select' value={20}>restoran2</MenuItem>
                    <MenuItem className='orders__select' value={30}>restotan3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default OrdersSelect;