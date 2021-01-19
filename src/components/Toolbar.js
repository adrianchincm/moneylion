import React from 'react'
import logo from '../images/logo.png'
import LinearProgress from '@material-ui/core/LinearProgress';
import {connect} from 'react-redux';

const Toolbar = ({step}) => {
    return (
        <div class="text-center shadow-lg bg-bgPrimary">
            <img class="pt-4 mx-auto" src={logo} alt="moneylionLogo"/> 
            <div class="mt-4"> 
                {!step && <LinearProgress variant="determinate" value={0} />}
                {step && <LinearProgress variant="determinate" value={step/3 * 100} />}                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        step: state.user.step,
    };
}

export default connect(mapStateToProps, null)(Toolbar);