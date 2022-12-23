import { GET_MUSIC_DATA, SHOW_NO_DATA, SHOW_ERROR, SHOW_LOADER } from '../constants';
import { IMusicDataStateTypes } from '../interfaces';

const initialState: IMusicDataStateTypes = {
    musicData: [],
    noDataError: false,
    error: '',
    loader: false
};

function musicReducer(
    state: IMusicDataStateTypes = initialState,
    action: any): IMusicDataStateTypes {
    switch (action.type) {
        case GET_MUSIC_DATA: {
            return { ...state, musicData: action.musicData };
        }

        case SHOW_NO_DATA: {
            return { ...state, noDataError: action.noDataError };
        }

        case SHOW_ERROR: {
            return { ...state, error: action.error };
        }

        case SHOW_LOADER: {
            return { ...state, loader: action.loader };
        }

        default:
            return state;
    }
}

export default musicReducer;