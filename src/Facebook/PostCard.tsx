import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Avatar from './Avatar';
import { black, darkGray, gray, white } from './constants';
import { Post } from './types';
import { UserContext } from './userContext';

const formatter = Intl.NumberFormat('en', { notation: 'compact' });

export default function PostCard({ post }: { post: Post }) {
    const user = useContext(UserContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Avatar
                    size={40}
                    uri={post.user.avatar}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.username}>{post.user.name}</Text>
                    <View style={styles.headerDetail}>
                        <Text style={styles.date}>{post.date}</Text>
                        <Icon name="earth" size={12} color={darkGray} />
                    </View>
                </View>
                <View style={styles.headerActions}>
                    <TouchableOpacity>
                        <Icon
                            name="dots-horizontal"
                            size={24}
                            color={darkGray}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerAction}>
                        <Icon name="close" size={24} color={darkGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>{post.content}</Text>
            </View>
            <Image source={{ uri: post.image }} style={styles.image} />
            <View style={styles.footer}>
                <View style={styles.reactions}>
                    <View style={styles.reaction}>
                        {post.reactions.map((reaction, index) => (
                            <Image
                                source={reaction}
                                style={styles.emoji}
                                key={index}
                            />
                        ))}
                        <Text style={styles.reactionText}>
                            {formatter.format(post.likes)}
                        </Text>
                    </View>
                    <View style={styles.reaction}>
                        <Text style={styles.reactionText}>
                            {formatter.format(post.comments)} Comments
                        </Text>
                    </View>
                    <View style={styles.reaction}>
                        <Text style={styles.reactionText}>
                            {formatter.format(post.shares)} Shares
                        </Text>
                        <Avatar
                            size={20}
                            uri={user.avatar}
                            style={styles.shareAvatar}
                        />
                        <Icon name="menu-down" color={darkGray} size={24} />
                    </View>
                </View>
                <View style={styles.footerActions}>
                    <TouchableOpacity style={styles.footerAction}>
                        <Icon
                            name="thumb-up-outline"
                            size={24}
                            color={darkGray}
                        />
                        <Text style={styles.actionText}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerAction}>
                        <Icon
                            name="comment-outline"
                            size={24}
                            color={darkGray}
                        />
                        <Text style={styles.actionText}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerAction}>
                        <Icon name="share-outline" size={24} color={darkGray} />
                        <Text style={styles.actionText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        marginTop: 12,
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: 'center',
    },
    avatar: {
        marginRight: 12,
    },
    username: {
        fontWeight: '600',
        color: black,
    },
    headerDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 4,
    },
    date: {
        fontSize: 12,
        color: darkGray,
        marginRight: 4,
    },
    headerActions: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },
    headerAction: {
        marginLeft: 12,
    },
    content: {
        paddingHorizontal: 16,
        paddingBottom: 12,
    },
    contentText: {
        color: black,
    },
    image: {
        width: '100%',
        height: 250,
    },
    footer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    reactions: {
        flexDirection: 'row',
        borderBottomWidth: 0.4,
        borderBottomColor: gray,
        paddingBottom: 8,
        justifyContent: 'space-between',
    },
    reaction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        width: 20,
        height: 20,
        marginRight: 4,
    },
    reactionText: {
        color: darkGray,
    },
    shareAvatar: {
        marginLeft: 4,
    },
    footerActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
    },
    footerAction: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionText: {
        color: darkGray,
        marginLeft: 4,
        fontWeight: '600',
    },
});
