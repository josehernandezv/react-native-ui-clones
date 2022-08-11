import { Image, StyleSheet, Text, View, FlatList } from 'react-native';

import { darkGray, lightGray, white } from './constants';
import { Playlist } from './types';

export default function RecommendedPlaylist({ items }: { items: Playlist[] }) {
    return (
        <FlatList
            data={items}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.text} numberOfLines={2}>
                        {item.title}
                    </Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
    },
    item: {
        margin: 8,
        width: 120,
    },
    image: {
        width: 120,
        height: 120,
    },
    text: {
        color: lightGray,
        fontSize: 12,
        marginTop: 8,
    },
});
