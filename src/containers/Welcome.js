import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';

const Welcome = ({step}) => {
    const history = useHistory()

    const resumeApplication = () => {
        switch (step) {
            case 1: {
                return history.push('./personal')                
            }
            case 2: {
                return history.push('./dob')                
            }
            case 3: {
                return history.push('./agreement')                
            }
            default: {
                return history.push('./welcome')
            }
        }
    }

    const onApplyClicked = () => {
        if (step) {
            resumeApplication()
        } else {
            history.push('./personal')
        }        
    }

    return (
        <div class="mt-32">
            <p class="text-7xl text-white">Say Hello to MoneyLion!</p>
            <p class="text-2xl mt-4 text-white">Track your spending, get instacash and build your credit!</p>

            <div class="mt-8">
                <Button size="large" variant="contained" color="primary" onClick={() => onApplyClicked()}>
                    {!step && <p class="text-white">Apply now</p>}
                    {step && <p class="text-white">Resume application</p>}
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        step: state.user.step,
    };
}

export default connect(mapStateToProps, null)(Welcome);