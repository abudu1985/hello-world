import { combineReducers } from 'redux';
import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks'
import items from './items'


export default combineReducers({
    tracks, playlists, filterTracks, items
})