import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Input from '@material-ui/core/Input';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index'

const Personal = ({user, setUserInfo, setLastStep}) => {
    const history = useHistory()
    const [inputFirstName, setFirstname] = useState(user.firstName || '')
    const [inputLastName, setLastname] = useState(user.lastName || '')
    const [inputEmail, setEmail] = useState(user.email || '')
    const [enableButton, setEnableButton] = useState(false)

    useEffect(() => {
        console.log(user)        
        validate()
    }, [inputFirstName, inputLastName, inputEmail])
    
    useEffect(() => {
        setLastStep(1)
    }, [])

    const validate = () => {
        console.log("VALIDATE")     
        const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(inputEmail.match(mailformat) && inputFirstName.length > 0 && inputLastName.length > 0) {
            setEnableButton(true)
        } else {
            console.log("VALIDATE EMAIL", inputEmail.match(mailformat))
            setEnableButton(false)
        }                
    }

    const onContinueClicked = () => {
        let user = {
            firstName: inputFirstName,
            lastName: inputLastName,
            email: inputEmail
        }

        setUserInfo(user)
        
        history.push('./dob')
    }

    const firstNameOnChanged = text => event => {
        console.log("FIRSTNAME ")                  
        setFirstname(event.target.value)
    }

    const lastNameOnChanged = text => event => {   
        console.log("LASTNAME ")                           
        setLastname(event.target.value)
    }

    const emailNameOnChanged = text => event => {    
        console.log("EMAIL ")
        setEmail(event.target.value)
    }

    return (
        <div class="mt-32 w-500px mx-auto">            
            <p class="text-2xl mt-4 text-white">Create your account</p>

            <div class="flex flex-col text-left mt-4">                
                <p class="mt-4">First name</p>
                <Input value={inputFirstName} onChange={firstNameOnChanged('inputText')} label="First Name"/>

                <p class="mt-4">Last name</p>
                <Input value={inputLastName} onChange={lastNameOnChanged('inputText')} label="Last Name"/>

                <p class="mt-4">Email</p>
                <Input value={inputEmail} onChange={emailNameOnChanged('inputText')} label="Email"/>                
            </div>
            

            <div class="mt-8">
                <Button size="large"
                    variant="contained" 
                    color="primary"
                    disabled={!enableButton} 
                    onClick={() => onContinueClicked()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Personal);