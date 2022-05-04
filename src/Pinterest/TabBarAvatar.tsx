import { useContext } from 'react';
import { Image, ImageStyle, StyleProp, View, ViewStyle } from 'react-native';

import { black, white } from './constants';
import { UserContext } from './userContext';

interface TabBarAvatarProps {
    size?: number;
    focused: boolean;
}

export default function TabBarAvatar({
    size = 50,
    focused,
}: TabBarAvatarProps) {
    const user = useContext(UserContext);
    const imageStyles: StyleProp<ImageStyle> = [
        {
            width: size,
            height: size,
            borderRadius: size / 2,
        },
    ];
    const viewStyles: StyleProp<ViewStyle> = [];

    if (focused) {
        const viewSize = size + 4;
        viewStyles.push({
            width: viewSize,
            height: viewSize,
            borderRadius: viewSize / 2,
            backgroundColor: black,
            justifyContent: 'center',
            alignItems: 'center',
        });
        imageStyles.push({
            borderWidth: 2,
            borderColor: white,
        });
    }
    return (
        <View style={viewStyles}>
            <Image source={{ uri: user.avatar }} style={imageStyles} />
        </View>
    );
}
