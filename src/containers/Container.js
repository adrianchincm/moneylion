import React, {useState, useEffect} from 'react'
import Welcome from './Welcome'
import Toolbar from '../components/Toolbar';
import { useHistory } from "react-router-dom";
import Personal from './Personal';

const Container = () => {
    const history = useHistory()
    
    const componentRouter = () => {     
        switch(history.location.pathname) {            
            case '/welcome': {                
                return (                    
                    <Welcome />                   
                    // <div class="text-white">WELCOME</div>
                ) 
            }            
            case '/personal': {
                return (                
                    <Personal />
                    // <div>PERSONAL</div>
                )
            }
            case '/dob': {
                return (                                    
                    // <DateOfBirth />
                    <div>DATE OF BIRTH</div>
                )
            }
            case '/agreement': {
                return (                                    
                    // <Agreement />
                    <div>AGREEMENT</div>
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