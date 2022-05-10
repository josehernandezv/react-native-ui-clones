import { Entypo } from '@expo/vector-icons';
import React from 'react';

import type { StackParamList } from './MainNavigator';

export type Clone = {
    name: string;
    icon: React.ComponentProps<typeof Entypo>['name'];
    color: string;
    screen: keyof StackParamList;
};

export const clones: Clone[] = [
    {
        name: 'Facebook',
        icon: 'facebook-with-circle',
        color: '#1778F2',
        screen: 'Facebook',
    },
    {
        name: 'Pinterest',
        icon: 'pinterest-with-circle',
        color: '#E60023',
        screen: 'Pinterest',
    },
    {
        name: 'Spotify',
        icon: 'spotify',
        color: '#1DB954',
        screen: 'Spotify',
    },
];
