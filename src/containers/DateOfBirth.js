import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const DateOfBirth = () => {
    const history = useHistory()
    const [value, onChange] = useState(new Date());

    const onContinueClicked = () => {
        history.push('./agreement')
    }

    return (
        <div class="mt-32 w-500px text-left mx-auto">
            <p class="text-4xl">What's your date of birth?</p>
            <p class="text-2xl mt-8">Your birthday</p>
            <div class="mt-4">
                <DatePicker
                    onChange={onChange}
                    value={value}
                />
            </div>
            <p class="text-textgray mt-2">MM/DD/YYYY</p>

            <div class="mt-8">
                <Button size="large" variant="contained" color="primary" onClick={() => onContinueClicked()}>
                    <p class="text-white">Continue</p>
                </Button>
            </div>
        </div>
    )
}

export default DateOfBirth