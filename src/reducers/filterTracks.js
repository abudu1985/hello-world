const initialState = '';

export default function filterTracks(state = initialState, action) {
    //console.log(action);
    if (action.type === 'FIND_TRACK') {
        return action.payload;
    }
    return state;
}