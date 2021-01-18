import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const Welcome = (props) => {
    const history = useHistory()

    const onApplyClicked = () => {
        history.push('./personal')
    }

    return (
        <div class="mt-32">
            <p class="text-7xl text-white">Say Hello to MoneyLion!</p>
            <p class="text-2xl mt-4 text-white">Track your spending, get instacash and build your credit!</p>

            <div class="mt-8">
                <Button size="large" variant="contained" color="primary" onClick={() => onApplyClicked()}>
                    <p class="text-white">Apply now</p>
                </Button>
            </div>
        </div>
    )
}

export default Welcome