import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const SignupSuccess = () => {
    const history = useHistory()

    const onAgreeAndCreateClicked = () => {        
        history.push('./welcome')           
    }

    return (
        <div class="mt-32 w-500px text-left mx-auto text-center">
            <p class="text-7xl">You have signed up successfully!</p>

            <div class="mt-8">
                <Button size="large" 
                    variant="contained" 
                    color="primary" 
                    onClick={() => onAgreeAndCreateClicked()}                    
                    >
                    <p class="text-white">Back to welcome page</p>
                </Button>    
            </div>
            
        </div>
    )
}

export default SignupSuccess