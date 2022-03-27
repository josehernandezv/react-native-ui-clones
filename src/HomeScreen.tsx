import { Entypo as Icon } from '@expo/vector-icons';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import type { HomeProps } from './MainNavigator';
import { clones } from './clones';

export default function HomeScreen({ navigation }: HomeProps) {
    return (
        <FlatList
            data={clones}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.row}
                    onPress={() => navigation.navigate(item.screen)}
                >
                    <Icon name={item.icon} color={item.color} size={32} />
                    <Text style={styles.title}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        paddingHorizontal: 32,
        backgroundColor: 'white',
    },
    title: {
        marginLeft: 24,
        fontSize: 24,
        lineHeight: 32,
    },
    separator: {
        color: '#CCC',
        height: 1,
    },
});
