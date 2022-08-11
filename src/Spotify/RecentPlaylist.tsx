import { Image, StyleSheet, Text, View } from 'react-native';

import { darkGray, white } from './constants';
import { Playlist } from './types';

export default function RecentPlaylist({ items }: { items: Playlist[] }) {
    return (
        <View style={styles.container}>
            {items.map(item => (
                <View style={styles.item} key={item.id}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.text} numberOfLines={1}>
                        {item.title}
                    </Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    item: {
        width: '49%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: darkGray,
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 8,
    },
    image: {
        width: 50,
        height: 50,
    },
    text: {
        color: white,
        marginHorizontal: 8,
        fontWeight: '500',
        flex: 1,
    },
});
