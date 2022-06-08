import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { lightGray, white } from './constants';
import { generateSong } from './utils';

const song = generateSong();

export default function Player() {
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <TouchableOpacity
            style={{
                ...styles.container,
                bottom: tabBarHeight,
                backgroundColor: song.color,
            }}
        >
            <Image source={{ uri: song.album.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {song.title}
                </Text>
                <Text style={styles.subtitle}>{song.artist.name}</Text>
            </View>
            <TouchableOpacity>
                <Icon name="cast-audio" size={28} color={lightGray} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <Icon name="play" size={30} color={white} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 16,
        right: 16,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 6,
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 6,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-around',
        height: '100%',
    },
    title: {
        color: white,
    },
    subtitle: {
        color: lightGray,
        fontSize: 12,
    },
    iconButton: {
        marginLeft: 18,
    },
});
