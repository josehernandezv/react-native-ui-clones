import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Buttons from './Buttons';
import Filters from './Filters';
import NewPostInput from './NewPostInput';
import PostCard from './PostCard';
import Stories from './Stories';
import { gray, white } from './constants';
import { generatePosts } from './utils';

const posts = generatePosts();

export default function Home() {
    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.postsContainer}
                ListHeaderComponent={
                    <>
                        <Filters />
                        <NewPostInput />
                        <Buttons />
                        <Stories />
                    </>
                }
                data={posts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <PostCard post={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    postsContainer: {
        backgroundColor: gray,
    },
});
