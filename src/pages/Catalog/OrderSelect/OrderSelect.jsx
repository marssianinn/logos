import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function OrderSelect({order,setOrder}) {
    const handleChange = (e) => {
        setOrder(e.target.value)
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-controlled-open-select-label">Порядок</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={order}
                    className='catalog__aside-select'
                    label="Категория"
                    onChange={handleChange}
                >
                    <MenuItem className='catalog__aside-item'  value="all">По умолчанию</MenuItem>
                    <MenuItem className='catalog__aside-item'  value="desc">По убыванию</MenuItem>
                    <MenuItem className='catalog__aside-item'  value="asc">По возрастанию</MenuItem>
                    <MenuItem className='catalog__aside-item'  value="abc">По алфавиту</MenuItem>
                    <MenuItem className='catalog__aside-item'  value="weight">По весу</MenuItem>
                    <MenuItem className='catalog__aside-item'  value="calories">По калорийности</MenuItem>

                </Select>
            </FormControl>
        </div>
    );
}
export default OrderSelect