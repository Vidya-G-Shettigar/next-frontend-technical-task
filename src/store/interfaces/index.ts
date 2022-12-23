export interface IMusicData {
    wrapperType: string;
    kind: string;
    artistId: number;
    collectionId: number;
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    collectionCensoredName: string;
    trackCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    trackViewUrl: string;
    previewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    trackPrice: number;
    releaseDate: string;
    collectionExplicitness: string;
    trackExplicitness: string;
    discCount: number;
    discNumber: number;
    trackCount: number;
    trackNumber: number;
    trackTimeMillis: number;
    country: string;
    currency: string;
    primaryGenreName: string;
    isStreamable: boolean;
}

export interface IMusicDataActionTypes {
    type: string;
    musicData: IMusicData[];
}

export interface IShowNoDataActionTypes {
    type: string;
    noDataError: boolean;
}

export interface IShowErrorActionTypes {
    type: string;
    error: boolean;
}

export interface IShowLoaderActionTypes {
    type: string;
    loader: boolean;
}

export interface IMusicDataStateTypes {
    musicData: IMusicData[];
    noDataError: boolean;
    error: string;
    loader: boolean;
}
