import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

import { darkGray, darkBlue } from './constants';

interface TabsProps {
    options: string[];
    tabStyle?: ViewStyle;
}

export default function Tabs({ options, tabStyle }: TabsProps) {
    const [selectedTab, setSelectedTab] = useState(options[0]);
    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={option}
                    style={[
                        styles.tab,
                        tabStyle,
                        selectedTab === option && styles.selectedTab,
                    ]}
                    onPress={() => setSelectedTab(option)}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: selectedTab === option ? darkBlue : darkGray,
                        }}
                    >
                        {option}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tab: {
        padding: 12,
    },
    selectedTab: {
        borderBottomColor: darkBlue,
        borderBottomWidth: 3,
    },
});
