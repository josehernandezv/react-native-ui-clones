import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { ComponentProps, ComponentType } from 'react';
import { Text, View } from 'react-native';

import Header from './Header';
import Home from './Home';
import { blue, white } from './constants';
import { UserProvider } from './userContext';

function EmptyScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Hello!</Text>
        </View>
    );
}

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
        iconFocused: 'home',
        icon: 'home-outline',
    },
    {
        component: EmptyScreen,
        name: 'Friends',
        iconFocused: 'account-multiple',
        icon: 'account-multiple-outline',
    },
    {
        name: 'Watch',
        component: EmptyScreen,
        icon: 'television-play',
        iconFocused: 'youtube-tv',
    },
    {
        name: 'Notifications',
        component: EmptyScreen,
        icon: 'bell-outline',
        iconFocused: 'bell',
    },
    {
        name: 'Profile',
        component: EmptyScreen,
        icon: 'account-circle-outline',
        iconFocused: 'account-circle',
    },
    {
        name: 'Menu',
        component: EmptyScreen,
        icon: 'menu',
        iconFocused: 'menu',
    },
];

export default function Facebook() {
    return (
        <UserProvider>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: blue,
                    tabBarShowLabel: false,
                    header: () => <Header />,
                    tabBarStyle: {
                        backgroundColor: white,
                    },
                }}
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
        </UserProvider>
    );
}
