import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import debounce from "@material-ui/core/utils/debounce";

function TitleSearch({title,setTitle}) {
    const handleChange = (e)=>{
        setTitle(e.target.value)
    }
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField defaultValue={title} onChange={debounce(handleChange,500)} className='catalog__aside-select' id="outlined-basic" label="Название" variant="outlined" />
        </Box>
    );
}
export default TitleSearch