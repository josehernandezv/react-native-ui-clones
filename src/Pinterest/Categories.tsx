import { useRef } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { black, white } from './constants';

interface CategoriesProps {
    categories: string[];
    currentCategory: string;
    onCategoryPress: (category: string) => void;
}

export default function Categories({
    categories,
    currentCategory,
    onCategoryPress,
}: CategoriesProps) {
    const flatListRef = useRef<FlatList>(null);

    const handlePress = (category: string, index: number) => {
        onCategoryPress(category);
        flatListRef.current?.scrollToIndex({
            animated: true,
            index,
            viewPosition: 0.5,
        });
    };
    return (
        <View>
            <FlatList
                ref={flatListRef}
                data={categories}
                contentContainerStyle={styles.container}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={category => category}
                renderItem={({ item, index }) => (
                    <Pressable
                        onPress={() => handlePress(item, index)}
                        style={[
                            styles.item,
                            currentCategory === item && styles.selectedItem,
                        ]}
                    >
                        <Text
                            style={[
                                styles.text,
                                currentCategory === item && styles.selectedText,
                            ]}
                        >
                            {item}
                        </Text>
                    </Pressable>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingTop: 0,
    },
    item: {
        padding: 12,
        borderRadius: 999,
    },
    selectedItem: {
        backgroundColor: black,
    },
    text: {
        color: black,
        fontSize: 17,
    },
    selectedText: {
        color: white,
    },
});
