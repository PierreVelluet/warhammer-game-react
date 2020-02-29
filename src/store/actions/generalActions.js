import * as actionTypes from './actionTypes';

export const claimReward = () => {
    return { type: actionTypes.CLAIM_REWARDS }
}

export const continueHandler = () => {
    return { type: actionTypes.CONTINUE_HANDLER}
}

export const chooseRewardThenCheckUpdates = (treasure) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CHOOSE_REWARD,
        treasure: treasure,
    });
    dispatch({
        type : actionTypes.LEVEL_AREA_BOSS_UPDATE,
    })
}

export const continueThenCheckUpdates = (treasure) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CONTINUE_HANDLER,
        treasure: treasure,
    });
    dispatch({
        type : actionTypes.LEVEL_AREA_BOSS_UPDATE,
    })
}