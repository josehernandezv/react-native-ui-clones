import { Image, StyleSheet, Text, View } from 'react-native';

import { white } from './constants';
import { Genre } from './types';

interface GenresListProps {
    title: string;
    items: Genre[];
}
export default function GenresList({ title, items }: GenresListProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.items}>
                {items.map(item => (
                    <View
                        style={{ ...styles.item, backgroundColor: item.color }}
                        key={item.id}
                    >
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.itemImage}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        color: white,
        fontWeight: '600',
        marginBottom: 24,
    },
    items: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    item: {
        width: '48%',
        height: 100,
        flexDirection: 'row',
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 16,
        padding: 16,
    },
    itemText: {
        color: white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemImage: {
        height: 80,
        width: 80,
        position: 'absolute',
        transform: [{ rotate: '30deg' }],
        bottom: -10,
        right: -10,
    },
});
