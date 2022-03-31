import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import type { ComponentProps } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { blue, lightGray, white } from './constants';

const buttons: {
    name: string;
    icon: ComponentProps<typeof Icon>['name'];
    color: string;
}[] = [
    { name: 'Reel', icon: 'movie', color: '#F36B7E' },
    { name: 'Room', icon: 'video-plus', color: '#7251A2' },
    { name: 'Group', icon: 'account-group', color: blue },
    { name: 'Live', icon: 'video', color: '#E04D60' },
];

export default function Buttons() {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                contentContainerStyle={styles.buttonsContainer}
                data={buttons}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.button}>
                        <Icon name={item.icon} size={24} color={item.color} />
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightGray,
        width: '100%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
        paddingHorizontal: 8,
        borderRadius: 999,
        backgroundColor: white,
    },
    text: {
        marginLeft: 4,
        fontWeight: '500',
    },
    separator: {
        width: 12,
    },
});
