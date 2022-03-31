import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { black, gray, white } from './constants';

export default function Header() {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                ...styles.container,
                paddingTop: insets.top,
            }}
        >
            <Image source={require('./assets/logo.png')} style={styles.logo} />
            <View style={styles.actions}>
                <TouchableOpacity style={styles.action}>
                    <Icon name="magnify" size={24} color={black} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <Icon name="facebook-messenger" size={24} color={black} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: white,
    },
    logo: {
        width: 120,
        height: 32,
        resizeMode: 'contain',
    },
    actions: {
        flexDirection: 'row',
    },
    action: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: gray,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
});
