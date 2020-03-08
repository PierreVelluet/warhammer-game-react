import * as actionTypes from './actionTypes';

export const choosePlanet = (area) => {
    return {
        type: actionTypes.CHOOSE_PLANET,
        area: area,
    }
}

export const claimReward = () => {
    return { type: actionTypes.CLAIM_REWARDS }
}

export const continueHandler = () => {
    return { type: actionTypes.CONTINUE_HANDLER}
}; 

export const revealHandler = () => {
    return { type: actionTypes.REVEAL_HANDLER}
};

export const switchInventory = (whichInventory) => {
    return {
        type: actionTypes.SWITCH_INVENTORY,
        whichInventory: whichInventory,
    };
};

export const rollAttackDice = () => {
    return {
        type: actionTypes.ROLL_ATTACK_DICE,
    };
};

export const rollRetaliationDice = () => {
    return {
        type: actionTypes.ROLL_RETALIATION_DICE,
    };
};

export const setIntialStats = (champ) => {
    return {
        type: actionTypes.SET_INITIAL_STATS,
        champ: champ,
    };
};

export const chooseMonster = (monster) => {
    return {
        type: actionTypes.CHOOSE_MONSTER,
        monster: monster,
    };
};

export const chooseReward = (treasure) => {
    return {
        type: actionTypes.CHOOSE_REWARD,
        treasure: treasure,
    };
};

export const closeMerchant = () => {
    return { type: actionTypes.CLOSE_MERCHANT}
};

export const showMerchant = () => {
    return { type: actionTypes.SHOW_MERCHANT}
};

export const chooseRewardThenCheckUpdates = (treasure) => (dispatch, getState) => {
    console.log(getState())
    dispatch({
        type: actionTypes.CHOOSE_REWARD,
        treasure: treasure,
    });
    dispatch({
        type : actionTypes.LEVEL_AREA_BOSS_UPDATE,
    })
};

export const continueThenCheckUpdates = (treasure) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CONTINUE_HANDLER,
        treasure: treasure,
    });
    dispatch({
        type : actionTypes.LEVEL_AREA_BOSS_UPDATE,
    })
};