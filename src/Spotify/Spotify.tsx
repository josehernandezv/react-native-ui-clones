import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import type { ComponentProps, ComponentType } from 'react';

import Home from './Home';
import Library from './Library';
import Search from './Search';
import { black, lightGray, white } from './constants';

const Tab = createBottomTabNavigator();

const screens: {
    component: ComponentType<any>;
    name: string;
    iconFocused: ComponentProps<typeof Icon>['name'];
    icon: ComponentProps<typeof Icon>['name'];
}[] = [
    {
        component: Home,
        name: 'Home',
        iconFocused: 'home-variant',
        icon: 'home-variant-outline',
    },
    {
        component: Search,
        name: 'Search',
        iconFocused: 'magnify',
        icon: 'magnify',
    },
    {
        component: Library,
        name: 'Your Library',
        iconFocused: 'playlist-music',
        icon: 'playlist-music-outline',
    },
];

export default function Spotify() {
    return (
        <>
            <StatusBar style="light" />
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: white,
                    tabBarInactiveTintColor: lightGray,
                    tabBarStyle: {
                        backgroundColor: 'rgba(18,18,18,0.8)',
                        borderTopWidth: 0,
                        position: 'absolute',
                    },
                    headerShown: false,
                }}
                sceneContainerStyle={{ backgroundColor: 'black' }}
            >
                {screens.map(({ component, name, iconFocused, icon }) => (
                    <Tab.Screen
                        key={name}
                        name={name}
                        component={component}
                        options={{
                            tabBarIcon: ({ focused, color, size }) => {
                                const iconName = focused ? iconFocused : icon;
                                return (
                                    <Icon
                                        name={iconName}
                                        size={size}
                                        color={color}
                                    />
                                );
                            },
                        }}
                    />
                ))}
            </Tab.Navigator>
        </>
    );
}
