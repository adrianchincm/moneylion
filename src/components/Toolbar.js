import React from 'react'
import logo from '../images/logo.png'
import LinearProgress from '@material-ui/core/LinearProgress';

const Toolbar = () => {
    return (
        <div class="text-center shadow-lg bg-bgPrimary">
            <img class="pt-4 mx-auto" src={logo} alt="moneylionLogo"/> 
            <div class="mt-4">
                <LinearProgress variant="determinate" value={50} />
            </div>
        </div>
    )
}

export default Toolbar