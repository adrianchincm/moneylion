import React, {useState, useEffect} from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import axios from '../shared/axios'
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../store/actions/index'

const Agreement = ({user, resetState, setLastStep}) => {
    const history = useHistory()
    const [agreementOneChecked, setAgreementOneChecked] = useState(false)
    const [agreementTwoChecked, setAgreementTwoChecked] = useState(false)
    const [enableButton, setEnableButton] = useState(false)

    useEffect(() => {
        setLastStep(3)
        validate()
    }, [agreementOneChecked, agreementTwoChecked])

    const validate = () => {            
        if(agreementOneChecked && agreementTwoChecked) {
            setEnableButton(true)
        } else {
            setEnableButton(false)
        }                
    }

    const handleChangeAgreementOne = (event) => {
        setAgreementOneChecked(event.target.checked);
    };

    const handleChangeAgreementTwo = (event) => {
        setAgreementTwoChecked(event.target.checked);
    };

    const onAgreeAndCreateClicked = () => {
        const userObj = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            agreement1: agreementOneChecked,
            agreement2: agreementTwoChecked
        } 

        axios.post('user', userObj).then(response => {            
            if (response.data.success) {
                resetState()

                history.push('./success')
            }            
        })
    }

    return (
        <div class="mt-32 w-500px text-left mx-auto">
            <p class="text-7xl">One last step!</p>
            <p class="text-xl mt-12 pl-4">Agreement</p>

            <div class="flex items-start mt-8">            
                <Checkbox
                    checked={agreementOneChecked}
                    onChange={handleChangeAgreementOne}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <div>
                    <p>I agree to the </p>
                    <a class="text-blue" href="https://www.google.com">Electronic Transaction Esign Consent</a>
                </div>                                
            </div>

            <div class="flex items-start mt-8">            
                <Checkbox
                    checked={agreementTwoChecked}
                    onChange={handleChangeAgreementTwo}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <div>
                    <p>I agree to the following agreements :</p>
                    <div class="flex flex-col">
                        <a class="text-blue" href="https://www.google.com">Privacy Notice</a>
                        <a class="text-blue" href="https://www.google.com">Terms and Condition</a>
                        <a class="text-blue" href="https://www.google.com">Membership Agreement</a>
                    </div>                    
                </div>                                
            </div>

            <div class="mt-8 text-center">
                <Button size="large" 
                    variant="contained" 
                    color="primary" 
                    onClick={() => onAgreeAndCreateClicked()}
                    disabled={!enableButton}
                    >
                    <p class="text-white">Agree and Create account</p>
                </Button>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user        
    };
}

const mapDispatchToProps = dispatch => {
    return {        
        setLastStep: (step) => dispatch(actions.saveUserLastStep(step)),
        resetState: () => dispatch(actions.resetState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Agreement);