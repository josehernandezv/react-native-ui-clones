import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { ComponentProps, ComponentType } from 'react';
import { Text, View } from 'react-native';

import Home from './Home';
import TabBarAvatar from './TabBarAvatar';
import { black, gray, white } from './constants';
import { UserProvider } from './userContext';

function EmptyScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Hello!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();

const screens: {
    component: ComponentType<any>;
    name: string;
    icon: ComponentProps<typeof Icon>['name'];
}[] = [
    {
        component: Home,
        name: 'Home',
        icon: 'home-variant',
    },
    {
        component: EmptyScreen,
        name: 'Search',
        icon: 'magnify',
    },
    {
        name: 'Messages',
        component: EmptyScreen,
        icon: 'chat-processing',
    },
    {
        name: 'Profile',
        component: EmptyScreen,
        icon: 'face-profile',
    },
];
export default function Pinterest() {
    return (
        <UserProvider>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: black,
                    tabBarInactiveTintColor: gray,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: white,
                        paddingHorizontal: '20%',
                        borderTopWidth: 0,
                    },
                    headerShown: false,
                }}
            >
                {screens.map(({ component, name, icon }) => (
                    <Tab.Screen
                        key={name}
                        name={name}
                        component={component}
                        options={{
                            tabBarIcon: ({ color, focused }) => {
                                if (name === 'Profile') {
                                    return (
                                        <TabBarAvatar
                                            size={32}
                                            focused={focused}
                                        />
                                    );
                                }
                                return (
                                    <Icon name={icon} size={32} color={color} />
                                );
                            },
                        }}
                    />
                ))}
            </Tab.Navigator>
        </UserProvider>
    );
}
