import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Input from '@material-ui/core/Input';

const Personal = (props) => {
    const history = useHistory()
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [enableButton, setEnableButton] = useState(false)

    useEffect(() => {
        validate()
    }, [firstName, lastName, email])

    const validate = () => {
        console.log("VALIDATE")     
        const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email.match(mailformat) && firstName.length > 0 && lastName > 0) {
            setEnableButton(true)
        } else {
            setEnableButton(false)
        }                
    }

    const onContinueClicked = () => {
        history.push('./dob')
    }

    const firstNameOnChanged = text => event => {             
        setFirstname(event.target.value)
    }

    const lastNameOnChanged = text => event => {            
        setLastname(event.target.value)
    }

    const emailNameOnChanged = text => event => {    
        setEmail(event.target.value)
    }

    return (
        <div class="mt-32 w-500px mx-auto">            
            <p class="text-2xl mt-4 text-white">Create your account</p>

            <div class="flex flex-col text-left mt-4">                
                <p class="mt-4">First name</p>
                <Input onChange={firstNameOnChanged('inputText')} label="First Name"/>

                <p class="mt-4">Last name</p>
                <Input onChange={lastNameOnChanged('inputText')} label="Last Name"/>

                <p class="mt-4">Email</p>
                <Input onChange={emailNameOnChanged('inputText')} label="Email"/>                
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

export default Personal