import { Dispatch } from 'redux';

import { GET_MUSIC_DATA, SHOW_NO_DATA, SHOW_ERROR, SHOW_LOADER } from '../constants';
import {
    IMusicData,
    IMusicDataActionTypes,
    IShowNoDataActionTypes,
    IShowErrorActionTypes,
    IShowLoaderActionTypes
} from '../interfaces';

export function getMusicAction(musicData: IMusicData[]): IMusicDataActionTypes {
    return { type: GET_MUSIC_DATA, musicData };
}

export function showNoDataAction(noDataError: boolean): IShowNoDataActionTypes {
    return { type: SHOW_NO_DATA, noDataError };
}

export function showErrorAction(error: boolean): IShowErrorActionTypes {
    return { type: SHOW_ERROR, error };
}

export function showLoaderAction(loader: boolean): IShowLoaderActionTypes {
    return { type: SHOW_LOADER, loader };
}

// to fetch api data
export const getMusicData = (artistName: string) => (dispatch: Dispatch<any>) => {
    const baseURL: string = 'https://itunes.apple.com/search';
    dispatch(showLoaderAction(true));
    fetch(
        baseURL +
        "?term=" +
        artistName +
        "&limit=200",
        {
            method: "GET"
        }
    )
        .then(res => res.json())
        .then(data => {
            dispatch(showLoaderAction(false));
            if (data.results.length) dispatch(showNoDataAction(false));
            else dispatch(showNoDataAction(true));
            return dispatch(getMusicAction(data.results));
        })
        .catch(err => {
            dispatch(showLoaderAction(false));
            dispatch(showErrorAction(err.message));
        });
};
