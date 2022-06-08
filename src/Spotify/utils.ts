import { faker } from '@faker-js/faker';

import { Artist, Genre, Playlist, Song } from './types';

export function generateArtist(): Artist {
    return {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
    };
}

export function generatePlaylist(sig: number): Playlist {
    return {
        id: faker.datatype.uuid(),
        title: faker.lorem.sentence(),
        image: `https://source.unsplash.com/random/200×200/?music&sig=${sig}`,
    };
}

export function generateGenre(sig: number): Genre {
    return {
        id: faker.datatype.uuid(),
        name: faker.music.genre(),
        image: `https://source.unsplash.com/random/100×100/?music&sig=${sig}`,
        color: faker.internet.color(),
    };
}

export function generateSong(): Song {
    return {
        id: faker.datatype.uuid(),
        title: faker.music.songName(),
        artist: generateArtist(),
        color: faker.internet.color(),
        album: {
            image: 'https://source.unsplash.com/random/100×100/?music',
            title: faker.lorem.sentence(),
        },
    };
}

export function generatePlaylists(count: number = 20): Playlist[] {
    const playlists: Playlist[] = [];

    for (let i = 0; i < count; i++) {
        playlists.push(generatePlaylist(i));
    }

    return playlists;
}

export function generateGenres(count: number = 20): Genre[] {
    const genres: Genre[] = [];

    for (let i = 0; i < count; i++) {
        genres.push(generateGenre(i));
    }

    return genres;
}
