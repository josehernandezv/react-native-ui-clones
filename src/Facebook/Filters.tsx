import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Tabs from './Tabs';
import { darkGray, gray, white } from './constants';

export default function Filters() {
    return (
        <View style={styles.container}>
            <Tabs options={['Your Feed', 'Favorites', 'Recent']} />
            <TouchableOpacity>
                <Icon name="tune" size={24} color={darkGray} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: gray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
});
