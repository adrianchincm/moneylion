import React, {useState, useEffect} from 'react'
import Welcome from './Welcome'
import Toolbar from '../components/Toolbar';
import { useHistory } from "react-router-dom";
import Personal from './Personal';
import DateOfBirth from './DateOfBirth';
import Agreement from './Agreement';
import SignupSuccess from './SignupSuccess';

const Container = () => {
    const history = useHistory()
    
    const componentRouter = () => {     
        switch(history.location.pathname) {            
            case '/welcome': {                
                return (                    
                    <Welcome />                                       
                ) 
            }            
            case '/personal': {
                return (                
                    <Personal />                    
                )
            }
            case '/dob': {
                return (                                    
                    <DateOfBirth />                    
                )
            }
            case '/agreement': {
                return (                                    
                    <Agreement />                    
                )
            }
            case '/success': {
                return (                                    
                    <SignupSuccess />                    
                )
            }
            default: return
        }        
    }

    return (
        <div>
            <Toolbar pathname={history.location.pathname}/>            
            {componentRouter()}                        
        </div>
    )
}

export default Container