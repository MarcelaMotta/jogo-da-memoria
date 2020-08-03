const initialState = {
    partidas: [],
}

export default (state = initialState, action) => {
    
    switch(action.type) {
        case 'SET_PARTIDAS':
            return {...state, partidas:action.payload.partidas};
            break;
        }
    return state;
}