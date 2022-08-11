export interface Artist {
    id: string;
    avatar: string;
    name: string;
}

export interface Playlist {
    id: string;
    title: string;
    image: string;
}

export interface Genre {
    id: string;
    name: string;
    image: string;
    color: string;
}

export interface Song {
    id: string;
    title: string;
    color: string;
    artist: Artist;
    album: {
        image: string;
        title: string;
    };
}
