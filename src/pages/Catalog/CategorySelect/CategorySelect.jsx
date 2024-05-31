import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import {menuData} from "../../../utils/menuData";
import {useNavigate} from "react-router-dom";

export default function CategorySelect() {
    const navigate = useNavigate()
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (e) => {
        navigate(`/catalog/${e.target.value}`)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-controlled-open-select-label">Категория</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    className='catalog__aside-select'
                    label="Категория"
                    onChange={handleChange}
                >
                    <MenuItem className='catalog__aside-item'  value="all">Все категории</MenuItem>
                    {menuData.map((item) => (
                        <MenuItem className='catalog__aside-item' key={item.en} value={item.en}>{item.ru}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}