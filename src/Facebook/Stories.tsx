import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    Image,
    ImageBackground,
    View,
    TouchableOpacity,
} from 'react-native';

import Avatar from './Avatar';
import Tabs from './Tabs';
import { black, blue, gray, lightGray, white } from './constants';
import { UserContext } from './userContext';
import { generateStories } from './utils';

export default function Stories() {
    const storyList = generateStories();
    const user = useContext(UserContext);
    return (
        <>
            <View style={styles.header}>
                <Tabs
                    options={['Stories', 'Reels', 'Rooms']}
                    tabStyle={styles.tab}
                />
            </View>
            <View style={styles.storiesWrapper}>
                <FlatList
                    horizontal
                    data={storyList}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.storiesContainer}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={styles.story}>
                            <Image
                                source={{ uri: user.avatar }}
                                style={styles.profileImage}
                            />
                            <View style={styles.createStory}>
                                <TouchableOpacity
                                    style={styles.createStoryButton}
                                >
                                    <Icon name="plus" size={32} color={blue} />
                                </TouchableOpacity>
                                <Text style={styles.createStoryText}>
                                    Create Story
                                </Text>
                            </View>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <ImageBackground
                            source={{ uri: item.image }}
                            style={styles.story}
                        >
                            <LinearGradient
                                colors={['transparent', 'rgba(0, 0, 0, 0.4)']}
                                style={styles.storyContent}
                            >
                                <Avatar
                                    uri={item.avatar}
                                    style={styles.avatar}
                                    size={40}
                                />
                                <Text style={styles.text}>
                                    {item.user.name}
                                </Text>
                            </LinearGradient>
                        </ImageBackground>
                    )}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 12,
        backgroundColor: white,
        paddingHorizontal: 16,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
    },
    storiesWrapper: {
        backgroundColor: lightGray,
    },
    storiesContainer: {
        padding: 16,
    },
    story: {
        width: 100,
        height: 160,
        borderRadius: 12,
        overflow: 'hidden',
        marginRight: 12,
        borderWidth: 0.5,
        borderColor: gray,
    },
    storyContent: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 8,
    },
    text: {
        color: white,
        fontWeight: '500',
    },
    avatar: {
        borderWidth: 3,
        borderColor: blue,
        position: 'absolute',
        top: 4,
        left: 4,
    },
    profileImage: {
        flex: 1,
    },
    createStory: {
        backgroundColor: white,
        justifyContent: 'flex-end',
        padding: 20,
        paddingBottom: 8,
        alignItems: 'center',
    },
    createStoryButton: {
        position: 'absolute',
        top: -16,
        backgroundColor: white,
        borderRadius: 32,
    },
    createStoryText: {
        color: black,
        fontWeight: '500',
        textAlign: 'center',
    },
});
