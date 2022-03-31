import { faker } from '@faker-js/faker';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface AvatarProps {
    size?: number;
    style?: StyleProp<ImageStyle>;
    uri?: string;
}

export default function Avatar({
    size = 50,
    style,
    uri = faker.image.avatar(),
}: AvatarProps) {
    const styles: StyleProp<ImageStyle> = [
        {
            width: size,
            height: size,
            borderRadius: size / 2,
        },
    ];
    if (style) styles.push(style);
    return <Image source={{ uri }} style={styles} />;
}
