export interface User {
    id: string;
    name: string;
    avatar: string;
}

export interface Pin {
    id: string;
    image: string;
    user: User;
    title: string;
}
