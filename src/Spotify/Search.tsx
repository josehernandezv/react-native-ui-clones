import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import GenresList from './GenresList';
import Player from './Player';
import { black, white } from './constants';
import { generateGenres } from './utils';

export default function Search() {
    const insets = useSafeAreaInsets();
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <View style={styles.container}>
            <Player />
            <ScrollView
                contentContainerStyle={{
                    paddingTop: insets.top,
                    paddingBottom: tabBarHeight,
                }}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>Search</Text>
                    <TouchableOpacity>
                        <Icon name="camera-outline" size={30} color={white} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.searchButton}>
                    <Icon name="magnify" size={30} color={black} />
                    <Text style={styles.placeholder}>
                        Artist, songs, or podcasts
                    </Text>
                </TouchableOpacity>
                <GenresList title="Your top genres" items={generateGenres(4)} />
                <GenresList title="Browse all" items={generateGenres()} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: white,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    searchButton: {
        backgroundColor: white,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        marginHorizontal: 16,
        marginBottom: 24,
        padding: 8,
    },
    placeholder: {
        marginLeft: 8,
    },
});
