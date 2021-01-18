import * as actionTypes from './actionTypes'

export const saveUserInfo = (user) => {
    return {
        type: actionTypes.SAVE_USER_INFO,
        user
    };
}

export const saveUserLastStep = (step) => {
    return {
        type: actionTypes.SAVE_STEP,
        step
    };
}

