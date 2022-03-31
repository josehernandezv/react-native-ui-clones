import Icon from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

import Avatar from './Avatar';
import { black, green, white } from './constants';
import { UserContext } from './userContext';

export default function NewPostInput() {
    const user = useContext(UserContext);
    return (
        <View style={styles.container}>
            <Avatar uri={user.avatar} />
            <TextInput
                style={styles.input}
                placeholder="What's on your mind?"
                placeholderTextColor={black}
            />
            <TouchableOpacity>
                <Icon name="md-images" size={24} color={green} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: white,
    },
    input: {
        flex: 1,
        paddingHorizontal: 8,
    },
});
