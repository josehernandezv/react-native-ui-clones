import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import { black } from '../Facebook/constants';
import { Pin as IPin } from './types';

const width = Dimensions.get('window').width / 2 - 18;

export default function Pin({ pin }: { pin: IPin }) {
    const [height, setHeight] = useState(width);

    useEffect(() => {
        Image.getSize(
            pin.image,
            (sourceWidth, sourceHeight) => {
                setHeight(sourceHeight * (width / sourceWidth));
            },
            () => setHeight(width)
        );
    }, [width, pin]);
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: pin.image }}
                style={{
                    ...styles.image,
                    width,
                    height,
                }}
            />
            <View style={styles.row}>
                <Text numberOfLines={2} style={styles.text}>
                    {pin.title}
                </Text>
                <Icon name="dots-horizontal" size={26} color={black} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 6,
        marginBottom: 24,
    },
    image: {
        borderRadius: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 6,
    },
    text: {
        flex: 1,
        color: black,
        fontWeight: '500',
        paddingRight: 12,
    },
});
