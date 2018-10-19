const initialState = [
    'My home playlist',
    'My work playlist'
];

export default function playLists(state = initialState, action) {
    //console.log(action);
    if (action.type === 'ADD_PLAYLIST') {
        return [
            ...state, action.payload
        ];
    } else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
}