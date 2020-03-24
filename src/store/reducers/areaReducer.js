import * as actionTypes from '../actions/actionTypes';

const initialState = {

    space: null,
    desert: null,
    jungle: null,
    iceland: null,

}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case actionTypes.GET_AREAS:
            
            return {
                ...state,
                space: action.areas[0],
                desert: action.areas[1],
                jungle: action.areas[2],
                iceland: action.areas[3]
                
            }

        default: return state
    }
}

export default reducer;