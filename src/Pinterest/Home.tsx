import MasonryList from '@react-native-seoul/masonry-list';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Categories from './Categories';
import Pin from './Pin';
import { lightGray } from './constants';
import { generatePins } from './utils';

const categories = [
    'For you',
    'Animals',
    'Nature',
    'Tech',
    'Arch',
    'Food',
    'Travel',
    'Culture',
    'Sports',
];

export default function Home() {
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const insets = useSafeAreaInsets();

    return (
        <View style={{ ...styles.container, paddingTop: insets.top }}>
            <Categories
                categories={categories}
                currentCategory={currentCategory}
                onCategoryPress={setCurrentCategory}
            />
            <MasonryList
                data={generatePins(50, currentCategory)}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Pin pin={item} />}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightGray,
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 6,
    },
});
