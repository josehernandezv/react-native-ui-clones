import { Image, StyleSheet, Text, View } from 'react-native';

import { lightGray, white } from './constants';
import { Artist } from './types';

interface ArtistHeaderProps {
    artist: Artist;
    text: string;
}

export default function ArtistHeader({ artist, text }: ArtistHeaderProps) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: artist.avatar }} style={styles.image} />
            <View>
                <Text style={styles.text}>{text}</Text>
                <Text style={styles.artistName}>{artist.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    text: {
        color: lightGray,
        fontSize: 12,
        textTransform: 'uppercase',
    },
    artistName: {
        color: white,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 26,
    },
});
