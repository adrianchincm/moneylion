import React, { useState, useEffect } from 'react'
import DatePicker from 'react-date-picker'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../store/actions/index'

const DateOfBirth = ({user, setUserInfo, setLastStep}) => {
    const history = useHistory()
    const [value, onChange] = useState(user.dob);

    const onContinueClicked = () => {
        let updatedUser = user
        updatedUser.dob = value
        setUserInfo(updatedUser)
        console.log(value)

        history.push('./agreement')
    }

    useEffect(() => {
        setLastStep(2)
    }, [])

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
                <Button size="large" disabled={!value} variant="contained" color="primary" onClick={() => onContinueClicked()}>
                    <p class="text-white">Continue</p>
                </Button>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        user: state.user.user,
        step: state.step,        
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setUserInfo: (user) => dispatch(actions.saveUserInfo(user)),
        setLastStep: (step) => dispatch(actions.saveUserLastStep(step)),        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DateOfBirth);