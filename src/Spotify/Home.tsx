import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ArtistHeader from './ArtistHeader';
import Player from './Player';
import RecentPlaylist from './RecentPlaylist';
import RecommendedPlaylist from './RecommendedPlaylist';
import { white } from './constants';
import { generateArtist, generatePlaylists } from './utils';

export default function Home() {
    const insets = useSafeAreaInsets();
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#46b7b9cc', 'transparent']}
                style={styles.background}
                start={{ x: 0.2, y: 0 }}
            />
            <Player />
            <ScrollView
                contentContainerStyle={{
                    paddingTop: insets.top,
                    paddingBottom: tabBarHeight,
                }}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>Good afternoon</Text>
                    <TouchableOpacity>
                        <Icon name="bell-outline" size={30} color={white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="history" size={30} color={white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="cog-outline" size={30} color={white} />
                    </TouchableOpacity>
                </View>
                <RecentPlaylist items={generatePlaylists(6)} />
                <View style={styles.header}>
                    <Text style={styles.title}>Made for you</Text>
                </View>
                <RecommendedPlaylist items={generatePlaylists()} />
                <View style={styles.header}>
                    <Text style={styles.title}>Popular playlist</Text>
                </View>
                <RecommendedPlaylist items={generatePlaylists()} />
                <View style={styles.header}>
                    <Text style={styles.title}>Made for you</Text>
                </View>
                <RecommendedPlaylist items={generatePlaylists()} />
                <ArtistHeader
                    text="Discover more from"
                    artist={generateArtist()}
                />
                <RecommendedPlaylist items={generatePlaylists()} />
                <View style={styles.header}>
                    <Text style={styles.title}>Popular playlist</Text>
                </View>
                <RecommendedPlaylist items={generatePlaylists()} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 300,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: white,
        flex: 1,
    },
    iconButton: {
        marginLeft: 16,
    },
});
