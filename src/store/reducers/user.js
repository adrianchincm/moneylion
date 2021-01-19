import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility'

const initialState = {
   user: {
       firstName: '',
       lastName: '',
       email: '',       
   },
   step: null   
}

const saveUserInfo = (state, action) => {    
    return updateObject(state, {    
        user: action.user,                
    });            
}

const saveUserLastStep = (state, action) => {    
    return updateObject(state, {    
        step: action.step,                
    });            
}

const resetState = (state, action) => {    
    return updateObject(state, initialState);            
}

const reducer = (state = initialState, action) => {    
    switch (action.type) {
        case actionTypes.SAVE_USER_INFO: 
            return saveUserInfo(state, action);
        case actionTypes.SAVE_STEP: 
            return saveUserLastStep(state, action);
        case actionTypes.RESET_STATE: 
            return resetState(state, action);
        default: 
            return state    
    }
};

export default reducer;