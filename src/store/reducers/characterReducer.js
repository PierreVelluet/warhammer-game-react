import * as actionTypes from '../actions/actionTypes';

const initialState = {
    champion: []
   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PLANET:

            return {
                ...state,
                champion: action.champs
            }

        default: return state;
    }

}

export default reducer;