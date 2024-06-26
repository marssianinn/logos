import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function OrdersRadio() {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="call" control={<Radio />} label="Перезвонить" />
                <FormControlLabel value="notCall" control={<Radio />} label="Не перезванивать" />
            </RadioGroup>
        </FormControl>
    );
}
export default OrdersRadio