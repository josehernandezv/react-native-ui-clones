import { ImageSourcePropType } from 'react-native';

export interface User {
    id: string;
    name: string;
    avatar: string;
}

export interface Post {
    id: string;
    user: User;
    date: string;
    content: string;
    image: string;
    comments: number;
    shares: number;
    likes: number;
    reactions: ImageSourcePropType[];
}

export interface Story {
    id: string;
    user: User;
    image: string;
}
