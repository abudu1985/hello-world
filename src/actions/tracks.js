export const getTracks = () => {
    return dispatch => {
        setTimeout(() => {
            console.log('I got tracks');
            dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: [] });
        }, 2000)
    }
};